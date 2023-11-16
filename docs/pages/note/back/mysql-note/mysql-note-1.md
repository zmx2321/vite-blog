# mysql笔记整理
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> 注释内容在navicat中皆可直接运行，需要先直接运行查询内容，创建表结构之后，之后可以选择任意具体的语句直接运行，经过测试，里面的增删改查，多表查询，复杂条件查询等都可运行成功。

```sql
-- 如果存在，删除
DROP DATABASE IF EXISTS QQGame;

-- 创建数据库
CREATE DATABASE QQGame;

-- 使用数据库
use QQGame;

-- 游戏表(Games)
-- 如果存在，删除表
DROP TABLE IF EXISTS Games;

-- 创建表
CREATE TABLE Games(
	GNo INT NOT NULL PRIMARY KEY auto_increment,  #编号
	GName VARCHAR(50) NOT NULL,  #名称
	GType VARCHAR(20) NOT NULL  #类型
)ENGINE=INNODB CHARSET=utf8;

-- 修改表名
#ALTER TABLE Games RENAME TO Games0;
#DESC Games0;

-- 修改字段名称
#ALTER TABLE Games CHANGE GNo GNo11 VARCHAR(20);

-- 修改字段数据类型
#ALTER TABLE Games MODIFY GNo VARCHAR(20);

-- 添加字段
#ALTER TABLE Games ADD aaa VARCHAR(18);

-- 删除字段
#ALTER TABLE Games DROP aaa;

-- 查看表结构
#DESC Games;

-- 添加数据
INSERT INTO Games VALUES
	(1, '英雄联盟', '网游'),
	(2, '冒险岛', '毛线'),
	(3, 'CF', '射击'),
	(4, '地下城与勇士', '网游');

-- 查看表
#SELECT * FROM Games;

-- 清空数据
#TRUNCATE Games;

-- 删除表
#DROP TABLE Games;



-- 玩家表(Users)
DROP TABLE IF EXISTS Users;

-- 创建表
CREATE TABLE Users(
	UserQQ VARCHAR(20) NOT NULL PRIMARY KEY,  #QQ号
	UserName VARCHAR(50) NOT NULL,  #昵称
	UserSex CHAR(2) NOT NULL DEFAULT '男',  #性别
	UserBirthday DATE DEFAULT NULL,  #生日
	UserPhone char(11) NOT NULL #手机号
)ENGINE=INNODB CHARSET=utf8;

-- 查看表结构
#DESC Users;

-- 添加数据
INSERT INTO Users VALUES ('12306', '周天', '男', '1982-02-01', '1381112221');
INSERT INTO Users(UserQQ, UserName, UserPhone) VALUES ('12303', '钉钉', '1381122112');
INSERT INTO Users VALUES 
	('12302', '周八', '男', '1998-6-7', '138112277466'),
	('12301', '王六', '女', '1995-6-7', '136662757466'),
	('12304', '李飞', '男', '1983-9-5', '159588643579');

-- 修改数据
#UPDATE Users SET UserSex='男';
/*UPDATE Users SET UserSex='女' WHERE UserQQ='20020101';
SELECT * FROM Users WHERE UserQQ='20020101';*/

-- 删除数据
/*DELETE FROM Users WHERE UserQQ='20020101';
SELECT * FROM Users WHERE UserQQ='20020101';*/
-- 删除所有数据
-- DELETE FROM Users;

-- 查询
#SELECT * FROM Users;

-- 清空数据
#TRUNCATE Users;

-- 删除表
#DROP TABLE Users;



-- 分数表(Scores)
DROP TABLE IF EXISTS Scores;

-- 创建表
CREATE TABLE Scores(
	UserQQ VARCHAR(20) NOT NULL,  #QQ号
	Gno INT NOT NULL,  #游戏编号
	Grades INT  #分数
)ENGINE=INNODB CHARSET=utf8;

-- 查看表结构
#DESC Scores;

-- 添加数据

INSERT INTO Scores VALUES
	('12301', 1, 3700),
	('12301', 2, 2400),
	('12303', 3, 2400),
	('12302', 1, 2400),
	('12304', 3, 2400),
	('12306', 4, 6900),
	('12303', 1, 5600);

-- 修改数据
#UPDATE Scores SET Grades=Grades+100;

-- 查看表
#SELECT * FROM Scores;

-- 清空数据
#TRUNCATE Scores;

-- 删除表
#DROP TABLE Scores;




/*
	查询
*/
-- 查询玩家表中qq和名字
#SELECT UserQQ, UserName FROM Users; 

-- 别名
/*SELECT 
	UserQQ AS '玩家QQ', 
	UserName '玩家姓名'  #姓名可省略
FROM Users;*/

-- 取消重复列
#SELECT UserQQ FROM Scores;
#SELECT DISTINCT UserQQ FROM Scores;

-- LIMIT 查找指定范围
#SELECT * FROM Users;
#SELECT * FROM Users LIMIT 2,3;  #从0开始数，第2(3)条开始，查询出3条数据

-- 条件查询
#SELECT * FROM Users WHERE UserQQ='12301';

-- 比较查询
#SELECT * FROM Scores WHERE Gno=1 AND Grades>4000;
#SELECT * FROM Scores WHERE Gno=1 OR Gno=2;

-- 查询区间(包含边界)
#SELECT * FROM Scores WHERE Grades BETWEEN 2400 AND 3700;

-- 查询从1983年1月1日到1995年6月7日出生的玩家(包含边界)
/*SELECT * FROM Users
WHERE UserBirthday
BETWEEN '1983-01-01'  AND '1995-06-7';*/

-- 查找姓王的玩家
-- 模糊查询(%只能和like连接，代表任意字符)
/*SELECT * FROM Users
WHERE UserName LIKE '王%';*/

-- 查询空值
/*SELECT * FROM Users
WHERE UserBirthday IS NULL;*/

-- 查询非空值
/*SELECT * FROM Users
WHERE UserBirthday IS NOT NULL;*/

-- 排序
-- 查询编号为1的所有分数信息，并按照分数升序排列(ASC)
-- 小到大
/*SELECT * FROM Scores
WHERE Gno=1
ORDER BY Grades ASC;*/

-- 查询编号为1的所有分数信息，并按照分数降序排列(DESC)
-- 大到小
/*SELECT * FROM Scores
WHERE Gno=1
ORDER BY Grades DESC;*/

-- 多列排序
-- 查询分数表所有信息，并按照游戏编号的升序和分数的降序进行排列
-- 优先级从最前面的开始
/*SELECT * FROM Scores
ORDER BY 
	Gno ASC,
	Grades DESC;*/





/*
	查询进阶
*/
/*汇总和分组数据*/
-- 聚合函数

-- 查询玩家表中一共有多少玩家的信息(QQ不为空)
#SELECT COUNT(UserQQ)  AS '玩家数量' FROM Users;
-- 查询玩家表中多少人填写了生日信息
#SELECT COUNT(UserBirthday)  AS '填写了生日的玩家数量' FROM Users;
-- 任意列不为空，都会进行统计
#SELECT COUNT(*)  AS '填写了生日的玩家数量' FROM Users;

-- 查询QQ号是12302的玩家的平均分数
/*SELECT AVG(Grades) AS '平均分数'
FROM Scores WHERE UserQQ='12302';*/

-- 查询游戏编号为1的玩家的最高分数
/*SELECT MAX(Grades) AS '最高分数'
FROM Scores WHERE Gno=1;*/

-- 查询QQ号是12301的玩家的总分，平均分和最高分
/*SELECT
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分',
	MAX(Grades) AS '最高分数'
FROM Scores WHERE UserQQ='12301';*/

-- 每个玩家的总分，平均分和最高分(分组)
/*SELECT
	UserQQ,
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分',
	MAX(Grades) AS '最高分数'
FROM Scores
GROUP BY UserQQ;*/

-- 查询平均分大于2500的玩家QQ号、总分、平均分
-- HAVING以聚合函数为统计结果的条件
/*SELECT
	UserQQ,
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分',
	MAX(Grades) AS '最高分数'
FROM Scores
GROUP BY UserQQ
HAVING AVG(Grades)>2500;*/

-- 查询所有用户的平均分和总分数，并按照平均分倒序排列
/*SELECT
	UserQQ AS 'QQ号',
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分'
FROM Scores
GROUP BY UserQQ
ORDER BY AVG(Grades) DESC;*/


/*多表查询*/
-- 内连接
-- 查询分数信息，显示玩家昵称、游戏名和分数
-- 隐式内连接
/*SELECT 
	UserName AS '昵称',
	GName AS '游戏名称',
	Grades AS '分数'
FROM Users, Scores, Games
WHERE Users.UserQQ=Scores.UserQQ
AND Games.Gno=Scores.Gno;*/

-- 显式内连接
/*SELECT 
	UserName AS '昵称',
	GName AS '游戏名称',
	Grades AS '分数'
FROM Users INNER JOIN Scores INNER JOIN Games
ON Users.UserQQ=Scores.UserQQ
AND Games.Gno=Scores.Gno;*/

-- 查询每个玩家的昵称、平均分和总分
/*SELECT
	UserName AS '昵称',
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分'
FROM Users U INNER JOIN Scores S
ON U.UserQQ=S.UserQQ
GROUP BY U.UserQQ, UserName;*/

-- 查询平均分数大于2500的分数信息，显示玩家昵称，总分，平均分数
-- 并按照平均分数降序排列
/*SELECT
	UserName AS '昵称',
	SUM(Grades) AS '总分',
	AVG(Grades) AS '平均分'
FROM Users U INNER JOIN Scores S
ON U.UserQQ=S.UserQQ
GROUP BY U.UserQQ, UserName
HAVING AVG(Grades)>2500
ORDER BY AVG(Grades) DESC;*/


-- 外连接
-- 查询所有玩家关于3号游戏的分数信息
-- 基础表：玩家表，非基础表：分数表
/*SELECT
	UserName AS '昵称',
	Gno AS '游戏编号'
FROM Users U LEFT JOIN Scores S
ON U.UserQQ=S.UserQQ
AND S.Gno=3;*/



/*子查询*/
-- 使用IN关键字查询
-- 查询网游类的分数信息
-- 以IN中查询的结果集为条件，IN表示在某个范围之内，IN中的查询为子查询
/*SELECT 
	UserQQ AS 'QQ',
	Gno AS '游戏编号',
	Grades AS '分数'
FROM Scores WHERE Gno 
IN(
	SELECT Gno 
	FROM Games 
	WHERE GType='网游'
);*/

-- 使用NOT IN关键字查询
-- 查询没有参与3号游戏的玩家的qq号
/*SELECT 
	UserQQ AS '没有参与CF的玩家'
FROM Users
WHERE UserQQ 
NOT IN(
	SELECT UserQQ 
	FROM Scores
	WHERE Gno=3
)
GROUP BY UserQQ;*/

-- 使用EXISTS关键字查询
-- 如果存在昵称为'李飞'，则查询分数表中的数据
/*SELECT * FROM Scores
WHERE EXISTS(
	SELECT * FROM Users
	WHERE UserName LIKE '李飞%'
);*/


/*联合查询*/
-- 将两个表纵向连接在一起
/*SELECT UserName FROM Users
UNION
SELECT Gname FROM Games;*/

/*SELECT UserName, UserQQ FROM Users
UNION
SELECT Gname FROM Games;
报错：列的数量不相同
The used SELECT statements have a different number of columns
*/

-- 查询玩家表中所有女性玩家和生日为空的玩家
/*SELECT * FROM Users WHERE UserSex='女'
UNION
SELECT * FROM Users WHERE UserBirthday IS NULL;
#SELECT * FROM Users WHERE UserSex='女' OR UserBirthday IS NULL;*/

-- 查询QQ号是'12301'的玩家所有分数并计算出总分和平均分，并显示在同一结果集中
/*SELECT 
	UserQQ,Gno,Grades
FROM Scores WHERE UserQQ='12301'
UNION ALL
SELECT
	'总分',  #常数列
	' ',
	SUM(Grades)
FROM Scores WHERE UserQQ='12301'
UNION ALL
SELECT
	'平均分',  #常数列
	' ',
	AVG(Grades)
FROM Scores WHERE UserQQ='12301';*/


/*
常用函数
*/
/*日期函数*/
-- 系统日期
/*SELECT CURDATE(), 
CURRENT_DATE(), 
CURDATE()+0;  #转字符串*/

-- 系统时间
/*SELECT CURTIME(),
CURRENT_TIME(), 
CURTIME()+0;  #转字符串*/

-- 返回日期和时间
/*SELECT NOW(),
SYSDATE();*/
```