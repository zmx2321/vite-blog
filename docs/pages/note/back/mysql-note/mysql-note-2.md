# MySQL升级5.7,sql语句报错解决
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> MySQL升级5.7之后经常会出现这种错误：[Err] 1055 - Expression #1 of ORDER BY clause is not in GROUP BY clause and contains nonaggregated column 'information_schema.PROFILING.SEQ',虽然不影响SQL执行，但感觉不好

1. 查询一下配置看看具体的情况
  - `select @@sql_mode;`
  - ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
    - 其中ONLY_FULL_GROUP_BY就是造成这个错误的罪魁祸首
    - 对于group by聚合操作,如果在select中的列没有在group by中出现,那么这个SQL是不合法的,因为列不在group by从句中,所以设置了sql_mode=only_full_group_by的数据库,在使用group by时就会报错
2. 找到MySQL的配置文件
  - Windows系统配置文件为安装MySQL目录下的my.ini文件，linux系统是/etc/my.cnf文件，查询sql_mode字段，我并没有在配置文件中找到这个关键字,所以我手动添加进去
    - `sql_mode = STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION`
      - 一定要添加在[mysqld]配置内，这样添加完后重启mysql才会生效
3. 重启mysql
  - `service mysqld restart;`
4. 刷新页面报错信息消失成功解决，再次连接上数据库查看sql_mode配置
  - `select @@sql_mode;`
    - STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION