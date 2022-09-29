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
				<li> <!-- 세로 첫째 줄 -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578544403swrlpax4my.jpg" alt="KIM SUNG MIN"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_157854440391yqso30lh.jpg" alt="KIM SUNG MIN"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">CEO. ART DIRECTOR.</strong><br>
							<span class="name">KIM SUNG MIN</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578544388zwn1kuut05.jpg" alt="KIM JEONG MIN"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1578544388c5e566h6th.jpg" alt="KIM JEONG MIN"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DESIGNER.</strong>
							<span class="name">KIM JEONG MIN</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_157854435414z4d4oesc.jpg" alt="KIM YONG HUI"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1578544354z7mco9mjgy.jpg" alt="KIM YONG HUI"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">MOVIE DIRECTOR.</strong>
							<span class="name">KIM YONG HUI</span>
						</div>
					</div> <!-- box -->

          <div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578537407yyg11uuefl.jpg" alt="LEE YEON SU"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1579252613ybqymghdj6.png" alt="LEE YEON SU"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PUBLISHER.</strong>
							<span class="name">LEE YEON SU</span>
						</div>
					</div> <!-- box -->
				</li>

				<li> <!-- 세로 둘째 줄 -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578544227yrgxjuakea.jpg" alt="KIM SANG MIN"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1578544227t52ix0pd3s.jpg" alt="KIM SANG MIN"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PLANNER.</strong>
							<span class="name">KIM SANG MIN</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_16548297365g297i2f3a.jpg" alt="KIM MYOUNG SIK"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1654829736uc829y2vuh.png" alt="KIM MYOUNG SIK"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PLANNER.</strong>
							<span class="name">KIM MYOUNG SIK</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1654829773ixyf26b1bg.jpg" alt="BANG JUNG HOON"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_16548297738qpfr7z9y9.jpg" alt="BANG JUNG HOON"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PLANNER.</strong>
							<span class="name">BANG JUNG HOON</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578543937p29qif3ruf.jpg" alt="KIM SEOL A"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1579234413rxizccvown.jpg" alt="KIM SEOL A"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PLANNER.</strong>
							<span class="name">KIM SEOL A</span>
						</div>
					</div> <!-- box -->
									</li>

				<li> <!-- 세로 셋째 줄 -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578543911oxax8qur6b.jpg" alt="KIM HYUN MI"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1578543911hb14nj27is.jpg" alt="KIM HYUN MI"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">ART DIRECTOR.</strong>
							<span class="name">KIM HYUN MI</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578543886u9l1ariosu.jpg" alt="YI HYE WON"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1578543886jappqtr6kl.jpg" alt="YI HYE WON"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DESIGNER.</strong>
							<span class="name">YI HYE WON</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578543858mldqzesaju.jpg" alt="PARK JI HYEON"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1579246049qrpcz8u2ok.jpg" alt="PARK JI HYEON"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DESIGNER.</strong>
							<span class="name">PARK JI HYEON</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1654829823fat07lff3v.jpg" alt="BAE HO KYUNG"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1654829823hknywwi6i5.jpg" alt="BAE HO KYUNG"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DESIGNER.</strong>
							<span class="name">BAE HO KYUNG</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1654830586ypvr1kr3ww.jpg" alt="LEE JU YEON"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1654830586cz5rdpatxd.jpg" alt="LEE JU YEON"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DESIGNER.</strong>
							<span class="name">LEE JU YEON</span>
						</div>
					</div> <!-- box -->
									</li>

				<li> <!-- 세로 넷째 줄 -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578542807ulxd1025qr.jpg" alt="CHOI YONG SUK"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_15785428075yslyi2cms.jpg" alt="CHOI YONG SUK"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DEVELOPER.</strong>
							<span class="name">CHOI YONG SUK</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578542784tiyoav102s.jpg" alt="KIM HWAN MIN"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_157854278440igm0dzyt.jpg" alt="KIM HWAN MIN"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">DEVELOPER.</strong>
							<span class="name">KIM HWAN MIN</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1578542730v05sdzvis7.jpg" alt="LEE SANG OK"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1579246696ymdfqf5f4g.jpg" alt="LEE SANG OK"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PUBLISHER.</strong>
							<span class="name">LEE SANG OK</span>
						</div>
					</div> <!-- box -->
						
					<div class="box">
						<figure class="img">
							<div class="og-img"><img src="https://designpixel.co.kr/data/people/file1_1654830550f69u77g5mg.jpg" alt="PARK YUNA"></div>
							<div class="hv-img"><img src="https://designpixel.co.kr/data/people/file2_1654830550vqbajp3uq7.jpg" alt="PARK YUNA"></div>
						</figure>
						<div class="text">
							<strong class="jobs ">PUBLISHER.</strong>
							<span class="name">PARK YUNA</span>
						</div>
					</div> <!-- box -->
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
      employees: []
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