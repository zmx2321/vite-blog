# MySQL笔记

### mybatits工作积累


### mysql工作积累
#### 查询表字段数量
```sql
SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA='数据库名' AND TABLE_NAME='表名';

-- 示例
SELECT COUNT(*) 
FROM information_schema.columns 
WHERE table_schema = 'testruoyi' 
  AND table_name = 'gen_table';
```