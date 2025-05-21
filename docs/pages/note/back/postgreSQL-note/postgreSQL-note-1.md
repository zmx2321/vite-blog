# postgreSQL工作积累

## 安装PostGIS 扩展
- 使用 Homebrew 安装 PostGIS
    - brew install postgis
- 需要在有权限的数据库中执行
    - CREATE EXTENSION postgis;

## 查看postGIS
- 要检查 PostgreSQL 数据库中是否安装了 PostGIS 扩展，你可以使用以下 SQL 查询：
  - SELECT * FROM pg_extension WHERE extname = 'postgis';
- 检查 PostgreSQL 版本
  - SELECT version();


