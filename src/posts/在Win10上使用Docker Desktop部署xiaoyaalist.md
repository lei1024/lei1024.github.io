---
cover: /assets/images/docker.png
description: docker desktop on windows 部署 alist
aside: false
date: 2023-11-14
tag:
  - Win10
  - Docker
  - NAS
  - Alist
  - 影视工具
---
# 在win10上使用dockerdesktop部署xiaoyaalist
> 小雅alist的官网：https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f

> Alist官网：https://alist.nn.ci/zh/

因为本电脑使用curl命令拉取脚本无效，所以使用docker逐步构建

### 1.拉取xiaoya镜像

```dock
docker pull xiaoyaliu/alist
```

### 2.创建一个存放配置文件的本地文件夹如D://xiaoya_alist/

- 创建*mytoken.txt* **必要的**，获取方式：https://aliyuntoken.vercel.app/ 扫码后将内容填入txt文件
- 创建*myopentoken.txt* **必要的**，获取方式：https://alist.nn.ci/zh/guide/drivers/aliyundrive_open.html 拿到token后将内容填入文件
- 创建*temp_transfer_folder_id.txt* **必要的**，在阿里云盘中的**资源库**中创建一个文件夹，然后浏览器打开目录，浏览器的url 
  https://www.aliyundrive.com/drive/file/resource/640xxxxxxxxxxxxxxxxxxxca8a 最后一串就是，记得这个目录不要删，里面的内容可以定期删除。将内容填入文件
- show_my_ali.txt，只要有这个文件夹就能查看到自己的云盘内容
- docker_address.txt ，配置tvbox使用，里面写服务地址，可以写本电脑ip加容器运行的端口，如：http://192.168.3.1:5678

### 3.启动容器

```dockerfile
docker run -itd --name xiaoya -p 5678:80 -v D://xiaoya_alist:/data --restart=always xiaoyaliu/alist
```

### 4.查看启动日志，如有报错，查看官网解决

```dockerfile
docker logs -f xiaoya
```

### 5.访问，本机IP加端口号5678
