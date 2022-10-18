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
        <div class="line-title" style="border: none;">
            {{this.$textApi('workplace')}}
        </div>

        <el-collapse v-model="activeNames" accordion class="career-document">
          <el-collapse-item :title="item.title" :name="'career' + index" v-for="(item, index) in ads" :key="index">
            <div class="career-document__body">
              <div class="career-document__body__title">
                {{item.title}}
                <a href="javascript:;" @click="$router.push('/resume')" v-html="$textApi('sendResume')"></a>
                <table>
                  <tr><td>{{item.created_at.substr(0, 10)}}</td><td>{{item.jobType}}</td></tr>
                </table>
              </div>

              <div class="career-document__body__container">
                <div class="career-document__body__container__title" v-text="$textApi('aboutItwizard')">
                </div>
                <div class="career-document__body__container__desc" v-html="$textApi('aboutCareer')">
                </div>

                <div class="career-document__body__container__title" v-html="$textApi('employeeRequirment')">
                </div>
                <div class="career-document__body__container__desc" v-html="item.requirement"></div>
                <div class="career-document__body__container__title" v-html="$textApi('employeeRole')">
                </div>
                <div class="career-document__body__container__desc" v-html="item.roles"></div>
                <div class="career-document__body__container__title" v-html="$textApi('addInformation')">
                </div>
                <div class="career-document__body__container__desc" v-html="item.about"></div>

                <div class="career-document__body__container__title" v-html="$textApi('otherInformation')">
                </div>
                <div class="career-document__body__container__desc">
                  <table>
                    <tr>
                      <td v-text="$textApi('courseAction')"></td>
                      <td v-text="$textApi('courseActionName')"></td>
                    </tr>
                    <tr>
                      <td v-text="$textApi('empLevels')"></td>
                      <td>{{item.levels}}</td>
                    </tr>
                    <tr>
                      <td v-text="$textApi('type')"></td>
                      <td>{{item.jobType}}</td>
                    </tr>
                    <tr>
                      <td v-text="$textApi('salary')"></td>
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
      ads: [],
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
      const data = await this.$useapi('POST', '/v1/team/get-career', { lang: this.lang });
      if (data && data.length > 0) {
        this.ads = data;
      }      
    }
  }
}
</script>