# nginx工作积累

## 1. vue项目中使用proxy之后，在nginx中如何代理
```js
server {
      listen       8000;
      server_name  web;
      root         /usr/share/nginx/html;

      location / {

      }

      location ^~/api {
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_buffering off;
           rewrite ^/api/(.*)$ /$1 break;
           proxy_pass http://gateway;
      }
    }
```
在app.json文件中的page数组中添加路径，会自动创建文件夹，并生成其相对应的js、json、wxml和wxss文件

## 2. nginx中解决请求模型地址跨域问题
```js
// config.json
server {
  listen       6080;
  server_name  localhost;

  location / {
      root   E:\workspace\_poj;
      index  index.html index.htm;

      include       nginx_cors;  #引入文件,解决跨域问题
  }

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
      root   html;
  }
}

// 在nginx.conf同级目录下添加nginx_cors文件,整个拷贝
// nginx_cors
#坑：1、'Access-Control-Allow-Credentials': true 是不能*  可以 add_header 'Access-Control-Allow-Origin' $http_origin;



if ($request_method = 'OPTIONS') {
	add_header 'Access-Control-Allow-Origin' '*';
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';

	# Custom headers and headers various browsers *should* be OK with but aren't 
	add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';

	# Tell client that this pre-flight info is valid for 20 days 
	add_header 'Access-Control-Max-Age' 1728000;
	add_header 'Content-Type' 'text/plain charset=UTF-8';
	add_header 'Content-Length' 0;
	return 204;
}
if ($request_method = 'POST') {
	add_header 'Access-Control-Allow-Origin' '*';
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
	add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
}
if ($request_method = 'GET') {
	add_header 'Access-Control-Allow-Origin' '*';
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
	add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
}
```

## 3. nginx中设置密码
```js
server {
    listen       6080;
    server_name  localhost;

    location / {
        root   E:\workspace\_poj;
        index  index.html index.htm;

        auth_basic "BasicAuth";
        auth_basic_user_file htpd;

        include       nginx_cors;
    }

    location @rewrites {
        rewrite ^(.+)$ /index.html last;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

// htpd
test: 123456
```

## 4. vue中proxy的反向代理
```nginx
include       nginx_cors;

location ^~/api {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        rewrite ^/api/(.*)$ /$1 break;
        proxy_pass http://192.168.2.245:8031/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```