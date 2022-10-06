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

          <div class="register__form" v-bind:class="{'active': active}">
            <el-form :model="login" :rules="regx.login" ref="loginFrom" @submit.native.prevent="Login">
              <el-col :sm="24" :md="24">
                <el-form-item prop="username">
                  <el-input :disabled="loading" :placeholder="$textApi('username')" v-model="login.username" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-form-item prop="password">
                  <el-input :disabled="loading" :placeholder="$textApi('password')" v-model="login.password" clearable show-password auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-button type="primary" native-type="submit" class="resumte-submit" :loading="loading">{{loading ? this.$textApi('waiting') : this.$textApi('Login')}}</el-button>
              </el-col>

              <el-col :sm="24" :md="24">
                <div align="right" style="margin-top: 10px;">
                  <a href="javascript:;" @click="active = false" class="forgot-password" v-html="$textApi('forgotPassword')"></a>
                </div>
              </el-col>
            </el-form>
          </div>

          <div class="register__form" v-bind:class="{'active': !active}">
            <el-form :model="register" :rules="regx.register" ref="registerFrom" @submit.native.prevent="Register">
              <el-col :sm="24" :md="24">
                <el-form-item prop="email">
                  <el-input :disabled="loadingRegister" :placeholder="$textApi('username')" v-model="register.email" clearable auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="24">
                <el-button type="primary" native-type="submit" class="resumte-submit" :loading="loadingRegister">{{loadingRegister ? this.$textApi('waiting') : this.$textApi('next')}}</el-button>
              </el-col>
              <el-col :sm="24" :md="24">
                <div align="right" style="margin-top: 10px;">
                  <a href="javascript:;" @click="active = true" class="forgot-password" v-html="$textApi('backToLogin')"></a>
                </div>
              </el-col>
            </el-form>
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
      loading: false,
      loadingRegister: false,
      login: {
        username: '',
        password: '' 
      },
      register: {
        email: ''
      },
      regx: {
        login: {
          // eslint-disable-next-line no-useless-escape
          username: [{required: true, message: this.$textApi('username'), pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}],
          password: [{required: true, message: this.$textApi('password')}]
        },
        register: {
          // eslint-disable-next-line no-useless-escape
          email: [{required: true, message: this.$textApi('username'), pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}]
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
    async Register() {
      this.$refs.registerFrom.validate(async (valid) => {
        if (valid) {
          this.loadingRegister = true;
          let result = await this.$useapi('POST', '/v1/employee/forgot-password', { email: this.register.email})
          if (result === 204) {
            this.$notify({
              title: 'Амжилтгүй',
              message: 'Хэрэглэгч олдсонгүй',
            });
          } else if (result) {
            this.$notify({
              title: 'Амжилттай',
              message: 'Имэйл хаягаа шалгана уу',
            });

            this.active = true;
          }

          this.loadingRegister = false;
        } else {
          return false;
        }
      });
    }
  }
}
</script>