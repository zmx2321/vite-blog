import{_ as s,o as n,c as a,e as l}from"./app.b7d5c9fe.js";const D=JSON.parse('{"title":"mysql笔记整理","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/back/mysql-note/mysql-note-1.md","filePath":"pages/note/back/mysql-note/mysql-note-1.md","lastUpdated":1700192468000}'),p={name:"pages/note/back/mysql-note/mysql-note-1.md"},e=l(`<h1 id="mysql笔记整理" tabindex="-1">mysql笔记整理 <a class="header-anchor" href="#mysql笔记整理" aria-label="Permalink to &quot;mysql笔记整理&quot;">​</a></h1><blockquote><p>注释内容在navicat中皆可直接运行，需要先直接运行查询内容，创建表结构之后，之后可以选择任意具体的语句直接运行，经过测试，里面的增删改查，多表查询，复杂条件查询等都可运行成功。</p></blockquote><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;">-- 如果存在，删除</span></span>
<span class="line"><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DATABASE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">IF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">EXISTS</span><span style="color:#E1E4E8;"> QQGame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建数据库</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DATABASE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">QQGame</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用数据库</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> QQGame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 游戏表(Games)</span></span>
<span class="line"><span style="color:#6A737D;">-- 如果存在，删除表</span></span>
<span class="line"><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">IF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">EXISTS</span><span style="color:#E1E4E8;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Games</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	GNo </span><span style="color:#F97583;">INT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">PRIMARY KEY</span><span style="color:#E1E4E8;"> auto_increment,  #编号</span></span>
<span class="line"><span style="color:#E1E4E8;">	GName </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;">,  #名称</span></span>
<span class="line"><span style="color:#E1E4E8;">	GType </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;">  #类型</span></span>
<span class="line"><span style="color:#E1E4E8;">)ENGINE</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">INNODB CHARSET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改表名</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">ALTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> Games RENAME </span><span style="color:#F97583;">TO</span><span style="color:#E1E4E8;"> Games0;</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DESC</span><span style="color:#E1E4E8;"> Games0;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改字段名称</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">ALTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> Games CHANGE GNo GNo11 </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改字段数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">ALTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> Games </span><span style="color:#F97583;">MODIFY</span><span style="color:#E1E4E8;"> GNo </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加字段</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">ALTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> Games </span><span style="color:#F97583;">ADD</span><span style="color:#E1E4E8;"> aaa </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除字段</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">ALTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> Games </span><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> aaa;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DESC</span><span style="color:#E1E4E8;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> Games </span><span style="color:#F97583;">VALUES</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;英雄联盟&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;网游&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;冒险岛&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;毛线&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;CF&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;射击&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;地下城与勇士&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;网游&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">TRUNCATE</span><span style="color:#E1E4E8;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Games</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 玩家表(Users)</span></span>
<span class="line"><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">IF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">EXISTS</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Users</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserQQ </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">PRIMARY KEY</span><span style="color:#E1E4E8;">,  #QQ号</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserName </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;">,  #昵称</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserSex </span><span style="color:#F97583;">CHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DEFAULT</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,  #性别</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserBirthday </span><span style="color:#F97583;">DATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DEFAULT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NULL</span><span style="color:#E1E4E8;">,  #生日</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserPhone </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> #手机号</span></span>
<span class="line"><span style="color:#E1E4E8;">)ENGINE</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">INNODB CHARSET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DESC</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> Users </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;12306&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;周天&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1982-02-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1381112221&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> Users(UserQQ, UserName, UserPhone) </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;12303&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;钉钉&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1381122112&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> Users </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12302&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;周八&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1998-6-7&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;138112277466&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12301&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;王六&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;女&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1995-6-7&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;136662757466&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12304&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;李飞&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;1983-9-5&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;159588643579&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改数据</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">UPDATE</span><span style="color:#E1E4E8;"> Users </span><span style="color:#F97583;">SET</span><span style="color:#E1E4E8;"> UserSex</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">/*UPDATE Users SET UserSex=&#39;女&#39; WHERE UserQQ=&#39;20020101&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserQQ=&#39;20020101&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除数据</span></span>
<span class="line"><span style="color:#6A737D;">/*DELETE FROM Users WHERE UserQQ=&#39;20020101&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserQQ=&#39;20020101&#39;;*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 删除所有数据</span></span>
<span class="line"><span style="color:#6A737D;">-- DELETE FROM Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">TRUNCATE</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Users</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 分数表(Scores)</span></span>
<span class="line"><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">IF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">EXISTS</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Scores</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	UserQQ </span><span style="color:#F97583;">VARCHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;">,  #QQ号</span></span>
<span class="line"><span style="color:#E1E4E8;">	Gno </span><span style="color:#F97583;">INT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;">,  #游戏编号</span></span>
<span class="line"><span style="color:#E1E4E8;">	Grades </span><span style="color:#F97583;">INT</span><span style="color:#E1E4E8;">  #分数</span></span>
<span class="line"><span style="color:#E1E4E8;">)ENGINE</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">INNODB CHARSET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DESC</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> Scores </span><span style="color:#F97583;">VALUES</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12301&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3700</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12301&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2400</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12303&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2400</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12302&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2400</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12304&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2400</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12306&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6900</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">	(</span><span style="color:#9ECBFF;">&#39;12303&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5600</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改数据</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">UPDATE</span><span style="color:#E1E4E8;"> Scores </span><span style="color:#F97583;">SET</span><span style="color:#E1E4E8;"> Grades</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">Grades</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">TRUNCATE</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">DROP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Scores</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	查询</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中qq和名字</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> UserQQ, UserName </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 别名</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;玩家QQ&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">	UserName &#39;玩家姓名&#39;  #姓名可省略</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 取消重复列</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> UserQQ </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT DISTINCT</span><span style="color:#E1E4E8;"> UserQQ </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- LIMIT 查找指定范围</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users </span><span style="color:#F97583;">LIMIT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;  #从0开始数，第2(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)条开始，查询出3条数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 条件查询</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users </span><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> UserQQ</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;12301&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 比较查询</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores </span><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> Gno</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">AND</span><span style="color:#E1E4E8;"> Grades</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores </span><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> Gno</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">OR</span><span style="color:#E1E4E8;"> Gno</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询区间(包含边界)</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Scores </span><span style="color:#F97583;">WHERE</span><span style="color:#E1E4E8;"> Grades </span><span style="color:#F97583;">BETWEEN</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2400</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">AND</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3700</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询从1983年1月1日到1995年6月7日出生的玩家(包含边界)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday</span></span>
<span class="line"><span style="color:#6A737D;">BETWEEN &#39;1983-01-01&#39;  AND &#39;1995-06-7&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查找姓王的玩家</span></span>
<span class="line"><span style="color:#6A737D;">-- 模糊查询(%只能和like连接，代表任意字符)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserName LIKE &#39;王%&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询空值</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday IS NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询非空值</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday IS NOT NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 排序</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询编号为1的所有分数信息，并按照分数升序排列(ASC)</span></span>
<span class="line"><span style="color:#6A737D;">-- 小到大</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Gno=1</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY Grades ASC;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询编号为1的所有分数信息，并按照分数降序排列(DESC)</span></span>
<span class="line"><span style="color:#6A737D;">-- 大到小</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Gno=1</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY Grades DESC;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 多列排序</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询分数表所有信息，并按照游戏编号的升序和分数的降序进行排列</span></span>
<span class="line"><span style="color:#6A737D;">-- 优先级从最前面的开始</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY </span></span>
<span class="line"><span style="color:#6A737D;">	Gno ASC,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	查询进阶</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">/*汇总和分组数据*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 聚合函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中一共有多少玩家的信息(QQ不为空)</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">COUNT</span><span style="color:#E1E4E8;">(UserQQ)  </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;玩家数量&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中多少人填写了生日信息</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">COUNT</span><span style="color:#E1E4E8;">(UserBirthday)  </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;填写了生日的玩家数量&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"><span style="color:#6A737D;">-- 任意列不为空，都会进行统计</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">COUNT</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)  </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;填写了生日的玩家数量&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是12302的玩家的平均分数</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT AVG(Grades) AS &#39;平均分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12302&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询游戏编号为1的玩家的最高分数</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE Gno=1;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是12301的玩家的总分，平均分和最高分</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 每个玩家的总分，平均分和最高分(分组)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询平均分大于2500的玩家QQ号、总分、平均分</span></span>
<span class="line"><span style="color:#6A737D;">-- HAVING以聚合函数为统计结果的条件</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">HAVING AVG(Grades)&gt;2500;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询所有用户的平均分和总分数，并按照平均分倒序排列</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;QQ号&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY AVG(Grades) DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*多表查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 内连接</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询分数信息，显示玩家昵称、游戏名和分数</span></span>
<span class="line"><span style="color:#6A737D;">-- 隐式内连接</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	GName AS &#39;游戏名称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users, Scores, Games</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Users.UserQQ=Scores.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND Games.Gno=Scores.Gno;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 显式内连接</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	GName AS &#39;游戏名称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users INNER JOIN Scores INNER JOIN Games</span></span>
<span class="line"><span style="color:#6A737D;">ON Users.UserQQ=Scores.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND Games.Gno=Scores.Gno;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询每个玩家的昵称、平均分和总分</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U INNER JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY U.UserQQ, UserName;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询平均分数大于2500的分数信息，显示玩家昵称，总分，平均分数</span></span>
<span class="line"><span style="color:#6A737D;">-- 并按照平均分数降序排列</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U INNER JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY U.UserQQ, UserName</span></span>
<span class="line"><span style="color:#6A737D;">HAVING AVG(Grades)&gt;2500</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY AVG(Grades) DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 外连接</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询所有玩家关于3号游戏的分数信息</span></span>
<span class="line"><span style="color:#6A737D;">-- 基础表：玩家表，非基础表：分数表</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Gno AS &#39;游戏编号&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U LEFT JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND S.Gno=3;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*子查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 使用IN关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询网游类的分数信息</span></span>
<span class="line"><span style="color:#6A737D;">-- 以IN中查询的结果集为条件，IN表示在某个范围之内，IN中的查询为子查询</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Gno AS &#39;游戏编号&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE Gno </span></span>
<span class="line"><span style="color:#6A737D;">IN(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT Gno </span></span>
<span class="line"><span style="color:#6A737D;">	FROM Games </span></span>
<span class="line"><span style="color:#6A737D;">	WHERE GType=&#39;网游&#39;</span></span>
<span class="line"><span style="color:#6A737D;">);*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用NOT IN关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询没有参与3号游戏的玩家的qq号</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;没有参与CF的玩家&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserQQ </span></span>
<span class="line"><span style="color:#6A737D;">NOT IN(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT UserQQ </span></span>
<span class="line"><span style="color:#6A737D;">	FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">	WHERE Gno=3</span></span>
<span class="line"><span style="color:#6A737D;">)</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用EXISTS关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 如果存在昵称为&#39;李飞&#39;，则查询分数表中的数据</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE EXISTS(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">	WHERE UserName LIKE &#39;李飞%&#39;</span></span>
<span class="line"><span style="color:#6A737D;">);*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*联合查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 将两个表纵向连接在一起</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT UserName FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT Gname FROM Games;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*SELECT UserName, UserQQ FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT Gname FROM Games;</span></span>
<span class="line"><span style="color:#6A737D;">报错：列的数量不相同</span></span>
<span class="line"><span style="color:#6A737D;">The used SELECT statements have a different number of columns</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中所有女性玩家和生日为空的玩家</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users WHERE UserSex=&#39;女&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserBirthday IS NULL;</span></span>
<span class="line"><span style="color:#6A737D;">#SELECT * FROM Users WHERE UserSex=&#39;女&#39; OR UserBirthday IS NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是&#39;12301&#39;的玩家所有分数并计算出总分和平均分，并显示在同一结果集中</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,Gno,Grades</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION ALL</span></span>
<span class="line"><span style="color:#6A737D;">SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	&#39;总分&#39;,  #常数列</span></span>
<span class="line"><span style="color:#6A737D;">	&#39; &#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades)</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION ALL</span></span>
<span class="line"><span style="color:#6A737D;">SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	&#39;平均分&#39;,  #常数列</span></span>
<span class="line"><span style="color:#6A737D;">	&#39; &#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades)</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">常用函数</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">/*日期函数*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 系统日期</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT CURDATE(), </span></span>
<span class="line"><span style="color:#6A737D;">CURRENT_DATE(), </span></span>
<span class="line"><span style="color:#6A737D;">CURDATE()+0;  #转字符串*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 系统时间</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT CURTIME(),</span></span>
<span class="line"><span style="color:#6A737D;">CURRENT_TIME(), </span></span>
<span class="line"><span style="color:#6A737D;">CURTIME()+0;  #转字符串*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 返回日期和时间</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT NOW(),</span></span>
<span class="line"><span style="color:#6A737D;">SYSDATE();*/</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;">-- 如果存在，删除</span></span>
<span class="line"><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DATABASE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">IF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">EXISTS</span><span style="color:#24292E;"> QQGame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建数据库</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DATABASE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QQGame</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用数据库</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> QQGame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 游戏表(Games)</span></span>
<span class="line"><span style="color:#6A737D;">-- 如果存在，删除表</span></span>
<span class="line"><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">IF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">EXISTS</span><span style="color:#24292E;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Games</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	GNo </span><span style="color:#D73A49;">INT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;"> auto_increment,  #编号</span></span>
<span class="line"><span style="color:#24292E;">	GName </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;">,  #名称</span></span>
<span class="line"><span style="color:#24292E;">	GType </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;">  #类型</span></span>
<span class="line"><span style="color:#24292E;">)ENGINE</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">INNODB CHARSET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改表名</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">ALTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> Games RENAME </span><span style="color:#D73A49;">TO</span><span style="color:#24292E;"> Games0;</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DESC</span><span style="color:#24292E;"> Games0;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改字段名称</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">ALTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> Games CHANGE GNo GNo11 </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改字段数据类型</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">ALTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> Games </span><span style="color:#D73A49;">MODIFY</span><span style="color:#24292E;"> GNo </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加字段</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">ALTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> Games </span><span style="color:#D73A49;">ADD</span><span style="color:#24292E;"> aaa </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除字段</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">ALTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> Games </span><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> aaa;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DESC</span><span style="color:#24292E;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> Games </span><span style="color:#D73A49;">VALUES</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;英雄联盟&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;网游&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;冒险岛&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;毛线&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;CF&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;射击&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;地下城与勇士&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;网游&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">TRUNCATE</span><span style="color:#24292E;"> Games;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Games</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 玩家表(Users)</span></span>
<span class="line"><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">IF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">EXISTS</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Users</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	UserQQ </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;">,  #QQ号</span></span>
<span class="line"><span style="color:#24292E;">	UserName </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;">,  #昵称</span></span>
<span class="line"><span style="color:#24292E;">	UserSex </span><span style="color:#D73A49;">CHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,  #性别</span></span>
<span class="line"><span style="color:#24292E;">	UserBirthday </span><span style="color:#D73A49;">DATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NULL</span><span style="color:#24292E;">,  #生日</span></span>
<span class="line"><span style="color:#24292E;">	UserPhone </span><span style="color:#D73A49;">char</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> #手机号</span></span>
<span class="line"><span style="color:#24292E;">)ENGINE</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">INNODB CHARSET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DESC</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> Users </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;12306&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;周天&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1982-02-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1381112221&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> Users(UserQQ, UserName, UserPhone) </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;12303&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;钉钉&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1381122112&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> Users </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12302&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;周八&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1998-6-7&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;138112277466&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12301&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;王六&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;女&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1995-6-7&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;136662757466&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12304&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;李飞&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;1983-9-5&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;159588643579&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改数据</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">UPDATE</span><span style="color:#24292E;"> Users </span><span style="color:#D73A49;">SET</span><span style="color:#24292E;"> UserSex</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">/*UPDATE Users SET UserSex=&#39;女&#39; WHERE UserQQ=&#39;20020101&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserQQ=&#39;20020101&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除数据</span></span>
<span class="line"><span style="color:#6A737D;">/*DELETE FROM Users WHERE UserQQ=&#39;20020101&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserQQ=&#39;20020101&#39;;*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 删除所有数据</span></span>
<span class="line"><span style="color:#6A737D;">-- DELETE FROM Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">TRUNCATE</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Users</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 分数表(Scores)</span></span>
<span class="line"><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">IF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">EXISTS</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表</span></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Scores</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	UserQQ </span><span style="color:#D73A49;">VARCHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;">,  #QQ号</span></span>
<span class="line"><span style="color:#24292E;">	Gno </span><span style="color:#D73A49;">INT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;">,  #游戏编号</span></span>
<span class="line"><span style="color:#24292E;">	Grades </span><span style="color:#D73A49;">INT</span><span style="color:#24292E;">  #分数</span></span>
<span class="line"><span style="color:#24292E;">)ENGINE</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">INNODB CHARSET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表结构</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DESC</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 添加数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> Scores </span><span style="color:#D73A49;">VALUES</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12301&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3700</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12301&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2400</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12303&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2400</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12302&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2400</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12304&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2400</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12306&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6900</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">	(</span><span style="color:#032F62;">&#39;12303&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5600</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 修改数据</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">UPDATE</span><span style="color:#24292E;"> Scores </span><span style="color:#D73A49;">SET</span><span style="color:#24292E;"> Grades</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">Grades</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看表</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 清空数据</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">TRUNCATE</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">DROP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Scores</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	查询</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中qq和名字</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> UserQQ, UserName </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 别名</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;玩家QQ&#39;, </span></span>
<span class="line"><span style="color:#6A737D;">	UserName &#39;玩家姓名&#39;  #姓名可省略</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 取消重复列</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> UserQQ </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT DISTINCT</span><span style="color:#24292E;"> UserQQ </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- LIMIT 查找指定范围</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users </span><span style="color:#D73A49;">LIMIT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;  #从0开始数，第2(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)条开始，查询出3条数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 条件查询</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> UserQQ</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;12301&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 比较查询</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> Gno</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">AND</span><span style="color:#24292E;"> Grades</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">4000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> Gno</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">OR</span><span style="color:#24292E;"> Gno</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询区间(包含边界)</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Scores </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> Grades </span><span style="color:#D73A49;">BETWEEN</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2400</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">AND</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3700</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询从1983年1月1日到1995年6月7日出生的玩家(包含边界)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday</span></span>
<span class="line"><span style="color:#6A737D;">BETWEEN &#39;1983-01-01&#39;  AND &#39;1995-06-7&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查找姓王的玩家</span></span>
<span class="line"><span style="color:#6A737D;">-- 模糊查询(%只能和like连接，代表任意字符)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserName LIKE &#39;王%&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询空值</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday IS NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询非空值</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserBirthday IS NOT NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 排序</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询编号为1的所有分数信息，并按照分数升序排列(ASC)</span></span>
<span class="line"><span style="color:#6A737D;">-- 小到大</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Gno=1</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY Grades ASC;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询编号为1的所有分数信息，并按照分数降序排列(DESC)</span></span>
<span class="line"><span style="color:#6A737D;">-- 大到小</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Gno=1</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY Grades DESC;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 多列排序</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询分数表所有信息，并按照游戏编号的升序和分数的降序进行排列</span></span>
<span class="line"><span style="color:#6A737D;">-- 优先级从最前面的开始</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY </span></span>
<span class="line"><span style="color:#6A737D;">	Gno ASC,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	查询进阶</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">/*汇总和分组数据*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 聚合函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中一共有多少玩家的信息(QQ不为空)</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">COUNT</span><span style="color:#24292E;">(UserQQ)  </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;玩家数量&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中多少人填写了生日信息</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">COUNT</span><span style="color:#24292E;">(UserBirthday)  </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;填写了生日的玩家数量&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"><span style="color:#6A737D;">-- 任意列不为空，都会进行统计</span></span>
<span class="line"><span style="color:#24292E;">#</span><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">COUNT</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)  </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;填写了生日的玩家数量&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> Users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是12302的玩家的平均分数</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT AVG(Grades) AS &#39;平均分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12302&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询游戏编号为1的玩家的最高分数</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE Gno=1;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是12301的玩家的总分，平均分和最高分</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 每个玩家的总分，平均分和最高分(分组)</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询平均分大于2500的玩家QQ号、总分、平均分</span></span>
<span class="line"><span style="color:#6A737D;">-- HAVING以聚合函数为统计结果的条件</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	MAX(Grades) AS &#39;最高分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">HAVING AVG(Grades)&gt;2500;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询所有用户的平均分和总分数，并按照平均分倒序排列</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;QQ号&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY AVG(Grades) DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*多表查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 内连接</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询分数信息，显示玩家昵称、游戏名和分数</span></span>
<span class="line"><span style="color:#6A737D;">-- 隐式内连接</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	GName AS &#39;游戏名称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users, Scores, Games</span></span>
<span class="line"><span style="color:#6A737D;">WHERE Users.UserQQ=Scores.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND Games.Gno=Scores.Gno;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 显式内连接</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	GName AS &#39;游戏名称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users INNER JOIN Scores INNER JOIN Games</span></span>
<span class="line"><span style="color:#6A737D;">ON Users.UserQQ=Scores.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND Games.Gno=Scores.Gno;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询每个玩家的昵称、平均分和总分</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U INNER JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY U.UserQQ, UserName;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询平均分数大于2500的分数信息，显示玩家昵称，总分，平均分数</span></span>
<span class="line"><span style="color:#6A737D;">-- 并按照平均分数降序排列</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades) AS &#39;总分&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades) AS &#39;平均分&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U INNER JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY U.UserQQ, UserName</span></span>
<span class="line"><span style="color:#6A737D;">HAVING AVG(Grades)&gt;2500</span></span>
<span class="line"><span style="color:#6A737D;">ORDER BY AVG(Grades) DESC;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 外连接</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询所有玩家关于3号游戏的分数信息</span></span>
<span class="line"><span style="color:#6A737D;">-- 基础表：玩家表，非基础表：分数表</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	UserName AS &#39;昵称&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Gno AS &#39;游戏编号&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users U LEFT JOIN Scores S</span></span>
<span class="line"><span style="color:#6A737D;">ON U.UserQQ=S.UserQQ</span></span>
<span class="line"><span style="color:#6A737D;">AND S.Gno=3;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*子查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 使用IN关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询网游类的分数信息</span></span>
<span class="line"><span style="color:#6A737D;">-- 以IN中查询的结果集为条件，IN表示在某个范围之内，IN中的查询为子查询</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Gno AS &#39;游戏编号&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	Grades AS &#39;分数&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE Gno </span></span>
<span class="line"><span style="color:#6A737D;">IN(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT Gno </span></span>
<span class="line"><span style="color:#6A737D;">	FROM Games </span></span>
<span class="line"><span style="color:#6A737D;">	WHERE GType=&#39;网游&#39;</span></span>
<span class="line"><span style="color:#6A737D;">);*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用NOT IN关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 查询没有参与3号游戏的玩家的qq号</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ AS &#39;没有参与CF的玩家&#39;</span></span>
<span class="line"><span style="color:#6A737D;">FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">WHERE UserQQ </span></span>
<span class="line"><span style="color:#6A737D;">NOT IN(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT UserQQ </span></span>
<span class="line"><span style="color:#6A737D;">	FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">	WHERE Gno=3</span></span>
<span class="line"><span style="color:#6A737D;">)</span></span>
<span class="line"><span style="color:#6A737D;">GROUP BY UserQQ;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用EXISTS关键字查询</span></span>
<span class="line"><span style="color:#6A737D;">-- 如果存在昵称为&#39;李飞&#39;，则查询分数表中的数据</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Scores</span></span>
<span class="line"><span style="color:#6A737D;">WHERE EXISTS(</span></span>
<span class="line"><span style="color:#6A737D;">	SELECT * FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">	WHERE UserName LIKE &#39;李飞%&#39;</span></span>
<span class="line"><span style="color:#6A737D;">);*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*联合查询*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 将两个表纵向连接在一起</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT UserName FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT Gname FROM Games;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*SELECT UserName, UserQQ FROM Users</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT Gname FROM Games;</span></span>
<span class="line"><span style="color:#6A737D;">报错：列的数量不相同</span></span>
<span class="line"><span style="color:#6A737D;">The used SELECT statements have a different number of columns</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询玩家表中所有女性玩家和生日为空的玩家</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT * FROM Users WHERE UserSex=&#39;女&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION</span></span>
<span class="line"><span style="color:#6A737D;">SELECT * FROM Users WHERE UserBirthday IS NULL;</span></span>
<span class="line"><span style="color:#6A737D;">#SELECT * FROM Users WHERE UserSex=&#39;女&#39; OR UserBirthday IS NULL;*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查询QQ号是&#39;12301&#39;的玩家所有分数并计算出总分和平均分，并显示在同一结果集中</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT </span></span>
<span class="line"><span style="color:#6A737D;">	UserQQ,Gno,Grades</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION ALL</span></span>
<span class="line"><span style="color:#6A737D;">SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	&#39;总分&#39;,  #常数列</span></span>
<span class="line"><span style="color:#6A737D;">	&#39; &#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	SUM(Grades)</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;</span></span>
<span class="line"><span style="color:#6A737D;">UNION ALL</span></span>
<span class="line"><span style="color:#6A737D;">SELECT</span></span>
<span class="line"><span style="color:#6A737D;">	&#39;平均分&#39;,  #常数列</span></span>
<span class="line"><span style="color:#6A737D;">	&#39; &#39;,</span></span>
<span class="line"><span style="color:#6A737D;">	AVG(Grades)</span></span>
<span class="line"><span style="color:#6A737D;">FROM Scores WHERE UserQQ=&#39;12301&#39;;*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">常用函数</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">/*日期函数*/</span></span>
<span class="line"><span style="color:#6A737D;">-- 系统日期</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT CURDATE(), </span></span>
<span class="line"><span style="color:#6A737D;">CURRENT_DATE(), </span></span>
<span class="line"><span style="color:#6A737D;">CURDATE()+0;  #转字符串*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 系统时间</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT CURTIME(),</span></span>
<span class="line"><span style="color:#6A737D;">CURRENT_TIME(), </span></span>
<span class="line"><span style="color:#6A737D;">CURTIME()+0;  #转字符串*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 返回日期和时间</span></span>
<span class="line"><span style="color:#6A737D;">/*SELECT NOW(),</span></span>
<span class="line"><span style="color:#6A737D;">SYSDATE();*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br></div></div>`,3),o=[e];function c(r,t,E,y,i,A){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
