---
cover: /assets/images/servers.png
date: 2023-12-22
category:
  - SSL
tag:
  - SSL
  - https
  - 建站
---
# 免费申请SSL证书
### Certbot 简介

Github 地址：[https://github.com/certbot/certbot](https://github.com/certbot/certbot)
本质上来说，certbot 就是一个 ACME client，这也是 [Let’s Encrypt](https://letsencrypt.org/getting-started/) 官网推荐的签发证书的方式，适用于对自己的 domain 具有 shell 访问能力的情况，使用所谓的 [ACME](https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment) 协议来自动化的签发证书，很大程度上简化了证书签发的步骤

### 1.准备
- 拥有一个可以访问的域名
- 拥有一台云服务器
### 2.使用Docker安装
```dockerfile
docker run -it --rm --name certbot -v "/etc/letsencrypt:/etc/letsencrypt" -v "/var/lib/letsencrypt:/var/lib/letsencrypt" -p 80:80 certbot/certbot certonly
```
### 3.运行命令后按照提示操作
### 4.生成文件
```txt
Successfully received certificate.

Certificate is saved at: **

Key is saved at: **

This certificate expires on 2024-03-21.
```
### 最后，邮箱验证

### 5.基于Docker环境下给Nginx进行配置
- docker安装Nginx

  ```docker
  docker run --restart always --name Nginx -d -p 80:80 nginx
  ```

- 访问界面测试
	
 - 挂载后重启

   ```dockerfile
   docker run --restart always --name Nginx -d -p 80:80 -v /home/nginx/html:/usr/share/nginx/html -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf nginx
   ```
- 添加SSL证书

  ```nginx
  server {  
      listen       80;  
      listen  [::]:80;  
      server_name  www.flashdiko.top;  
    
      rewrite ^(.*) https://$server_name$1 permanent;  
    
  }  
    
  server {  
      listen       443 ssl;  
      server_name  www.flashdiko.top;  
    
      ssl_certificate      /home/nginx/ssl/fullchain.pem;  
      ssl_certificate_key  /home/nginx/ssl/privkey.pem;  
    
      ssl_session_cache    shared:SSL:1m;  
      ssl_session_timeout  5m;  
    
      ssl_ciphers  HIGH:!aNULL:!MD5;  
      ssl_prefer_server_ciphers  on;  
    
      location / {  
          proxy_set_header   X-Real-IP         $remote_addr;  
          proxy_set_header   Host              $http_host;  
          proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;  
          root   /usr/share/nginx/html;  
          index  index.html index.htm;  
      }  
    
      error_page   500 502 503 504  /50x.html;  
      location = /50x.html {  
          root   /usr/share/nginx/html;  
      }  
  }
  ```
- 重新挂载重启

  ```dockerfile
  docker run --name Nginx -p 443:443 -p 80:80 -v /home/nginx/logs:/var/log/nginx -v/home/nginx/html:/usr/share/nginx/html
  -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  -d --restart=always nginx
  ```
- 进入nginx容器

- 在外部编写好`default.conf`后copy到容器内，包括生成的`pem`文件

  ```dockerfile
  docker cp default.conf Nginx:/etc/nginx/conf.d/
  ```
- 重启

  ```dockerfile
  docker restart Nginx
  ```
- 重新访问，已经是https了


# PS`更新`

用这种方式生成的短期证书有效期是 90 天，在过期之后我们还需要对其进行更新（renew）操作，只需要将上面的命令 `certonly` 改为 `renew` 即可，该命令会自动更新 `/etc/letsencrypt/live/` 目录下有效期少于 30 天的证书.然后使用`docker cp`命令拷贝到Nginx容器中，最后重启
