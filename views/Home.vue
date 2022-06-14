<template>
  <div class="home">
    <van-sticky>
      <van-nav-bar
        style="background:#7387fe;color:#fff"
        @click-right="showMenu"
      >
        <template #title>
          <span style="size:20px;color:#ffffff">SkyClub</span>
        </template>
        <template #right>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1">
              <template #title>
                <van-icon name="apps-o" size="18" color="#ffffff" />
              </template>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-nav-bar>
    </van-sticky>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      radio: '',
      isshow: false,
      option1: [
        { text: '首页', value: 'AllArticle', icon: 'wap-home-o' },
        { text: '分类', value: 'ClassArticle', icon: 'points' },
        { text: '日历', value: 'Message', icon: 'newspaper-o' },
        { text: '我的', value: 'Seting', icon: 'contact' },
      ],
      value1: this.$route.name,
    }
  },
  watch: {
    value1: {
      handler(newName, oldName) {
        if (newName === 'AllArticle') {
          this.$router.push({ name: 'AllArticle' })
        } else if (newName === 'ClassArticle') {
          this.$router.push({ name: 'ClassArticle' })
        } else if (newName === 'Message') {
          this.$router.push({ name: 'Message' })
        } else if (newName === 'Seting') {
          this.$router.push({ name: 'Seting' })
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    showMenu() {
      this.isshow = true
    },
  },
}
</script>
<style lang="less" scoped>
.home {
  /deep/ .van-nav-bar {
    height: 48px;
  }
  /deep/ .van-dropdown-menu__title--active {
    color: #7387fe;
  }
  /deep/ .van-dropdown-menu__title {
    color: #7387fe;
  }
  /deep/ .van-dropdown-menu__title::after,
  .van-dropdown-menu__title::before {
    opacity: 0;
  }
  /deep/ .van-radio__icon .van-icon {
    display: none;
  }
  /deep/ .van-dropdown-menu__bar {
    background-color: #7387fe;
  }
  // /deep/ .van-overflow-hidden {
  //   background-color: #fff !important;
  //   opacity: 1 !important;
  // }
  /deep/ .van-dropdown-item__content {
    background: #fff !important;
    opacity: 1 !important;
  }

  // /deep/ .van-cell__title,
  // .van-cell__value {
  //   font-size: 18px;
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  // }
}
</style>
