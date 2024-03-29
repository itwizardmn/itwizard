import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/css/style.scss"
import SwiperCore, { Swiper, Mousewheel, Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { gsap, ScrollTrigger } from 'gsap/all';
import { CSSPlugin } from 'gsap/CSSPlugin'
import axios from 'axios';
import textApi from '@/assets/js/utils';
import {Chart,ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle} from 'chart.js';

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

SwiperCore.use([Mousewheel, Navigation, Pagination])
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

// const url = 'http://192.168.0.155:5100';
// const imgUrl = 'http://192.168.0.155:5100/v2/common/download/';

const url = 'https://api.itwizard.mn';
const imgUrl = 'https://api.itwizard.mn/v2/common/download/';
axios.defaults.baseURL = url;

const detectIP = async () => {
  let ip = await axios({
    method: 'GET',
    url: 'https://api.ipify.org?format=json'
  }).then(data => {
    return data.data.ip;
  }).catch(() => {
    localStorage.setItem('lang', 'MN');
    return 'MN'
  });
  

  if (ip === 'MN') {
    return 'MN';
  } else {
    let result =  await axios({
        method: 'GET',
        url: 'http://ip-api.com/json/' + ip
      }).then(data => {
        if (data.data.countryCode === 'KR') {
          localStorage.setItem('lang', 'KR');  
          return 'KR'
        } else {
          localStorage.setItem('lang', 'MN');
          return 'MN'
        }
      }).catch(() => {
        localStorage.setItem('lang', 'MN');
        return 'MN'
      });

      return result;
  }
}

const token = localStorage.getItem('token');

if(token != null) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
}

const useapi = async (method, url, data) => {
  let response = await axios({
      method: method,
      url: url,
      data
  }).then(data => {
    if (data.status === 200) {
      return data;
    } else {
      return 204;
    }
  }).catch(err => {
    console.log(err);
    return false;
  });

  if (!response) {
    return false;
  }

  if (response === 204) {
    return 204;
  }
  
  return response.data.data ? response.data.data : true;
};

// console.log = function() {};
console.warn = function() {};
Vue.config.productionTip = false

Vue.prototype.$swiper = Swiper;
Vue.prototype.$gsap = gsap;
Vue.prototype.$srollTrigger = ScrollTrigger;
Vue.prototype.$axios = axios;
Vue.prototype.$serverUrl = url;
Vue.prototype.$useapi = useapi;
Vue.prototype.$imgUrl = imgUrl;
Vue.prototype.$chart = Chart;
Vue.prototype.$textApi = textApi;
Vue.prototype.$detectip = detectIP;

Vue.use(ElementUI, { locale })
// Vue.use(axios);
window.Event = new Vue();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
