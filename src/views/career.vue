<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about-page">
    <div class="little-keyVisual career" ref="keyvisual">
      <div class="curtain-white"></div>
      <img src="@/assets/image/content/career_wall.jpg" alt="">
    </div>

    <div class="content" ref="pinned">
      <div class="container">
        <div class="title">
          <span>career</span><br>itwizard.
        </div>


        <div class="career__description">
          <div class="panel panel-title">
            <p v-html="$textApi('recommendedYou')"></p>
          </div>
          <div class="panel">
            <div>
              <ul>
                <!-- <li>중식비 1만원 지원</li>
                <li>사내 편의점의 다양한 간식은 언제든 무료!</li>
                <li>업무와 개인의 성장을 위한 도서 및 교육 지원</li>
                <li>연차/반차/반반차 그리고 남녀 모두 편하게 사용하는 월 1회 보건휴가</li>
                <li>3/5/7년 장기근속자 휴가 및 지원금 제도</li>
                <li>매년 5월엔 가족과 풍요로운 시간을 보내기 위한 식사비 지원</li>
                <li>연차/반차/반반차 그리고 남녀 모두 편하게 사용하는 월 1회 보건휴가</li>
                <li>3/5/7년 장기근속자 휴가 및 지원금 제도</li>
                <li>매년 5월엔 가족과 풍요로운 시간을 보내기 위한 식사비 지원</li> -->
                <li v-html="$textApi('recomm1')"></li>
                <li v-html="$textApi('recomm2')"></li>
                <li v-html="$textApi('recomm3')"></li>
                <li v-html="$textApi('recomm4')"></li>
                <li v-html="$textApi('recomm5')"></li>
                <li v-html="$textApi('recomm6')"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="logo_wall">
      <img src="@/assets/image/content/blurred.jpg" alt="">
      <div class="container">
        <div class="title" v-html="$textApi('ifYouWannaSendCareer')">
          <!-- <span>Хэрвээ анкет</span><br>илгээх бол. -->
        </div>
      </div>
    </div>

    <div class="container">
      <div class="cv-title">{{this.$textApi('careerSteps')}}</div>
      <div class="cv-steps">
        <div class="step" v-html="$textApi('step1')"></div>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
        </div>
        <div class="step" v-html="$textApi('step2')"></div>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
        </div>
        <div class="step" v-html="$textApi('step3')"></div>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
        </div>
        <div class="step" v-html="$textApi('step4')"></div>
      </div>

      <div class="career-anket">
        <div class="line-title">
          {{this.$textApi('checkBeforeSendCareer')}}
        </div>
        <div class="checklist">
          <ul>
            <li v-html="$textApi('require1')"></li>
            <li v-html="$textApi('require2')"></li>
            <li v-html="$textApi('require3')"></li>
            <li v-html="$textApi('require4')"></li>
          </ul>
        </div>
      </div>

      <div class="products">
        <div class="group-flex motion-up" style="margin-top: 0px;">
          <!-- <table>
              <tr>
                  <td class="active" group-id="allGroup">All</td>
                  <td group-id="allGroup">Project manager</td>
                  <td group-id="allGroup">Front-end</td>
                  <td group-id="allGroup">Back-end</td>
              </tr>
          </table> -->
          <div class="line-title" style="border: none;">
            {{this.$textApi('workplace')}}
          </div>
        </div>

        <el-collapse v-model="activeNames" accordion class="career-document">
          <el-collapse-item :title="item.title" :name="'career' + index" v-for="(item, index) in ads" :key="index">
            <div class="career-document__body">
              <div class="career-document__body__title">
                {{item.title}}
                <a href="javascript:;" @click="$router.push('/resume')">Анкет илгээх</a>
                <table>
                  <tr><td>{{item.created_at.substr(0, 10)}}</td><td>{{item.jobType}}</td></tr>
                </table>
              </div>

              <div class="career-document__body__container">
                <div class="career-document__body__container__title">
                  ITWIZARD-ын тухай
                </div>
                <div class="career-document__body__container__desc">
                  <strong>ITWIZARD</strong> ХХК нь 2016 оноос эхлэн Солонгос улсын Мэдээлэл технологийн компаниудтай хамтран ажиллаж байгаа ба дотоодын зах зээлээс хараат бус ажиллаж байгаа болно. Мэдээлэл, технологийн чиглэлээр олон жил ажилласан туршлагатай хамт олон бүрдүүлэн үйл ажиллагаагаа явуулж байгаа бөгөөд 2022 онд 150 хөгжүүлэгчтэй болох зорилго тавин ажиллаж байна. 
                </div>

                <div class="career-document__body__container__title">
                  Тавигдах шаардлага
                </div>
                <div class="career-document__body__container__desc" v-html="item.requirement"></div>
                <div class="career-document__body__container__title">
                  Гүйцэтгэх үүрэг
                </div>
                <div class="career-document__body__container__desc" v-html="item.roles"></div>
                <div class="career-document__body__container__title">
                  Нэмэлт мэдээлэл
                </div>
                <div class="career-document__body__container__desc" v-html="item.about"></div>

                <div class="career-document__body__container__title">
                  Бусад мэдээлэл
                </div>
                <div class="career-document__body__container__desc">
                  <table>
                    <tr>
                      <td>Салбар</td>
                      <td>Мэдээлэл технологи, Харилцаа холбоо</td>
                    </tr>
                    <tr>
                      <td>Түвшин</td>
                      <td>{{item.levels}}</td>
                    </tr>
                    <tr>
                      <td>Төрөл</td>
                      <td>{{item.jobType}}</td>
                    </tr>
                    <tr>
                      <td>Цалин</td>
                      <td>{{item.salary}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: '',
      ads: []
    }
  },
  created() {
    this.getCareers();
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
  methods: {
    async getCareers() {
      const data = await this.$useapi('POST', '/v1/team/get-career');
      if (data && data.length > 0) {
        this.ads = data;
      }      
    }
  }
}
</script>