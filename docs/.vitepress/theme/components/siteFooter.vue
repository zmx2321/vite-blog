<template>
  <section class="site_footer">
    <dl class="time_wrap">
      <dt>当前时间：</dt>
      <dd @click="linkTo">{{ nowTimeStamp }}</dd>
    </dl>
  </section>

  <!-- 回到顶部 -->
  <back-top />
</template>
<script setup>
import { ref, onMounted } from "vue";

let nowTimeStamp = ref(null); // 当前时间

// 完整显示时间
const getDateTimeNowFormate = (timeStamp = new Date()) => {
  let year = timeStamp.getFullYear(); // 年
  let month = timeStamp.getMonth() + 1; // 月
  let date = timeStamp.getDate(); // 日
  let hour = timeStamp.getHours(); // 时
  let minute = timeStamp.getMinutes(); // 分
  let second = timeStamp.getSeconds(); // 秒

  let day = timeStamp.getDay(); // 获取当前星期几
  let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  // 加上0
  month < 10 ? (month = `0${month}`) : month; // 月
  date < 10 ? (date = `0${date}`) : date; // 日
  hour < 10 ? (hour = `0${hour}`) : hour; // 时
  minute < 10 ? (minute = `0${minute}`) : minute; // 分
  second < 10 ? (second = `0${second}`) : second; // 秒

  return `${year}-${month}-${date} ${hour}:${minute}:${second} ${weekday[day]}`;
};

const linkTo = () => {
  location.href = "/vite-blog/about/";
};

// 初始化
onMounted(() => {
  nowTimeStamp.value = getDateTimeNowFormate();

  // 定时器设置时间
  setInterval(() => {
    nowTimeStamp.value = getDateTimeNowFormate();
  }, 100);
});
</script>

<style lang="scss" scoped>
.site_footer {
  dl.time_wrap {
    dt,
    dd {
      display: inline-block;
      font-size: 12px;
    }

    dt {
      font-size: 14px;
      font-weight: bold;
    }
    dd {
      margin-left: 0;
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        color: #11a8fa;
        transition: 0.3s linear;
      }
    }
  }
}
</style>
