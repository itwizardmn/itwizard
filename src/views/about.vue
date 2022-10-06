<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about-page" style="overflow: hidden;">
    <div class="little-keyVisual" ref="keyvisual">
      <div class="curtain-white"></div>
      <img src="@/assets/image/content/about.jpg" alt="">
    </div>

    <div class="content" ref="pinned">
      <div class="container">
        <div class="title">
          <span>about</span><br>itwizard.
        </div>


        <div class="main">
          <div class="txt">
            <p class="txt-title" v-html="$textApi('aboutTitle')"></p>
            <p v-html="$textApi('aboutText')"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="little-keyVisual-2">
      <div class="curtain-blck"></div>
        <div class="history-text">{{$textApi('ourHistory')}}</div>
        <img src="@/assets/image/content/itwizard_wall.jpg" alt="">
      </div>

      <div class="container">
        <div class="timeline">
        <div class="container-timeline left">
          <div class="content-timeline">
            <h2>2018</h2>
            <p>{{this.$textApi('history2018')}}</p>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="content-timeline">
            <h2>2019</h2>
            <p>{{this.$textApi('history2019')}}</p>
          </div>
        </div>
        <div class="container-timeline left">
          <div class="content-timeline">
            <h2>2020</h2>
            <p>{{this.$textApi('history2020')}}</p>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="content-timeline">
            <h2>2021</h2>
            <p>{{this.$textApi('history2021')}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-us-container">
      <div class="container">
        <el-row :gutter="100">
          <el-col :sm="24" :md="12">
              <div class="contact-inner">
                <div class="title" v-html="$textApi('ifYouWanna')">
                </div>

                <div class="description" v-html="$textApi('ifYouWannaQ')">
                </div>

                <el-button type="primary" class="inputs" @click="$router.push('/career')">{{this.$textApi('workplace')}}</el-button>
              </div>
          </el-col>
          <el-col :sm="24" :md="12">
            <div class="contact-inner">
              <img src="@/assets/image/map.png" alt="contact-us">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container" style="padding-top: 100px;">
      <div class="contact-title">
        contact<br>us.
      </div>
      <el-row :gutter="100">
        <el-col :sm="24" :md="12">
          <div class="contact-me">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Mongolia" name="1">
                <div class="">
                  <div class="address">
                    Монгол улс, Улаанбаатар хот, Баянгол дүүрэг, 2-р хороо, 2-р хороолол,<br>Сөүлийн гудамж, 47/1 байр
                  </div>
                  <div class="phone">
                    <span>PHONE</span> +976 7511-0023<p><a style="color: #000;" href="mailto:admin@itwizard.mn">admin@itwizard.mn</a></p>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Republic of Korea" name="2">
                <div class="">
                  <div class="address">
                    서울 금천구 가산디지털1로 5대륭테크노타운20차 402호
                  </div>
                  <div class="phone">
                    <span>PHONE</span> +82 1644-5805
                    <p><a style="color: #000;" href="mailto:admin@tagoplus.co.kr">admin@tagoplus.co.kr</a></p>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="contact-me" style="max-width: 70%;">
            <el-input :placeholder="$textApi('firstname')" v-model="subscribe.name" clearable></el-input>
            <el-input style="margin-top: 10px;" :placeholder="$textApi('title')" v-model="subscribe.title" clearable></el-input>
            <el-input style="margin-top: 10px;" :placeholder="$textApi('phoneOrEmail')" v-model="subscribe.phone" clearable></el-input>
            <el-input style="margin-top: 10px;" type="textarea" rows="3" :placeholder="$textApi('description')" v-model="subscribe.description" clearable></el-input>
            <el-button type="primary" v-html="$textApi('sendToMessage')"></el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 1,
      subscribe: {
        name: '',
        title: '',
        phone: '',
        description: ''
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
  }
}
</script>