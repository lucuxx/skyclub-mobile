<template>
  <div class="seting">
    <van-notice-bar left-icon="info-o" text="更多的功能可以前往PC端体验">
    </van-notice-bar>

    <div class="content-top">
      <div class="content-top-title">
        <img width="150" height="150" src="../assets/images/avatar.jpg" />
        <van-button icon="manager-o" type="info" size="mini" @click="showPopup"
          >联系</van-button
        >
        <van-popup v-model="show"
          ><img width="200" height="200" src="../assets/images/lianxi.jpg"
        /></van-popup>
      </div>
      <br />
      <span>Lucux</span>
      <br />
      <span>邮箱： lucuxxs@gmail.com</span>
      <br />
      <span>SkyClub -- 致力于技术交流与分享的平台</span>
      <br />
    </div>
  </div>
</template>

<script>
import { Image } from 'vant'
export default {
  name: 'Seting',

  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
  },
}
</script>

<style lang="less" scoped>
.content-top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  min-height: 100px;
  // border: 1px solid #7387fe;
  .content-top-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
