<template>
  <div class="message">
    <img width="100%" src="../assets/images/weather.jpeg" />
    <!-- title="日历" -->

    <van-calendar
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '400px' }"
    >
      <!-- <template #title>
        <div style="text-align:left;text-indent:1em;">日历</div>
      </template> -->
    </van-calendar>
  </div>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<style lang="less" scoped>
.message {
  padding: 20px;
}
/deep/ .van-calendar__header-title {
  display: none;
}
</style>
