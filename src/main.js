import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import WorkDetailMain from './components/workorderdetail/WorkDetailMain'
import WorkOrders from './components/WorkOrders'
import WorkDetailMainPage from './components/workorderdetail/workorderdata/WorkDetailMainPage'
import WorkOrdersMain from './components/WorkOrderMain';
import Applicant from './components/Applicant';
import ApplicantDetail from './components/ApplicantDetail';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios);

const routes = [
  {path:'/WorkOrderDetail',component:WorkDetailMain},
  {path:'/',component:WorkOrders},
  {path:'/WorkDetailMainPage',component:WorkDetailMainPage},
  {path:'/WorkOrdersMain',component:WorkOrdersMain},
  {path:'/Applicant',component:Applicant},
  {path:'/ApplicantDetail',component:ApplicantDetail}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
