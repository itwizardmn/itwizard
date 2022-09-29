<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about-page team">
    <div class="little-keyVisual" ref="keyvisual">
      <div class="curtain-white"></div>
      <img src="@/assets/image/content/teams_wall.jpg" alt="">
    </div>

    <div class="content" ref="pinned">
      <div class="container">
        <div class="title">
          <span>teams</span><br>itwizard.
        </div>
      </div>

      <div class="main"></div>

      <div class="main-content">
        <div class="swiper-container">
          <div class="transformed">
            <div class="swiper teamsPhotos" ref="swiperPhotos">
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

          <div class="paginate">
              <div class="number">
                  <span><span class="curr-page">{{paginate.teams.current > 9 ? paginate.teams.current : '0' + paginate.teams.current}}</span> <span class="total">/ {{paginate.teams.total > 9 ? paginate.teams.total : '0' + paginate.teams.total}}</span></span>
              </div>
              <div class="progress-bar">
                  <div class="current" :style="{'width': paginate.teams.progress + '%'}"></div>
              </div>
          </div>
          </div>
        </div>
      </div>

      <!-- <div class="products">
        <div class="container">
          <div class="group-flex container motion-up" style="margin-top: 0px;">
            <table>
                <tr>
                    <td @click="scrollMenu" class="active" group-id="allGroup">All</td>
                    <td class="uppercase" v-for="(team, index) in teams" :key="index" @click="scrollMenu" :group-id="team.seq">{{team.team_name}}</td>
                </tr>
            </table>
          </div>

          <div>
            <div class="swiper members" ref="membersSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in employees" :key="index">
                      <div class="curtain"></div>
                      <img class="image" :src="$imgUrl + item.profile" alt="">
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="content">
      <div class="container">
        <div class="con-width1 inner">
          <h1 align="center">PROFILE</h1>
            <ul class="list">
              <li>
                <div class="box" v-for="(item, index) in line.line1" :key="'line1' + index">
                  <figure class="img">
                    <div class="og-img"><img :src="$imgUrl + item.photo" :alt="item.name" @error="onLoadError"></div>
                    <div class="hv-img"><img :src="$imgUrl + item.profile" :alt="item.name" @error="onLoadError"></div>
                  </figure>
                  <div class="text">
                    <strong class="jobs ">{{item.pro_name}}</strong><br>
                    <span class="name">{{item.name}}</span>
                  </div>
                </div>
              </li>

              <li>
                <div class="box" v-for="(item, index) in line.line2" :key="'line2' + index">
                  <figure class="img">
                    <div class="og-img"><img :src="$imgUrl + item.photo" :alt="item.name" @error="onLoadError"></div>
                    <div class="hv-img"><img :src="$imgUrl + item.profile" :alt="item.name" @error="onLoadError"></div>
                  </figure>
                  <div class="text">
                    <strong class="jobs ">{{item.pro_name}}</strong><br>
                    <span class="name">{{item.name}}</span>
                  </div>
                </div>
              </li>

              <li>
                <div class="box" v-for="(item, index) in line.line3" :key="'line3' + index">
                  <figure class="img">
                    <div class="og-img"><img :src="$imgUrl + item.photo" :alt="item.name" @error="onLoadError"></div>
                    <div class="hv-img"><img :src="$imgUrl + item.profile" :alt="item.name" @error="onLoadError"></div>
                  </figure>
                  <div class="text">
                    <strong class="jobs ">{{item.pro_name}}</strong><br>
                    <span class="name">{{item.name}}</span>
                  </div>
                </div>
              </li>

              <li>
                <div class="box" v-for="(item, index) in line.line4" :key="'line4' + index">
                  <figure class="img">
                    <div class="og-img"><img :src="$imgUrl + item.photo" :alt="item.name" @error="onLoadError"></div>
                    <div class="hv-img"><img :src="$imgUrl + item.profile" :alt="item.name" @error="onLoadError"></div>
                  </figure>
                  <div class="text">
                    <strong class="jobs ">{{item.pro_name}}</strong><br>
                    <span class="name">{{item.name}}</span>
                  </div>
                </div>
              </li>
            </ul>
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
        teams: null,
        members: null
      },
      interval: {
        teams: null
      },
      delay: {
        limit: 5000,
        current: 0
      },
      paginate: {
        teams: {
          current: 1,
          total: 0,
          progress: 0
        }
      },
      teams: [],
      employees: [],
      line: {
        line1: [],
        line2: [],
        line3: [],
        line4: []
      }
    }
  },
  mounted() {
    // this.$srollTrigger.create({
    //     trigger: this.$refs.keyvisual,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false
    //   });

    // this.$srollTrigger.create({
    //   trigger: this.$refs.pinned,
    //   start: "top top",
    //   pin: true,
    //   pinSpacing: false,
    //   end: 'bottom bottom'
    // });
  },
  created() {
    this.getEmployee();
    this.getTeams();
  },
  methods: {
    onLoadError(event) {
      event.currentTarget.src = require('@/assets/image/nouser.webp');
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
    },
    async getTeams() {
      const data = await this.$useapi('GET', '/v1/team/list');
      if (data) {
        this.teams = data;
      }
    },
    async getEmployee() {
      const data = await this.$useapi('GET', '/v1/employee/employees');
      if (data) {
        this.employees = data;
        let idx = 1;
        this.employees.forEach(elm => {
          this.line['line' + idx].push(elm)
          idx === 4 ? idx = 1 : idx++;
        });

        console.log(this.line);
        this.initSwiper();
      }
    },
    swiperChanged () {
      this.delay.current = 0;
      if (!this.swipers.teams) {
        return;
      }
      this.paginate.teams.current = this.swipers.teams.realIndex + 1;
    },
    initSwiperInterval() {
      clearInterval(this.interval.teams);
      this.interval.teams = setInterval(() => {
        if (this.delay.current >= this.delay.limit) {
          this.swipers.teams.slideNext();
        } else {
          this.delay.current += 10;
          this.paginate.teams.progress = parseInt(this.delay.current * 100 / this.delay.limit);
        }
      }, 10);
    },
    initSwiper() {
      this.swipers.teams = new this.$swiper(this.$refs.swiperPhotos, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
        loop: true,
        on: {
          transitionEnd: this.swiperChanged
        }
      })      

      this.paginate.teams.total = this.swipers.teams.loopedSlides;
      this.initSwiperInterval();

      setTimeout(() => {
        this.swipers.members = new this.$swiper(this.$refs.membersSwiper, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          mousewheel: true,
          loop: true,
        });
      }, 100);
    },
  }
}
</script>