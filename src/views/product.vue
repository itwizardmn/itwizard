<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-loading="pageLoader">
    <!-- background: #f6f6f6; -->
    <div class="products" style="width: 100%;">
      <!-- <div class="group-flex motion-up" style="margin-top: 0px;">
          <table>
              <tr>
                  <td @click="scrollMenu" class="active" group-id="0">#All</td>
                  <td class="uppercase" v-for="(team, index) in teams" :key="index" @click="scrollMenu" :group-id="team.seq">#{{team.team_name}}</td>
              </tr>
          </table>
      </div> -->
      <div class="container portfolio-menu">
        <div class="item" @click="changeStyle(true)" v-bind:class="{'active': gridStyle}"><img src="@/assets/image/grid.png" alt="grid menu"></div>
        <div class="item" @click="changeStyle(false)" v-bind:class="{'active': !gridStyle}"><img src="@/assets/image/column.png" alt="column menu"></div>
      </div>
      <div class="portfolioSwipeContiner" v-if="!gridStyle">
        <div ref="swiper" class="swiper portfolioSwipe main">
          <div class="swiper-wrapper" v-if="projectFilter.length > 0">
            <div class="swiper-slide" v-for="(property, index) in projectFilter" :key="index">
              <img class="image" :src="$imgUrl + property.file_seq" alt="" @error="onLoadError">
              <div class="link">
                  <a :href="property.related_url" target="_blank"> {{property.project_type}} </a>
              </div>
              <div class="title">
                  {{property.project_name}}
              </div>
            </div>
          </div>
          <div class="swiper-wrapper" v-else>
            <div class="swiper-slide">
              <img class="image" style="opacity: 0;" src="@/assets/image/content/career_wall.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div v-else class="container grid">
        <div v-for="(property, index) in projectFilter" :key="index" class="img-container">
          <img class="image" :src="$imgUrl + property.file_seq" alt="" @error="onLoadError">

          <div class="link">
            <a :href="property.related_url" target="_blank"> {{property.project_type}} </a>
          </div>

          <div class="title">
              {{property.project_name}}
          </div>
        </div>
      </div>

      <div v-if="!gridStyle" class="progress-pagination bottom" ref="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoader: false,
      swipers: {
        portfolio: null
      },
      teams: [],
      projects: [],
      selectedTeam: 0,
      gridStyle: true
    }
  },
  computed: {
    projectFilter() {
      if (this.selectedTeam == 0) {
        return this.projects;
      } else {
        let arr = [];
        this.projects.forEach(elm => {
          elm.team_seq == this.selectedTeam ? arr.push(elm) : null;
        });
        return arr;
      }
    }
  },
  mounted() {
    this.getTeams();
    this.getProjects();
  },
  methods: {
    changeStyle(status) {
      this.gridStyle = status;

      setTimeout(() => {
        this.swipers.portfolio = new this.$swiper(this.$refs.swiper, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          mousewheel: true,
          on: {
            slideChangeTransitionEnd: this.changed
          }
        });

        this.changed();
      }, 10);
    },
    onLoadError(event) {
      event.currentTarget.src = require('@/assets/image/noimage.jpg');
    },
    async getProjects() {
      const data = await this.$useapi('GET', '/v1/project/list');
      if (data && data.length > 0) {
        this.projects = data;
        // this.initSwiper();
        this.initHeight();
      }
    },
    async getTeams() {
      const data = await this.$useapi('GET', '/v1/team/list');
      if (data && data.length > 0) {
        data.forEach(elm => {
          elm.team_name.toUpperCase() != 'УДИРДЛАГЫН АЛБА' ? this.teams.push(elm) : null;
        });
        // this.teams = data;
      }
    },
    initHeight() {
      const footer = document.querySelector('.footer');
      const header = document.querySelector('.topbar');
      var style = footer.currentStyle || window.getComputedStyle(footer);
      const height = footer.clientHeight + Number(style.marginTop.replace('px', ''));
      const product = document.querySelector('.products');
      if (product) {
        product.style.height = (window.innerHeight - height - header.clientHeight) + 'px';
        product.style.margin = '0';
        product.style.marginTop = header.clientHeight + 'px';
      }
    }, 
    initSwiper() {
      console.log('fuck');
      this.swipers.portfolio = new this.$swiper(this.$refs.swiper, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
        on: {
          slideChangeTransitionEnd: this.changed
        }
      });

      this.changed();
    },
    changed() {
      if (!this.swipers.portfolio) {
        return;
      }

      if (window.innerWidth <= 720) {
        return;
      }
      const current = this.swipers.portfolio.activeIndex + 1;
      const total = this.swipers.portfolio.slides.length - 2
      if (!this.$refs.progress) { 
        return;
      }

      this.$refs.progress.style.width = 100 / total * current + '%';
    },
    move(target) {
      target.classList.add('active');
      let middle = window.innerWidth / 3;
      
      let targetEl = target.closest('table');

      if (middle > target.offsetLeft + targetEl.scrollLeft) {
          middle = target.offsetLeft;
      }

      targetEl.scrollTo({
          top: 0,
          left: target.offsetLeft - middle,
          behavior: 'smooth'
      });
    },
    scrollMenu(event) {
      const menus = document.querySelectorAll('.group-flex td');
      menus.forEach(el => {
        el.classList.remove('active');
      });
      this.move(event.currentTarget);

      let id = event.currentTarget.getAttribute('group-id');
      this.selectedTeam = id;
      
      this.swipers.portfolio.destroy();
      setTimeout(() => {
        this.swipers.portfolio = new this.$swiper(this.$refs.swiper, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          mousewheel: true,
          on: {
            slideChangeTransitionEnd: this.changed
          }
        });

        this.changed();
      }, 10);
    }
  }
}
</script>