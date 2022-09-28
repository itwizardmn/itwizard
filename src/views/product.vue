<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- background: #f6f6f6; -->
    <div class="products" style="width: 100%;">
      <div class="group-flex container motion-up" style="margin-top: 0px;">
          <table>
              <tr>
                  <td @click="scrollMenu" class="active" group-id="0">All</td>
                  <td class="uppercase" v-for="(team, index) in teams" :key="index" @click="scrollMenu" :group-id="team.seq">{{team.team_name}}</td>
              </tr>
          </table>
      </div>
      <div class="portfolioSwipeContiner">
        <div ref="swiper" class="swiper portfolioSwipe main">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(property, index) in projectFilter" :key="index">
              <img class="image" :src="$imgUrl + property.file_seq" alt="">
              <div class="link">
                  <a :href="property.related_url" target="_blank"> {{property.project_type}} </a>
              </div>
              <div class="title">
                  {{property.project_name}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="progress-pagination bottom" ref="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipers: {
        portfolio: null
      },
      teams: [],
      projects: [],
      selectedTeam: 0,
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
    async getProjects() {
      const data = await this.$useapi('GET', '/v1/project/list');
      if (data && data.length > 0) {
        this.projects = data;
        this.initSwiper();
        this.initHeight();
      }
    },
    async getTeams() {
      const data = await this.$useapi('GET', '/v1/team/list');
      if (data && data.length > 0) {
        this.teams = data;
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