---
cover: /assets/images/mybatis.png
description: 通过sql拦截器实现前端显示假脱敏
aside: false
date: 2023-11-10
tag:
  - Java
  - Mybatis
  - Spring
  - 安全

---
# 数据脱敏-通过mybatis拦截器
### 1. 添加脱敏拦截器

```java
package cn.cmcc.common.datasource.config;

import cn.cmcc.common.utils.bean.ObjectUtils;
import cn.hutool.crypto.digest.DigestUtil;
import org.apache.ibatis.cache.CacheKey;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;

import javax.annotation.PostConstruct;
import java.util.*;

/**
 * @author leijiahao
 * @date 2023-11-07
 */
@Intercepts({@Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),})
public class DataMasInterceptor implements Interceptor {


    private List<String> encryptionList;
    private Set<String> targetMappers; // 存储目标 Mapper 的集合
    public DataMasInterceptor(Set<String> targetMappers) {
        this.targetMappers = targetMappers;
    }

    public static String maskChineseString(String input) {
        if (input == null || input.length() <= 2 || "null".equals(input)) {
            return input;
        }
        // 查找倒数两个汉字的索引
        int lastIndex = -1;
        int count = 0;
        for (int i = input.length() - 1; i >= 0; i--) {
            char c = input.charAt(i);
            if (isChineseCharacter(c)) {
                count++;
                if (count == 2) {
                    lastIndex = i;
                    break;
                }
            }
        }
        // 使用 * 号替换前面的部分
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < lastIndex; i++) {

            sb.append("*");
        }
        // 保留倒数两个汉字及后面的部分
        sb.append(input.substring(lastIndex));
        return sb.toString();
    }

    public static boolean isChineseCharacter(char c) {
        Character.UnicodeBlock block = Character.UnicodeBlock.of(c);
        return block == Character.UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS || block == Character.UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS || block == Character.UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A;
    }

    public static double maskLonLat(double value) {
        if (ObjectUtils.isEmpty(value)) {
            return value;
        }
        Random random = new Random();
        double offset = random.nextDouble() * 0.0001 + 0.0001;
        return value + offset;
    }

    @PostConstruct
    public void init() {
        encryptionList = new ArrayList<>();
        // TODO: 2023-11-08 设置加密字段
//        encryptionList.add("cgi");
//        encryptionList.add("enb_id");
//        encryptionList.add("enb_name");
//        encryptionList.add("enodeb_name");
//        encryptionList.add("cell_name");
//        encryptionList.add("cell_id");
//        encryptionList.add("project_name");
//        encryptionList.add("project_id");
//        encryptionList.add("user_name");
    }

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        Object arg1 = invocation.getArgs()[0];
        // 拦截通用查询,加密字段
        if ((arg1 instanceof MappedStatement)
//                && targetMappers.contains(((MappedStatement) arg1).getId())
                && !encryptionList.isEmpty()
        ) {
            Object result = invocation.proceed();
            if (result instanceof ArrayList) {
                ArrayList resultList = (ArrayList) result;
                for (Object o : resultList) {
                    if (o instanceof Map) {
                        Map<String, Object> resultMap = (Map<String, Object>) o;
                        for (String key : encryptionList) {
                            if (resultMap.containsKey(key)) {
                                if (key.endsWith("name")) {
                                    resultMap.put(key, maskChineseString(String.valueOf(resultMap.get(key))));
                                } else if (key.endsWith("lon") || key.endsWith("lat")) {
                                    resultMap.put(key, maskLonLat(Double.parseDouble(String.valueOf(resultMap.get(key)))));
                                } else {
                                    //MD5加密
                                    resultMap.put(key, DigestUtil.md5Hex(String.valueOf(resultMap.get(key))
                                                                               .getBytes()));
                                }
                            }
                        }
                    }
                }
            }
            return result;
        } else {
            return invocation.proceed();
        }
    }
}
```

### 2.注册拦截器Bean到MybatisPlus的配置类中

```java
package cn.cmcc.common.datasource.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.HashSet;
import java.util.Set;

/**
 * Mybatis支持*匹配扫描包
 *
 * @author xhxk
 */
@EnableTransactionManagement(proxyTargetClass = true)
@Configuration
public class MybatisPlusConfig {

     @Bean
     public MybatisPlusInterceptor mybatisPlusInterceptor() {
         MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
         interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.POSTGRE_SQL));
         return interceptor;
     }

    @Bean
    public DataMasInterceptor dataMasInterceptor() {
        Set<String> targetMappers = new HashSet<>();
        // 添加目标 Mapper 的 ID
        targetMappers.add("mapper_id");
        // 可以添加多个目标 Mapper
        return new DataMasInterceptor(targetMappers);
    }

}
```
