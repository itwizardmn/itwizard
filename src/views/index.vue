<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="overflow-x: hidden;">
    <div class="keyVisual">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="word">
              <!-- <p class="container">We are<br>Wizards</p> -->
              <p class="container">WE ARE<br>IT WIZARDS</p>
            </div>
            <video autoplay muted loop>
              <source src="@/assets/video/video.mp4">
            </video>
          </div>
        </div>
      </div>
    </div>

    <div class="about container">
      <div class="text-container">
        <div class="col">
          <div class="name" v-html="$textApi('weAreWanna')"></div>
          <div class="title">
          </div>
          <div class="contain" v-html="$textApi('weAreWannaText')">
          </div>
        </div>
        <div class="col">
          <div class="name">{{this.$textApi('about')}}</div>
          <div class="title">
          </div>
          <div class="contain" v-html="$textApi('aboutText')">
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="group-flex motion-up">
          <table>
              <tr>
                  <td @click="scrollMenu" class="active" group-id="0">#All</td>
                  <td class="uppercase" v-for="(team, index) in teams" :key="index" @click="scrollMenu" :group-id="team.seq">#{{team.team_name}}</td>
              </tr>
          </table>
      </div>
      <div ref="swiper" class="swiper portfolioSwipe container">
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
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="blog container">
      <ul class="banner-link">
        <li v-for="(item, index) in blogs" :key="'blog' + index">
          <p class="itwizard">itwizard</p>
          <router-link :to="'/blog/' + item.blog_seq">
            <img :src="$imgUrl + item.thumbnail_seq" title="">
            <h3 class="f-ns">{{item.title}}</h3>
            <div class="content" v-html="item.content.replaceAll('&nbsp;', '')"></div>
				</router-link>
				</li>
		</ul>
    </div>


    <div class="our-office container">
      <div class="swiper swiperPhotos" ref="swiperPhotos">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="@/assets/image/content/slider/1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="@/assets/image/content/slider/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="@/assets/image/content/slider/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="@/assets/image/content/slider/4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="@/assets/image/content/slider/5.jpg" alt="">
              </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipers: {
        portfolio: null,
        photos: null
      },
      interval: {
        photos: null
      },
      delay: {
        limit: 5000,
        current: 0
      },
      teams: [],
      selectedTeam: 0,
      projects: [],
      blogs: [],
      lang: null
    }
  },
  async created() {
    const lan = localStorage.getItem('lang');
    if (lan) {
      this.lang = lan;
    } else {
      this.lang = await this.$detectip();
    }
    this.getBlogs();
  },
  mounted() {
    this.initSwiper();
    this.getTeams();
    this.getProjects();
  },
  methods: {
    async getBlogs() {
      const data = await this.$useapi('POST', '/v1/blog/list', { lang: this.lang });
      if (data && data.length > 0) {
        if (data.length > 3) {
          this.blogs = data.splice(0, 3);
          return;
        } 
        this.blogs = data;
      }
    },
    async getProjects() {
      const data = await this.$useapi('GET', '/v1/project/list');
      if (data && data.length > 0) {
        this.projects = data;
      }
    },
    async getTeams() {
      const data = await this.$useapi('GET', '/v1/team/list');
      if (data && data.length > 0) {
        data.forEach(elm => {
          elm.team_name.toUpperCase() != 'УДИРДЛАГЫН АЛБА' ? this.teams.push(elm) : null;
        });
      }
    },
    initSwiperInterval() {
      clearInterval(this.interval.photos);
      this.interval.photos = setInterval(() => {
        if (this.delay.current >= this.delay.limit) {
          this.swipers.photos.slideNext();
          this.delay.current = 0;
        } else {
          this.delay.current += 100;
        }
      }, 100);
    },
    initSwiper() {
      this.swipers.portfolio = new this.$swiper(this.$refs.swiper, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        }
      });

      this.swipers.photos = new this.$swiper(this.$refs.swiperPhotos, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        on: {
          transitionEnd: this.swiperChanged
        }
      })

      this.initSwiperInterval();
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
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
          }
        });
      }, 5);
    },
    swiperChanged () {
      this.delay.current = 0;
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
  }
}
</script>