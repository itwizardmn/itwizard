<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="topbar">
      <div class="logo">
        <router-link to="/"><img src="@/assets/image/logo_wh.png" alt=""></router-link>
      </div>

      <div class="pc_menu">
        <th>
          <td><router-link to="/about">Бидний тухай</router-link></td>
          <td><router-link to="/career">Хүний нөөц</router-link></td>
          <td><router-link to="/teams">Хамт олон</router-link></td>
          <td><router-link to="/blogs">Блог</router-link></td>
          <td><router-link to="/product">Бүтээл</router-link></td>
          <td v-if="user">
            <!-- <a href="javascript:;"><p>Сайн уу, {{user.name}}</p></a> -->

            <el-dropdown trigger="click" placement="top-start">
              <p class="el-dropdown-link">
                Сайн уу, {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
              </p>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$router.push('/profile');">Миний булан</el-dropdown-item>
                <el-dropdown-item @click.native="logout" divided>Гарах</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </td>
        </th>
      </div>
    </div>


    <router-view/>
    <Footer/>
    <TopButton/>
  </div>
</template>
<script>
import Footer from '@/layout/footer.vue';
import TopButton from '@/components/TopButton.vue'
export default {
  components: {
    Footer,
    TopButton
  },
  data() {
    return {
      user: null
    }
  },
  mounted() {
    this.checkRoute();
    const user = JSON.parse(localStorage.getItem('employee'));
    this.user = user ? user : null; 
    Event.$on('memberLogged', this.memberLogged);
  },
  methods: {
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