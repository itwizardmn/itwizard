<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="register">
      <div class="container">
        <div class="register__container">
          <img src="@/assets/image/logo_blck.png" alt="">
          <!-- <div class="register__copyright">
            
          </div> -->
          <!-- <div class="register__menu">
            <div class="register__menu__sub" v-bind:class="{'active': active}" @click="active = true">Нэвтрэх</div>
            <div class="register__menu__sub" v-bind:class="{'active': !active}" @click="active = false">Бүртгүүлэх</div>
          </div> -->

          <div class="register__form active">
            <el-form :model="login" :rules="regx.login" ref="loginFrom" @submit.native.prevent="Login">
              <el-col :sm="24" :md="24">
                <el-form-item prop="username">
                  <el-input placeholder="Хэрэглэгчийн нэр" v-model="login.username" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-form-item prop="password">
                  <el-input placeholder="Нууц үг" v-model="login.password" clearable show-password auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-button type="primary" native-type="submit" class="resumte-submit" :loading="loading">{{loading ? 'Түр хүлээнэ үү' : 'Үргэлжлүүлэх'}}</el-button>
              </el-col>

              <el-col :sm="24" :md="24">
                <div align="right" style="margin-top: 10px;">
                  <a href="javascript:;" class="forgot-password">Нууц үгээ мартсан?</a>
                </div>
              </el-col>
            </el-form>
          </div>

          <!-- <div class="register__form" v-bind:class="{'active': !active}">
            <el-form :model="register" :rules="regx.register" ref="registerFrom" @submit.native.prevent="Register">
              <el-col :sm="24" :md="24">
                <el-form-item prop="name">
                  <el-input placeholder="Нэр" v-model="register.name" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-form-item prop="phone">
                  <el-input placeholder="Утасны дугаар" v-model="register.phone" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-form-item prop="email">
                  <el-input placeholder="Имэйл" v-model="register.email" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-button type="primary" native-type="submit" class="resumte-submit" :loading="loadingRegister">{{loadingRegister ? 'Түр хүлээнэ үү' : 'Үргэлжлүүлэх'}}</el-button>
              </el-col>
            </el-form>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingRegister: false,
      login: {
        username: '',
        password: '' 
      },
      register: {
        name: '',
        phone: '',
        email: ''
      },
      regx: {
        login: {
          // eslint-disable-next-line no-useless-escape
          username: [{required: true, message: 'Хэрэглэгчийн нэр', pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}],
          password: [{required: true, message: 'Нууц үг'}]
        },
        register: {
          name: [{required: true, message: 'Нэр'}],
          // eslint-disable-next-line no-useless-escape
          phone: [{required: true, message: 'Утасны дугаар', pattern: /^(\d{3}(\-){0,1}){0,1}(\d{8})$/}],
          // eslint-disable-next-line no-useless-escape
          email: [{required: true, message: 'Имэйл', pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}]
        }
      },
      active: true
    }
  },
  methods: {
    Login() {
      this.$refs.loginFrom.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$axios({
            method: 'post',
            url: '/v1/employee/login',
            headers: {},
            data: {
              email: this.login.username,
              password: this.login.password
            }
          }).then(data => {
            this.loading = false;
            localStorage.setItem('employee', JSON.stringify(data.data.data));
            localStorage.setItem('token', data.data.data.token);
            // Event.$emit('login');
            this.$axios.defaults.headers.common.Authorization = 'Bearer ' + data.data.data.token;
            Event.$emit('memberLogged');
            this.$notify({
              title: 'Амжилттай',
              message: 'Системд нэвтэрлээ',
            });

            this.$router.push('/');
          }).catch(err => {
            this.loading = false;
            if (err.request.status === 403) {
              this.$notify({
                title: 'Амжилтгүй',
                message: 'Имэйл эсвэл нууц үг буруу',
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    Register() {
      this.$refs.registerFrom.validate((valid) => {
        if (valid) {
          this.loadingRegister = true;

          this.$axios({
            method: 'post',
            url: '/v1/employee/register',
            headers: {},
            data: {
              email: this.register.email,
              name: this.register.name,
              phone: this.register.phone
            }
          }).then(() => {
            this.loadingRegister = false;
            this.$notify({
              title: 'Амжилттай',
              message: 'Бүртгэгдлээ',
            });
          }).catch(err => {
            this.loadingRegister = false;
            if (err.request.status === 409) {
              this.$notify({
                title: 'Амжилтгүй',
                message: 'Бүртгэлтэй хаяг',
              });
            }
          });

        } else {
          return false;
        }
      });
    }
  }
}
</script>