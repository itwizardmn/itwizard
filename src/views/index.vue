<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
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
            <!-- <div style="pointer-events: none;">
              <iframe 
              src="https://player.vimeo.com/video/755132568?h=376a3d1235&amp;autoplay=1&amp;loop=1&amp;title=0&amp;sidedock=0&amp;autopause=0&amp;app_id=58479" 
              frameborder="0" 
              allow="autoplay; fullscreen;" 
              allowfullscreen 
              style="position:absolute;top:0;left:0;width:100%;height:100%;">
              </iframe>
            </div> -->
          </div>
          <!-- <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div> -->
        </div>
      </div>
    </div>

    <div class="about container">
      <!-- <router-link to="/about">
      <div class="bck-container">
        <p>about</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg>
      </div></router-link> -->
      <div class="text-container">
        <div class="col">
          <div class="name" v-html="$textApi('weAreWanna')"></div>
          <div class="title">
            <!-- Бид хөгжүүлэгчээс юу хүсдэг вэ? -->
          </div>
          <div class="contain" v-html="$textApi('weAreWannaText')">
          </div>
        </div>
        <div class="col">
          <div class="name">{{this.$textApi('about')}}</div>
          <div class="title">
            <!-- Бидний тухай -->
          </div>
          <div class="contain" v-html="$textApi('aboutText')">
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="group-flex container motion-up">
          <table>
              <tr>
                  <td @click="scrollMenu" class="active" group-id="0">All</td>
                  <td class="uppercase" v-for="(team, index) in teams" :key="index" @click="scrollMenu" :group-id="team.seq">{{team.team_name}}</td>
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
                  <img class="image" src="http://itwizard.mn/client/static/image/slider/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="http://itwizard.mn/client/static/image/slider/4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="http://itwizard.mn/client/static/image/slider/1.jfif" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="http://itwizard.mn/client/static/image/slider/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <div class="curtain"></div>
                  <img class="image" src="http://itwizard.mn/client/static/image/slider/5.jfif" alt="">
              </div>
          </div>
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
        this.teams = data;
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
        mousewheel: true
      });

      this.swipers.photos = new this.$swiper(this.$refs.swiperPhotos, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
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
          mousewheel: true,
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