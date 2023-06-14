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
                    <div class="select_d name f-marko" style="border: none;" @click="drop.user = !drop.user">
                      <p>{{user.name}}</p>
                      <span class="down">
                        <i class="el-icon-arrow-down"></i>
                      </span>
                    </div>
                    <ul class="select_op" v-bind:class="{'open': drop.user}">
                      <li @click="($router.push('/profile'), drop.user = false)"><a href="javascript:;" class="f-ch f-marko black">{{this.$textApi('myProfile')}}</a></li>
                      <li @click="logout"><a href="javascript:;" class="a_focus f-marko black">{{this.$textApi('Logout')}}</a></li>
                    </ul>
                  </div>
                </li>
                <li v-else class="sign-in">                  
                  <router-link to="/signin">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                    </svg>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mo_menu">
        <div class="menu" @click="mobile.menu = true">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="100px" height="100px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </div>
      </div>
    </div>

    <el-drawer :visible.sync="mobile.menu" direction="ttb" size="100%" style="width: 100%;">
      <div class="mobile-menu">
        <ul>
          <li><router-link to="/about"><span class="menu-text">{{getText('about')}}</span></router-link></li>
          <li><router-link to="/career"><span class="menu-text">{{getText('career')}}</span></router-link></li>
          <li><router-link to="/teams"><span class="menu-text">{{getText('team')}}</span></router-link></li>
          <li><router-link to="/blogs"><span class="menu-text">{{getText('blog')}}</span></router-link></li>
          <li><router-link to="/product"><span class="menu-text">{{getText('product')}}</span></router-link></li>
          <li v-if="user" @click="($router.push('/profile'), drop.user = false)"><span class="menu-text">{{getText('myProfile')}}</span></li>
          <li v-if="user" @click="logout"><span class="menu-text">{{getText('Logout')}}</span></li>
          <li v-else><router-link to="/signin"><span class="menu-text">{{getText('signin')}}</span></router-link></li>
        </ul>

        <div class="copyright">
          Copyright, <strong><span>IT Wizard</span></strong>. All rights reserved. <span id="copyRightYear">©2021</span>
        </div>

        <div class="total" style="" v-if="language">
          <div class="select_d f-marko" @click="drop.language = !drop.language">
            <p class="lang-cont">{{language === 'MN' ? 'МОНГОЛ': '대한민국'}}</p>
            <span class="down">
              <i class="el-icon-arrow-down"></i>
            </span>
          </div>
          <ul class="select_op" v-bind:class="{'open': drop.language}">
            <li @click="setLanguage('MN')"><a href="javascript:;" class="f-ch f-marko black">МОНГОЛ</a></li>
            <li @click="setLanguage('KR')"><a href="javascript:;" class="a_focus f-marko black">대한민국</a></li>
          </ul>
        </div>
      </div>
    </el-drawer>

    <div class="main-banner" v-bind:class="{'open': dialog.banner}">
      <div class="main-banner_header">
        <a href="javascript:;" class="close" @click="hideBanner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        </a>
      </div>

      <div class="main-banner_body">
        <img src="@/assets/image/content/gallery/banner.jpg" alt="">
      </div>
      <div class="main-banner_footer">
        <el-checkbox v-model="checkbox.banner">{{this.$textApi('hideBanner')}}</el-checkbox>
      </div>
    </div>


    <router-view @profileChanged="nameChnged"/>
    <Footer/>
    <TopButton v-if="!mobile.menu"/>
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
      dialog: {
        banner: false
      },
      drop: {
        language: false,
        user: false
      },
      language: null,
      mobile: {
        menu: false
      },
      checkbox: {
        banner: false
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.mobile.menu = false;
    next();
  },
  async created() {
    const lan = localStorage.getItem('lang');
    if (lan) {
      this.language = lan;
    } else {
      this.language = await this.$detectip();
    }

    // const banner = localStorage.getItem('hidden-main-banner');
    // if (!banner) {
    //   this.dialog.banner = true;
    // } else {
    //   if (this.getDate() > banner) {
    //     this.dialog.banner = true;
    //   }
    // }
  },
  mounted() {
    this.checkRoute();
    const emp = localStorage.getItem('employee');
    if (emp) {
      const user = JSON.parse(emp);
      this.user = user ? user : null; 
    }
    
    Event.$on('memberLogged', this.memberLogged);
  },
  methods: {
    getDate() {
      const dt = new Date();
      return dt.getFullYear() + '-' + ((dt.getMonth() + 1) > 9 ? (dt.getMonth() + 1) : '0' + (dt.getMonth() + 1)) + '-' + (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate())
    },
    hideBanner() {
      if (this.checkbox.banner) {
        localStorage.setItem('hidden-main-banner', this.getDate());
      }

      this.dialog.banner = false;
    },
    nameChnged(name) {
      if (this.user && this.user.name) {
        this.user.name = name;
      }
    },
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
    logout() {
      localStorage.removeItem('employee');
      localStorage.removeItem('token');
      this.user = null;
      this.drop.user = false;
      this.mobile.menu = false;
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
      if (this.$route.name !== 'home') {
        return;
      }
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

<style lang="scss" scoped>
.topbar {
  .sign-in {
    svg {
      border-left: 1px solid rgba(#fff, .5);
      fill: #fff;
      margin-top: 3px;
      margin-left: 5px;
      padding-left: 10px;
      display: block;
      width: 20px;
      height: 20px;
    }
  }
}

.topbar.white {
  .sign-in {
    svg {
      border-left: 1px solid rgba(#4d4d4d, .3);
      fill: #4d4d4d;
    }
  }
}
</style>