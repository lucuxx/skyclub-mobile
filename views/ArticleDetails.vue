<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-loading
      v-if="isshow"
      style="margin-top:50%;"
      type="spinner"
      color="#1989fa"
    />
    <div v-else>
      <h3>{{ details.title }}</h3>
      <div>
        <span>作者：{{ details.author }}</span>
        &nbsp;
        <!-- <span>分类：{{ details.categoryName }}</span>
        <br /> -->
        <span>时间：{{ details.updateTime | handlerTime }}</span>
        <div
          v-html="details.content"
          class="markdown-body"
          style="text-align: left;padding: 5px 20px 5px 20px;"
        ></div>
      </div>
      <div style="margin-bottom:20px;">
        <van-button
          icon="star-o"
          type="primary"
          size="small"
          @click="clickFabulous"
          >点赞</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { getArticleDetails, updateArticle } from '@/api'
import moment from 'moment'

export default {
  name: 'ArticleDetails',
  porps: {
    data: {
      type: Object,
      default: {},
    },
  },
  filters: {
    handlerTime(val) {
      return moment(Number(val)).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  data() {
    return {
      details: '',
      isFabulous: true,
      isshow: true,
    }
  },
  mounted() {
    this.getArticleDetail()
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href =
      'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link)
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    getArticleDetail() {
      getArticleDetails({ id: this.$route.query.id }).then((res) => {
        const { data, code } = res.data
        if (code === 0) {
          this.isshow = false
          this.details = data
        }
      })
    },
    // 点赞
    clickFabulous() {
      this.$toast.success('您已点赞！')
      // if (this.isFabulous) {
      //     Toast.success('您已点赞！')
      // }s. else {
      //     updateArticle({id: this.articleId, fabulousNum: 1}).then(res => {
      //       const { data, code } = res.data
      //       if (code === 0) {
      //           Toast.success('点赞成功！')
      //           this.articleArr.push(this.articleId)
      //           window.localStorage.setItem('isFabulous', JSON.stringify(this.articleArr))
      //           this.isFabulous = true;
      //       }
      //     });
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 5px 20px 5px 20px;
  p {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  code {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  a {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>
