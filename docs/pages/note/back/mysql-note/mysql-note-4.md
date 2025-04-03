# mybatits工作积累

## 新增
```xml
<!-- parameterType：Cinema 表示入参 -->
<insert id="addCinema" parameterType="Cinema">
    <!-- nsert into cinema (cinema_name, cinema_address, cinema_city, create_time) values (#{cinemaName}, #{cinemaAddress}, #{cinemaCity}, current_timestamp)-->
    insert into cinema (
    <if test="cinemaName != null and cinemaName != '' ">cinema_name, </if>
    <if test="cinemaAddress != null and cinemaAddress != '' ">cinema_address, </if>
    <if test="cinemaCity != null and cinemaCity != '' ">cinema_city, </if>
    create_time
    )values(
    <if test="cinemaName != null and cinemaName != ''">#{cinemaName}, </if>
    <if test="cinemaAddress != null and cinemaAddress != ''">#{cinemaAddress}, </if>
    <if test="cinemaCity != null and cinemaCity != ''">#{cinemaCity}, </if>
    current_timestamp
    )
</insert>
```

## 修改
```xml
<update id="updateCinema" parameterType="Cinema">
    <!--UPDATE cinema
    SET cinema_name = #{cinemaName}, cinema_address = #{cinemaAddress}, cinema_city = #{cinemaCity}
    WHERE cinema_id = #{cinemaId};-->
    update cinema
    <set>
        <if test="cinemaName != null and cinemaName != ''">cinema_name = #{cinemaName}, </if>
        <if test="cinemaAddress != null and cinemaAddress != ''">cinema_address = #{cinemaAddress}, </if>
        <if test="cinemaCity != null and cinemaCity != ''">cinema_city = #{cinemaCity}, </if>
    </set>
    where cinema_id = #{cinemaId}
</update>
```

## 删除
- 单个删除
```xml
<!-- 删除影院 -->
<delete id="deleteCinemaById" parameterType="Long">
    delete from cinema where cinema_id = #{cinema_id}
</delete>
```
- 批量删除
```xml
<delete id="deleteCinemaByIds" parameterType="String">
    delete from cinema where cinema_id in
    <foreach item="cinemaId" collection="array" open="(" separator="," close=")">
        #{cinemaId}
    </foreach>
</delete>
```

## 查询
```xml
<!-- 查询所有影院 -->
<select id="queryAllCinema" resultMap="CinemaResult">
    select * from cinema;
</select>
```
```xml
<!-- 根据条件查询影院 -->
<select id="queryCinemaByCondition" resultMap="CinemaResult">
    select * from cinema
    <where>
        <if test="cinemaName != null and cinemaName != ''">
            and cinema_name like concat('%', #{cinemaName}, '%')
        </if>
        <if test="cinemaAddress != null and cinemaAddress != ''">
            and cinema_address like concat('%', #{cinemaAddress}, '%')
        </if>
    </where>
</select>
```

## 联表查询
```java
@Data
public class Movie {
    private Long movieId = 0L;  //电影id
    private Long cinemaId = 0L;  //影院id
    private String movieName = null;  //电影名
    private String moviePerformer = null;  //演员
    private String movieLength = null;  //时长
    private String movieType = null;  //类型
    private String movieTime = null;  //上映时间
    private int movieScore = 0;  //评分
    private String movieInfo = null;  //简介
    // 联表查询必须要加这个
    private Cinema cinema = null;  // 影院(表示该电影属于哪个影院)
}

// 接收前端传来的值
@Data
public class CinemaMovieVo {
    private Long cinemaId = 0L; // 影院id - 前端传来的值有id,必须传,不然接收不到
    private String cinemaName = null;  // 影院名
    private String movieName = null;  // 电影名
}
```

```xml
<mapper namespace="com.ruoyi.test.mapper.MovieMapper">
    <!-- movie结果集, 修改之后可以不用 -->
    <resultMap id="MovieResult" type="Movie" autoMapping="true">
        <id     property="movieId"        column="movie_id"      />
        <id     property="cinemaId"        column="cinema_id"      />
        <result property="movieName"      column="movie_name"        />
        <result property="moviePerformer"   column="movie_performer"       />
        <result property="movieLength"      column="movie_length"   />
        <result property="movieType"      column="movie_type"   />
        <result property="movieTime"      column="movie_time"   />
        <result property="movieScore"      column="movie_score"   />
        <result property="movieInfo"      column="movie_info"   />
        <!-- cinema -->
        <!--
            property中的cinema,是Movie类中Cinema的属性名
            javaType中的Cinema,表示com.ruoyi.test.domain.Cinema实体类
            一对多的多表查询,需要使用association包装
            这里面可以使用property="cinema"是因为在Movie类中,加了private Cinema cinema = null;  // 影院(表示该电影属于哪个影院)
            javaType表示连表查询中的子表的实体类
        -->
        <association property="cinema" javaType="Cinema">
            <id     property="cinemaId"        column="cinema_id"      />
            <result property="cinemaName"      column="cinema_name"        />
            <result property="cinemaAddress"   column="cinema_address"       />
            <result property="cinemaCity"      column="cinema_city"   />
            <result property="createTime"      column="create_time"   />
        </association>
    </resultMap>

    <!-- resultType和resultMap功能类似,都表示返回的结果,不能同时使用,一般用resultMap -->
    <!-- parameterType表示要前端传过来的数据类型,可以使用vo类来自定义 -->
    <select id="queryMoviePageByCinemaId" parameterType="CinemaMovieVo" resultMap="MovieResult">
        select *
        from movie m
        left join cinema c on m.cinema_id = c.cinema_id
        <where>
            <if test="cinemaId != null and cinemaId != ''">
                and m.cinema_id like concat('%', #{cinemaId}, '%')
            </if>
            <if test="movieName != null and movieName != ''">
                and movie_name like concat('%', #{movieName}, '%')
            </if>
            <if test="cinemaName != null and cinemaName != ''">
                and cinema_name like concat('%', #{cinemaName}, '%')
            </if>
        </where>
    </select>
</mapper>
```

## 排序,空白放前面或者后面
```sql
<if test="sortContent == 'lastHandleTime' and order == 'descending'" >
    order by
    CASE
    WHEN b.last_handle_time IS NULL THEN 0
    ELSE 1
    END,
    b.last_handle_time DESC
</if>
<if test="sortContent == 'lastHandleTime' and order == 'ascending'" >
    order by
    CASE
    WHEN b.last_handle_time IS NULL THEN 1
    ELSE 0
    END,
    b.last_handle_time ASC
</if>
```