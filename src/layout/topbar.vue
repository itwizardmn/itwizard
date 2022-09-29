<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="topbar">
      <div class="logo">
        <router-link to="/"><img src="@/assets/image/logo_wh.png" alt=""></router-link>
      </div>

      <div class="pc_menu">
        <div class="gnb">
          <div id="menu" class="menu">
            <div class="inner">
              <ul>
                <li><router-link to="/about"><span>{{getText('about')}}</span></router-link></li>
                <li><router-link to="/career"><span>{{getText('career')}}</span></router-link></li>
                <li><router-link to="/teams"><span>{{getText('team')}}</span></router-link></li>
                <li><router-link to="/blogs"><span>{{getText('blog')}}</span></router-link></li>
                <li><router-link to="/product"><span>{{getText('product')}}</span></router-link></li>
                <li v-if="language">
                  <div class="total" style="">
                    <div class="select_d f-marko" @click="drop.language = !drop.language"> {{language === 'MN' ? 'МОНГОЛ': '대한민국'}}
                      <span class="down">
                        <i class="el-icon-arrow-down"></i>
                      </span>
                    </div>
                    <ul class="select_op" v-bind:class="{'open': drop.language}">
                      <li @click="setLanguage('MN')"><a href="javascript:;" class="f-ch f-marko black">МОНГОЛ</a></li>
                      <li @click="setLanguage('KR')"><a href="javascript:;" class="a_focus f-marko black">대한민국</a></li>
                    </ul>
                  </div>
                </li>
                <li v-if="user">
                  <div class="total" style="">
                    <div class="select_d f-marko" style="border: none;" @click="drop.user = !drop.user">{{user.name}}
                      <span class="down">
                        <i class="el-icon-arrow-down"></i>
                      </span>
                    </div>
                    <ul class="select_op" v-bind:class="{'open': drop.user}">
                      <li @click="$router.push('/profile');"><a href="javascript:;" class="f-ch f-marko">Миний булан</a></li>
                      <li @click="logout"><a href="javascript:;" class="a_focus f-marko">гарах</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mo_menu">

      </div>
    </div>


    <router-view/>
    <Footer/>
    <TopButton/>
    <Youtube/>
  </div>
</template>
<script>
import Footer from '@/layout/footer.vue';
import TopButton from '@/components/TopButton.vue';
import Youtube from '@/components/Youtube.vue'
export default {
  components: {
    Footer,
    TopButton,
    Youtube
  },
  data() {
    return {
      user: null,
      drop: {
        language: false,
        user: false
      },
      language: null
    }
  },
  created() {
    this.detectIP();
  },
  mounted() {
    this.checkRoute();
    const user = JSON.parse(localStorage.getItem('employee'));
    this.user = user ? user : null; 
    Event.$on('memberLogged', this.memberLogged);
  },
  methods: {
    getText(text) {
      return this.$textApi(text);
    },
    setLanguage(lang) {
      if (lang !== this.language) {
        localStorage.setItem('lang', lang)
        window.location.reload();
      }

      this.drop.language = false;
    },
    detectIP() {
      const lan = localStorage.getItem('lang');
      
      if (!lan) {
        this.$axios({
          method: 'GET',
          url: 'https://api.ipify.org?format=json'
        }).then(data => {
          this.$axios({
            method: 'GET',
            url: 'http://ip-api.com/json/' + data.data.ip
          }).then(data => {
            if (data.data.countryCode === 'KR') {
              localStorage.setItem('lang', 'KR');  
              this.language = 'KR';
            } else {
              localStorage.setItem('lang', 'MN');
              this.language = 'MN';
            }
          }).catch(() => {
            localStorage.setItem('lang', 'MN');
            this.language = 'MN';
          });
        }).catch(() => {
          localStorage.setItem('lang', 'MN');
          this.language = 'MN';
        });
      } else {
        this.language = lan;
      }

      
    },
    logout() {
      localStorage.removeItem('employee');
      localStorage.removeItem('token');
      this.user = null;
      this.$router.push('/');
    },
    memberLogged() {
      const user = JSON.parse(localStorage.getItem('employee'));
      this.user = user ? user : null; 
    },
    checkRoute() {
      const bar = document.querySelector('div.topbar');
      const img = document.querySelector('div.topbar .logo img');
      if (this.$route.name == 'home') {
        if (bar) {
          window.removeEventListener('scroll', this.windowScroll);
          window.addEventListener('scroll', this.windowScroll);
        }
      } else {
        if (bar) {
          bar.classList.add('white');
          img.src = require('@/assets/image/logo_blck.png');
        }
      }
    },
    windowScroll() {
      const bar = document.querySelector('div.topbar');
      const img = document.querySelector('div.topbar .logo img');
      if (!bar || !img) {
        return;
      }

      if (window.pageYOffset === 0) {
        bar.classList.remove('white');
        img.src = require('@/assets/image/logo_wh.png');
      } else {
        bar.classList.add('white');
        img.src = require('@/assets/image/logo_blck.png');
      }
    }
  },
  watch:{
    $route (to) {
        window.removeEventListener('scroll', this.windowScroll);
        const bar = document.querySelector('div.topbar');
        const img = document.querySelector('div.topbar .logo img');
        if (to.name === 'home') {
          if (bar) {
            bar.classList.remove('white');
            img.src = require('@/assets/image/logo_wh.png');
            window.removeEventListener('scroll', this.windowScroll);
            window.addEventListener('scroll', this.windowScroll);
          }
        } else {
          if (bar) {
            bar.classList.add('white');
            img.src = require('@/assets/image/logo_blck.png');
          }
        }
    }
  } 
}
</script>