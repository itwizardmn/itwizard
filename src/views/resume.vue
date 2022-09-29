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
            <td colspan="2"><strong>IT Wizard</strong> ХХК-ний албан хэрэгцээнд зориулав.</td>
          </tr>
          <tr>
            <td>1. </td>
            <td>Анкетыг тодорхой, үг товчлохгүйгээр бичнэ үү.</td>
          </tr>
          <tr>
            <td>2. </td>
            <td>Анкетыг илгээхээс өмнө уншиж танилцана уу.</td>
          </tr>
          <tr>
            <td>3. </td>
            <td>Крилл үсгээр бичнэ үү.</td>
          </tr>
          <tr>
            <td>4. </td>
            <td>( * ) агуулсан талбарыг заавал бөглөнө үү.</td>
          </tr>
        </table>
      </el-card>

      <el-form :model="userInfo" :rules="regx" ref="resumeFrom">
        <el-card class="box-card">
          <div class="group-name">Ерөнхий мэдээлэл</div>
          <el-row :gutter="20">
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.lastname">
                <el-input placeholder="Овог *" v-model="userInfo.main.lastname" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.firstname">
                <el-input placeholder="Нэр *" v-model="userInfo.main.firstname" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.birthdate">
                <el-date-picker :picker-options="pickerOptions.disable" style="width: 100%" v-model="userInfo.main.birthdate" type="date" placeholder="Төрсөн огноо *"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.phone">
                <el-input placeholder="Утасны дугаар *" v-model="userInfo.main.phone" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.register">
                <el-input placeholder="Регистрийн дугаар *" @input="userInfo.main.register = userInfo.main.register.toUpperCase()" v-model="userInfo.main.register" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item prop="main.email">
                <el-input placeholder="Имэйл хаяг *" v-model="userInfo.main.email" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :sm="24" :md="24">
              <el-form-item prop="main.address">
                <el-input type="textarea" :rows="2" placeholder="Оршин суугаа хаяг *" v-model="userInfo.main.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name">Гэр бүлийн байдал</div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.family" :key="idx">
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'family[' + idx + '].role'">
                <el-input placeholder="Таны хэн болох *" v-model="item.role" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'family[' + idx + '].name'">
                <el-input placeholder="Нэр *" v-model="item.name" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="8">
              <el-form-item :prop="'family[' + idx + '].profession'">              
                <el-input placeholder="Мэргэжил / Ажлын байр *" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item :prop="'family[' + idx + '].birthdate'">
                <el-date-picker style="width: 100%" v-model="item.birthdate" type="date" :picker-options="pickerOptions.disable" placeholder="Төрсөн огноо *"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addFamily" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.family.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name">Боловсролын талаархи мэдээлэл</div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.edu" :key="idx">
            <el-col :sm="24" :md="6">
              <el-form-item prop="edu.any">
                <el-input placeholder="Сургуулийн нэр" v-model="item.school" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="6">
              <el-form-item prop="edu.any">
                <el-input placeholder="Эзэмшсэн мэргэжил" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item prop="edu.any"> 
                <el-date-picker style="width: 100%" v-model="item.inYear" type="date" :picker-options="pickerOptions.disable" placeholder="Элссэн огноо"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item prop="edu.any" align="left">
                <el-date-picker style="width: 100%" v-model="item.outYear" ref="eduOutYear" :picker-options="getPickerOpt(item)" type="date" placeholder="Төгссөн огноо"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addEdu" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.edu.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name">Гадаад хэлний мэдлэгийн түвшин</div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.lang" :key="idx">
            <el-col :sm="24" :md="12">
              <el-form-item :prop="'lang['+idx+'].language'">
                <el-select v-model="item.language" filterable placeholder="Гадаад хэл *" style="width: 100%;">
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
                <el-input placeholder="Судалсан жил *" v-model="item.year" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addLanguage" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.lang.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div class="group-name">Ажлын туршлага</div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.experience" :key="idx">
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'experience[' +idx+ '].company'">
                <el-input placeholder="Байгууллагын нэр *" v-model="item.company" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="5">
              <el-form-item :prop="'experience[' +idx+ '].profession'">
                <el-input placeholder="Албан тушаал *" v-model="item.profession" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item :prop="'experience[' +idx+ '].inYear'">
                <el-date-picker style="width: 100%" v-model="item.inYear" type="date" :picker-options="pickerOptions.disable" placeholder="Орсон огноо *"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item :prop="'experience[' +idx+ '].outYear'" align="left">
                <el-date-picker style="width: 100%" v-model="item.outYear" type="date" :picker-options="getPickerOpt(item)" placeholder="Гарсан огноо *"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="4">
              <el-form-item :prop="'experience[' +idx+ '].outReason'" align="left">
                <el-input placeholder="Гарсан шалтгаан *" v-model="item.outReason" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addExp" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.experience.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="box-card">
          <div class="group-name">Давуу болон сул тал</div>
          <el-row :gutter="20">
            <el-col :sm="24" :md="12">
              <el-form-item prop="personal.advantage">
                <el-input maxlength="100" show-word-limit type="textarea" :rows="3" placeholder="Таны давуу тал *" v-model="userInfo.personal.advantage" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="12">
              <el-form-item prop="personal.disadvantage">
                <el-input maxlength="100" show-word-limit type="textarea" :rows="3" placeholder="Таны сул тал *" v-model="userInfo.personal.disadvantage" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="box-card">
          <div class="group-name">Ур чадвар</div>
          <el-row :gutter="20" v-for="(item, idx) in userInfo.skill" :key="idx">
            <el-col :sm="24" :md="12">
              <el-form-item :prop="'skill['+idx+'].programm'">
                <el-input maxlength="100" show-word-limit :rows="3" placeholder="Программын нэр *" v-model="item.programm" clearable></el-input>
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
              <el-form-item :prop="'lang['+idx+'].year'">
                <el-input placeholder="Судалсан жил *" v-model="item.year" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :md="2">
              <el-button @click="addSkill" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
              <el-button @click="userInfo.skill.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
            </el-col>
          </el-row>
        </el-card>

        <el-button type="primary" class="resumte-submit" :loading="loading" @click="submitForm">{{loading ? 'Түр хүлээнэ үү' : 'Анкет илгээх'}}</el-button>
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
      languages: ['Англи хэл', 'Орос хэл', 'Хятад хэл', 'Солонгос хэл', 'Япон хэл'],
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
          lastname: [{required: true, message: 'Овог', pattern: /^[а-яөүёА-ЯӨҮЁ]{1,}$/}],
          firstname: [{required: true, message: 'Нэр', pattern: /^[а-яөүёА-ЯӨҮЁ]{1,}$/}],
          birthdate: [{required: true, message: 'Төрсөн огноо', }],
          // eslint-disable-next-line no-useless-escape
          phone: [{required: true, message: 'Утасны дугаар', pattern: /^(\d{3}(\-){0,1}){0,1}(\d{8})$/}],
          register: [{required: true, message: 'Регистр', pattern: /^[А-ЯӨҮЁ]{2}(\d){8}$/}],
          // eslint-disable-next-line no-useless-escape
          email: [{required: true, message: 'Имэйл', pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}],
          address: [{required: true, message: 'Оршин суугаа хаяг',  }]
        },
        family: [
          {
            role: [{required: true, message: 'Таны хэн болох', }],
            name: [{required: true, message: 'Нэр', }],
            profession: [{required: true, message: 'Ажлын байр', }],
            birthdate: [{required: true, message: 'Төрсөн огноо', }]
          }
        ],
        lang: [
          {
            language: [{required: true, message: 'Сонгоно уу'}],
            percent: [{required: true, message: 'Сонгоно уу'}],
            year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]
          }
        ],
        edu: {
          any: [{required: false}]
        },
        experience: [
          {
            company: [{required: true, message: 'Байгууллагын нэр' }],
            profession: [{required: true, message: 'Албан тушаал' }],
            inYear: [{required: true, message: 'Орсон огноо'}],
            outYear: [{required: true, message: 'Гарсан огноо' }],
            outReason: [{required: true, message: 'Гарсан шалтгаан'}]
          }
        ],
        personal: {
          advantage: [{required: true, message: 'Давуу тал'}],
          disadvantage: [{required: true, message: 'Сул тал'}]
        },
        skill: [
          {
            programm: [{required: true, message: 'Программын нэр'}],
            level: [{required: true, message: 'Түвшин'}],
            year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]
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
      this.regx.family.push({role: [{required: true, message: 'Таны хэн болох' }],name: [{required: true, message: 'Нэр', }],profession: [{required: true, message: 'Ажлын байр', }],birthdate: [{required: true, message: 'Төрсөн огноо', }]});
    },
    addEdu() {
      this.userInfo.edu.push({school: '',profession: '',inYear: '',outYear: ''});
    },
    addLanguage() {
      this.userInfo.lang.push({language: '',percent: '',year: ''});
      this.regx.lang.push({language: [{required: true, message: 'Сонгоно уу'}],percent: [{required: true, message: 'Сонгоно уу'}],year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]});
    },
    addExp() {
      this.userInfo.experience.push({company: '',profession: '',inYear: '',outYear: '',outReason: ''});
      this.regx.experience.push({company: [{required: true, message: 'Байгууллагын нэр', }],profession: [{required: true, message: 'Албан тушаал', }],inYear: [{required: true, message: 'Орсон огноо', }],outYear: [{required: true, message: 'Гарсан огноо', }],outReason: [{required: true, message: 'Гарсан шалтгаан', }]});
    },
    addSkill() {
      this.userInfo.skill.push({programm: '',level: '',year: ''});
      this.regx.skill.push({programm: [{required: true, message: 'Программын нэр'}],level: [{required: true, message: 'Түвшин'}],year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]});
    },
    submitForm() {
      this.$refs.resumeFrom.validate((valid) => {
        if (valid) {
          this.loading = true;

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