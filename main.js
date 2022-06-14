import './assets/rem'
import './assets/css/common.less'
import util from './utils/index.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Icon,
  Button,
  NavBar,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Sticky,
  Card,
  Tag,
  Toast,
  Loading,
  DropdownMenu,
  DropdownItem,
  Popup,
  RadioGroup,
  Radio,
  Cell,
  CellGroup,
  PullRefresh,
  Image as VanImage,
  Calendar,
  NoticeBar,
} from 'vant'

Vue.use(Button)
  .use(Icon)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Sticky)
  .use(Card)
  .use(Tag)
  .use(Toast)
  .use(Loading)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Popup)
  .use(RadioGroup)
  .use(Radio)
  .use(Cell)
  .use(CellGroup)
  .use(PullRefresh)
  .use(VanImage)
  .use(Calendar)
  .use(NoticeBar)

Vue.use(util)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
