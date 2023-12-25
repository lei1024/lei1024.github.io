---
title: flask服务注册到nacos
description: flask服务注册到nacos实战
aside: false
date: 2023-11-09
tags:
  - python
  - nacos

---
# flask服务注册到nacos
### Java调用

1.添加pom依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

2.添加接口

```java

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

/**
 * AI预测远程调用-python-flask服务
 *
 * @author leijiahao
 * @date 2023-10-19
 */

//@FeignClient(value = "ai-predict-service",url = "${feign.client.url.ai}")
@FeignClient(value = "${feign.client.url.name}",url = "${feign.client.url.address}")
public interface AiPredictFeignClient {


    /**
     * 模型列表
     *
     * @return 结果
     */
    @GetMapping("/model_list")
    AjaxResult modelList();

    /**
     * 数据集列表
     *
     * @return 结果
     */
    @GetMapping("/result_list")
    AjaxResult resultList();


    @PostMapping(value = "/predict", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    AjaxResult predict(@RequestBody PredictionReq predictionReq);

    @PostMapping(value = "uploader", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    AjaxResult uploader(@RequestPart("file") MultipartFile file);


    @PostMapping(value = "/predict", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    ResponseEntity<byte[]> predict(
            @RequestPart("projectId") String projectId,
            @RequestPart("modelName") String modelName,
            @RequestPart("dataIndex") Integer dataIndex,
            @RequestPart("modelPath") String modelPath,
            @RequestPart("dataSavePath") String dataSavePath,
            @RequestPart("resultPath") String resultPath,
            @RequestPart("file") MultipartFile file,
            @RequestPart("numFuturePoints") Integer numFuturePoints
    );

    @PostMapping(value = "/predict", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    AjaxResult train(
            @RequestPart("projectId") String projectId,
            @RequestPart("modelName") String modelName,
            @RequestPart("dataIndex") Integer dataIndex,
            @RequestPart("modelPath") String modelPath,
            @RequestPart("dataSavePath") String dataSavePath,
            @RequestPart("resultPath") String resultPath,
            @RequestPart("file") MultipartFile file,
            @RequestPart("numFuturePoints") Integer numFuturePoints
    );

}

```

3.python代码

https://github.com/lei1024/python-nacos-server
