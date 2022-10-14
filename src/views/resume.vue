<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="logo_wall">
      <img src="@/assets/image/content/blurred2.jpg" alt="">
      <!-- <div class="container">
        <div class="resume">
          <span>Анкет илгээх</span>
        </div>
      </div> -->
    </div>

    <div class="container resume-container">
      <el-card class="box-card">
        <table>
          <tr>
            <td colspan="2" v-html="$textApi('resumeTitle')"></td>
          </tr>
          <tr>
            <td>1. </td>
            <td v-html="$textApi('resumeReq1')"></td>
          </tr>
          <tr>
            <td>2. </td>
            <td v-html="$textApi('resumeReq2')"></td>
          </tr>
          <tr>
            <td>3. </td>
            <td v-html="$textApi('resumeReq3')"></td>
          </tr>
          <tr>
            <td>4. </td>
            <td v-html="$textApi('resumeReq4')"></td>
          </tr>
        </table>
      </el-card>

      <el-form :model="userInfo" :rules="regx" ref="resumeFrom">
        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('mainInfo')"></div>
          <el-row :gutter="20">
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.lastname">
                <el-input :placeholder="$textApi('lastname') + ' *'" v-model="userInfo.main.lastname" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.firstname">
                <el-input :placeholder="$textApi('firstname') + ' *'" v-model="userInfo.main.firstname" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.birthdate">
                <el-date-picker :picker-options="pickerOptions.disable" style="width: 100%" v-model="userInfo.main.birthdate" type="date" :placeholder="$textApi('birthdate') + ' *'"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.phone">
                <el-input :placeholder="$textApi('phoneNumber') + ' *'" v-model="userInfo.main.phone" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.register">
                <el-input :placeholder="$textApi('registerNumber') + ' *'" @input="userInfo.main.register = userInfo.main.register.toUpperCase()" v-model="userInfo.main.register" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.email">
                <el-input :placeholder="$textApi('emailAddress') + ' *'" v-model="userInfo.main.email" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :sm="24" :md="24">
              <el-form-item prop="main.address">
                <el-input type="textarea" :rows="2" :placeholder="$textApi('homeAddress') + ' *'" v-model="userInfo.main.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('FamiltyStatus')"></div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.family" :key="idx">
            <el-col :sm="24" :md="5">
              <el-form-item>
                <el-input :placeholder="$textApi('roleOfFamily')" v-model="item.role" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item>
                <el-input :placeholder="$textApi('firstname')" v-model="item.name" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item>              
                <el-input :placeholder="$textApi('professionName')" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item>
                <el-date-picker style="width: 100%" v-model="item.birthdate" type="date" :picker-options="pickerOptions.disable" :placeholder="$textApi('birthdate')"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addFamily" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.family.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('EduStatus')"></div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.edu" :key="idx">
            <el-col :sm="24" :md="6">
              <el-form-item prop="edu.any">
                <el-input :placeholder="$textApi('schoolName')" v-model="item.school" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="6">
              <el-form-item prop="edu.any">
                <el-input :placeholder="$textApi('JobName')" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item prop="edu.any"> 
                <el-date-picker style="width: 100%" v-model="item.inYear" type="date" :picker-options="pickerOptions.disable" :placeholder="$textApi('inYearSchool')"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item prop="edu.any" align="left">
                <el-date-picker style="width: 100%" v-model="item.outYear" ref="eduOutYear" :picker-options="getPickerOpt(item)" type="date" :placeholder="$textApi('outYearSchool')"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addEdu" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.edu.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('LanguateStatus')"></div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.lang" :key="idx">
            <el-col :sm="24" :md="12">
              <el-form-item :prop="'lang['+idx+'].language'">
                <el-select v-model="item.language" filterable :placeholder="$textApi('otherLanguage') + ' *'" style="width: 100%;">
                  <el-option
                    v-for="item in languages"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'lang['+idx+'].percent'">
                <el-select v-model="item.percent" filterable placeholder="00.0% *" style="width: 100%;">
                  <el-option
                    v-for="item in levels"
                    :key="item"
                    :label="item + '%'"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'lang['+idx+'].year'">
                <el-input :placeholder="$textApi('learnedYear') + ' *'" v-model="item.year" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addLanguage" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.lang.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('jobExperience')"></div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.experience" :key="idx">
            <el-col :sm="24" :md="5">
              <el-form-item>
                <el-input :placeholder="$textApi('compName')" v-model="item.company" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item>
                <el-input :placeholder="$textApi('jobPosition')" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item>
                <el-date-picker style="width: 100%" v-model="item.inYear" type="date" :picker-options="pickerOptions.disable" :placeholder="$textApi('inYear')"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item align="left">
                <el-date-picker style="width: 100%" v-model="item.outYear" type="date" :picker-options="getPickerOpt(item)" :placeholder="$textApi('outYear')"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item align="left">
                <el-input :placeholder="$textApi('outReason')" v-model="item.outReason" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addExp" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.experience.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('advantageAndNo')"></div>
          <el-row :gutter="20">
            <el-col :sm="24" :md="12">
              <el-form-item prop="personal.advantage">
                <el-input maxlength="100" show-word-limit type="textarea" :rows="3" :placeholder="$textApi('advantage') + ' *'" v-model="userInfo.personal.advantage" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <el-form-item prop="personal.disadvantage">
                <el-input maxlength="100" show-word-limit type="textarea" :rows="3" :placeholder="$textApi('disAdvantage') + ' *'" v-model="userInfo.personal.disadvantage" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="box-card">
          <div class="group-name" v-html="$textApi('skill')"></div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.skill" :key="idx">
            <el-col :sm="24" :md="12">
              <el-form-item :prop="'skill['+idx+'].programm'">
                <el-input maxlength="100" show-word-limit :rows="3" :placeholder="$textApi('programName') + ' *'" v-model="item.programm" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'skill['+idx+'].level'">
                <el-select v-model="item.level" filterable placeholder="00.0% *" style="width: 100%;">
                  <el-option
                    v-for="item in levels"
                    :key="item"
                    :label="item + '%'"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'skill['+idx+'].year'">
                <el-input :placeholder="$textApi('learnedYear') + ' *'" v-model="item.year" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addSkill" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.skill.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>

        <el-button type="primary" class="resumte-submit" :loading="loading" @click="submitForm">{{loading ? this.$textApi('waiting') : this.$textApi('sendResume')}}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disable: {
          disabledDate (date) {
            return date > new Date()
          }
        }
      },
      loading: false,
      levels: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
      languages: ['English', 'Russian', 'Chinese', 'Korean', 'Japanese'],
      userInfo: {
        main: {
          lastname: '',
          firstname: '',
          birthdate: '',
          phone: '',
          register: '',
          email: '',
          address: ''
        },
        family: [
          {
            role: '',
            name: '',
            profession: '',
            birthdate: ''
          }
        ],
        edu: [
          {
            school: '',
            profession: '',
            inYear: '',
            outYear: ''
          }
        ],
        lang: [
          {
            language: '',
            percent: '',
            year: ''
          }
        ],
        experience: [
          {
            company: '',
            profession: '',
            inYear: '',
            outYear: '',
            outReason: ''
          }
        ],
        personal: {
          advantage: '',
          disadvantage: ''
        },
        skill: [
          {
            programm: '',
            level: '',
            year: ''
          }
        ]
      },
      regx: {
        main: {
          lastname: [{required: true, message: this.$textApi('lastname'), pattern: /^[а-яөүёА-ЯӨҮЁ]{1,}$/}],
          firstname: [{required: true, message: this.$textApi('firstname'), pattern: /^[а-яөүёА-ЯӨҮЁ]{1,}$/}],
          birthdate: [{required: true, message: this.$textApi('birthdate'), }],
          // eslint-disable-next-line no-useless-escape
          phone: [{required: true, message: this.$textApi('phoneNumber'), pattern: /^(\d{3}(\-){0,1}){0,1}(\d{8})$/}],
          register: [{required: true, message: this.$textApi('registerNumber'), pattern: /^[А-ЯӨҮЁ]{2}(\d){8}$/}],
          // eslint-disable-next-line no-useless-escape
          email: [{required: true, message: this.$textApi('emailAddress'), pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}],
          address: [{required: true, message: this.$textApi('homeAddress'),  pattern: /^[а-яөүёА-ЯӨҮЁ0-9#-_,. ]{1,}$/}]
        },
        lang: [
          {
            language: [{required: true, message: this.$textApi('pleaseChoose')}],
            percent: [{required: true, message: this.$textApi('pleaseChoose')}],
            year: [{required: true, message: this.$textApi('learnedYear'),  pattern: /^\d+$/}]
          }
        ],
        personal: {
          advantage: [{required: true, message: this.$textApi('advantage')}],
          disadvantage: [{required: true, message: this.$textApi('disAdvantage')}]
        },
        skill: [
          {
            programm: [{required: true, message: this.$textApi('programName'), pattern: /^[a-zA-Z.]{1,}$/}],
            level: [{required: true, message: this.$textApi('pleaseChoose')}],
            year: [{required: true, message: this.$textApi('learnedYear'),  pattern: /^\d+$/}]
          }
        ]
      }
    }
  },
  methods: {
    getPickerOpt(item) {
      if (item.inYear && item.inYear != '') {
        return {
          disabledDate (date) {
            return new Date(item.inYear) > date ||  date > new Date();
          }
        }
      } else {
        return {
          disabledDate (date) {
            return date > new Date();
          }
        }
      }
    },
    addFamily() {
      this.userInfo.family.push({role: '',name: '',profession: '',birthdate: ''});
    },
    addEdu() {
      this.userInfo.edu.push({school: '',profession: '',inYear: '',outYear: ''});
    },
    addLanguage() {
      this.userInfo.lang.push({language: '',percent: '',year: ''});
      this.regx.lang.push({language: [{required: true, message: this.$textApi('pleaseChoose')}],percent: [{required: true, message: this.$textApi('pleaseChoose')}],year: [{required: true, message: this.$textApi('learnedYear'),  pattern: /^\d+$/}]});
    },
    addExp() {
      this.userInfo.experience.push({company: '',profession: '',inYear: '',outYear: '',outReason: ''});
    },
    addSkill() {
      this.userInfo.skill.push({programm: '',level: '',year: ''});
      this.regx.skill.push({programm: [{required: true, message: this.$textApi('programName'), pattern: /^[a-zA-Z.]{1,}$/}],level: [{required: true, message: this.$textApi('pleaseChoose')}],year: [{required: true, message: this.$textApi('learnedYear'),  pattern: /^\d+$/}]});
    },
    submitForm() {
      this.$refs.resumeFrom.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.userInfo.personal.advantage= this.userInfo.personal.advantage.replaceAll('\n', ' ');
          this.userInfo.personal.disadvantage= this.userInfo.personal.disadvantage.replaceAll('\n', ' ');
          this.$axios({
            method: 'post',
            url: '/v1/employee/create-resume',
            headers: {},
            data: {
              resume: this.userInfo
            }
          }).then(() => {
            this.loading = false;
            this.$notify({
              title: 'Амжилттай',
              message: 'Анкет илгээгдлээ',
            });
            this.userInfo = {
              main: {lastname: '',firstname: '',birthdate: '',phone: '',register: '',email: '',address: ''},
              family: [{role: '',name: '',profession: '',birthdate: ''}],
              edu: [{school: '',profession: '',inYear: '',outYear: ''}],
              lang: [{language: '',listen: '',speak: '',read: '',translate: ''}],
              experience: [{company: '',profession: '',inYear: '',outYear: '',outReason: ''}],
              personal: {advantage: '',disadvantage: ''},
              skill: [{programm: '',level: ''}]
            };

            this.$router.push('/');
          }).catch(err => {
            console.err(err);
            this.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted() {}
}
</script>