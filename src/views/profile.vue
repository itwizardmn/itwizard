<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container profile" v-loading.fullscreen.lock="pageLoading">
    <el-row :gutter="20">
      <el-col :sm="24" :md="6">
        <el-card class="box-card personal">
          <div class="avatar-container">
            <div class="avatar">
              <img :src="$imgUrl + user.profile" alt="user_profile" class="avatar" @error="onLoadError">
            </div>
            <div class="change-avatar" @click="$refs.avatar_upload.click()">
              <input type="file" ref="avatar_upload" hidden @change="changeAvatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
            </div>
          </div>

          <div class="profile__body">
            <h5>{{user.name}}</h5>
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td v-html="$textApi('phoneNumber')"></td>
                  <td>{{user.phone}}</td>
                </tr>
                <tr>
                  <td v-html="$textApi('emailAddress')"></td>
                  <td>{{user.email}}</td>
                </tr>
                <tr>
                  <td v-html="$textApi('teamName')"></td>
                  <td>{{getTeamName()}}</td>
                </tr>
                <tr>
                  <td v-html="$textApi('jobPosition')"></td>
                  <td>{{getProName()}}</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <a href="javascript:;" @click="activeTab = 5" class="forgot" v-html="$textApi('changePassword')"></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-card>
      </el-col>

      <el-col :sm="24" :md="18">
        <div class="menu-buttons">
            <div class="menu-buttons__btn" v-bind:class="{'active': activeTab == 1}" @click="activeTab = 1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
              <div class="line"></div>
              <p v-html="$textApi('personalInfo')"></p>
            </div>
            <div class="menu-buttons__btn" v-bind:class="{'active': activeTab == 2}" @click="activeTab = 2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg>
              <div class="line"></div>
              <p v-html="$textApi('skill')"></p>
            </div>
            <div class="menu-buttons__btn" v-bind:class="{'active': activeTab == 3}" @click="activeTab = 3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"/></svg>
              <div class="line"></div>
              <p v-html="$textApi('feedback')"></p>
            </div>
            <div class="menu-buttons__btn" v-bind:class="{'active': activeTab == 4}" @click="activeTab = 4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
              <div class="line"></div>
              <p v-html="$textApi('planOfCompany')"></p>
            </div>
          </div>

          <div class="info-container" style="margin-bottom: 50px;">
            <div class="info" v-bind:class="{'active': activeTab == 1}">
              <el-form :model="userInfo" :rules="regx" ref="personal" :disabled="disabled.personal">
                <el-card class="box-card">
                    <h5 v-html="$textApi('mainInfo')"></h5>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.lastname">
                          <el-input placeholder="Овог" v-model="userInfo.main.lastname" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.firstname">
                          <el-input placeholder="Нэр" v-model="userInfo.main.firstname" clearable></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.birthdate">
                          <el-date-picker style="width: 100%" v-model="userInfo.main.birthdate" type="date" placeholder="Төрсөн огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.phone">
                          <el-input placeholder="Утасны дугаар" v-model="userInfo.main.phone" clearable></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.register">
                          <el-input placeholder="Регистрийн дугаар" @input="userInfo.main.register = userInfo.main.register.toUpperCase()" v-model="userInfo.main.register" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="main.email">
                          <el-input placeholder="Имэйл хаяг" disabled v-model="userInfo.main.email" clearable></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="24">
                        <el-form-item prop="main.address">
                          <el-input type="textarea" :rows="2" placeholder="Оршин суугаа хаяг" v-model="userInfo.main.address"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('FamiltyStatus')"></h5>
                    <el-row :gutter="20" v-for="(item, idx) in userInfo.family" :key="idx">
                      <el-col :sm="24" :md="5">
                        <el-form-item>
                          <el-input placeholder="Таны хэн болох" v-model="item.role" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="5">
                        <el-form-item>
                          <el-input placeholder="Нэр" v-model="item.name" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="8">
                        <el-form-item>              
                          <el-input placeholder="Мэргэжил / Ажлын байр" v-model="item.profession" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="4">
                        <el-form-item>
                          <el-date-picker style="width: 100%" v-model="item.birthdate" type="date" placeholder="Төрсөн огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="2" :hidden="disabled.personal">
                        <el-button @click="addFamily" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
                        <el-button @click="userInfo.family.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
                      </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('EduStatus')"></h5>
                    <el-row :gutter="20" v-for="(item, idx) in userInfo.edu" :key="idx">
                      <el-col :sm="24" :md="6">
                        <el-form-item>
                          <el-input placeholder="Сургуулийн нэр" v-model="item.school" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="6">
                        <el-form-item>
                          <el-input placeholder="Эзэмшсэн мэргэжил" v-model="item.profession" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="5">
                        <el-form-item>
                          <el-date-picker style="width: 100%" v-model="item.inYear" type="date" placeholder="Элссэн огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="5">
                        <el-form-item align="left">
                          <el-date-picker style="width: 100%" v-model="item.outYear" type="date" placeholder="Төгссөн огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="2" :hidden="disabled.personal">
                        <el-button @click="addEdu" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
                        <el-button @click="userInfo.edu.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
                      </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('jobExperience')"></h5>
                    <el-row :gutter="20" v-for="(item, idx) in userInfo.experience" :key="idx">
                      <el-col :sm="24" :md="5">
                        <el-form-item>
                          <el-input placeholder="Байгууллагын нэр" v-model="item.company" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="5">
                        <el-form-item>
                          <el-input placeholder="Албан тушаал" v-model="item.profession" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="4">
                        <el-form-item>
                          <el-date-picker style="width: 100%" v-model="item.inYear" type="date" placeholder="Орсон огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="4">
                        <el-form-item align="left">
                          <el-date-picker style="width: 100%" v-model="item.outYear" type="date" placeholder="Гарсан огноо"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="4">
                        <el-form-item align="left">
                          <el-input placeholder="Гарсан шалтгаан" v-model="item.outReason" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="2" :hidden="disabled.personal">
                        <el-button @click="addExp" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
                        <el-button @click="userInfo.experience.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
                      </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('advantageAndNo')"></h5>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="personal.advantage">
                          <el-input maxlength="100" show-word-limit type="textarea" :rows="3" placeholder="Таны давуу тал" v-model="userInfo.personal.advantage" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="12">
                        <el-form-item prop="personal.disadvantage">
                          <el-input maxlength="100" show-word-limit type="textarea" :rows="3" placeholder="Таны сул тал" v-model="userInfo.personal.disadvantage" clearable></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                </el-card>
              </el-form>

              <div class="btn-container">
                <el-button type="primary" class="edit-profile cancel" v-if="!disabled.personal" @click="disabled.personal = true" v-html="$textApi('cancel')"></el-button>
                <el-button type="primary" :loading="loading.personal" class="edit-profile" @click="editPersonal">{{disabled.personal ? this.$textApi('update') : this.$textApi('save')}}</el-button>
              </div>
            </div>
            <div class="info" v-bind:class="{'active': activeTab == 2}">
              <el-form :model="userInfo" :rules="regx" ref="skill" :disabled="disabled.skill" :hidden="disabled.skill">
                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('skillOfProgram')"></h5>
                    <el-row :gutter="20" v-for="(item, idx) in userInfo.skill" :key="idx">
                      <el-col :sm="24" :md="12">
                        <el-form-item :prop="'skill['+idx+'].programm'">
                          <el-input maxlength="100" show-word-limit :rows="3" placeholder="Программын нэр" v-model="item.programm" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="5">
                        <el-form-item :prop="'skill['+idx+'].level'">
                          <el-select v-model="item.level" filterable placeholder="00.0%" style="width: 100%;">
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
                          <el-input placeholder="Судалсан жил" v-model="item.year" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="2" :hidden="disabled.skill">
                        <el-button @click="addSkill" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
                        <el-button @click="userInfo.skill.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
                      </el-col>
                    </el-row>
                </el-card>

                <el-card class="box-card card-mt">
                    <h5 v-html="$textApi('LanguateStatus')"></h5>
                    <el-row :gutter="20" v-for="(item, idx) in userInfo.lang" :key="idx">
                      <el-col :sm="24" :md="12">
                        <el-form-item :prop="'lang['+idx+'].language'">
                          <el-select v-model="item.language" filterable placeholder="Гадаад хэл" style="width: 100%;">
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
                          <el-select v-model="item.percent" filterable placeholder="00.0%" style="width: 100%;">
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
                          <el-input placeholder="Судалсан жил" v-model="item.year" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="2" :hidden="disabled.skill">
                        <el-button @click="addLanguage" v-if="idx <= 0" icon="el-icon-plus" style="margin-top: 5px;" size="small" circle></el-button>
                        <el-button @click="userInfo.lang.splice(idx, 1)" v-else icon="el-icon-minus" style="margin-top: 5px;" size="small" circle></el-button>
                      </el-col>
                    </el-row>
                </el-card>
              </el-form>
              <el-card class="box-card card-mt" :hidden="!disabled.skill">
                <h5 v-html="$textApi('skillOfProgram')"></h5>
                <div id="chart-container"></div>
                <div id="chart-container-pie"></div>
              </el-card>
              <el-card class="box-card card-mt" :hidden="!disabled.skill">
                <h5 v-html="$textApi('LanguateStatus')"></h5>
                <div id="language-chart-container"></div>
              </el-card>
              <div class="btn-container">
                <el-button type="primary" class="edit-profile cancel" v-if="!disabled.skill" @click="disabled.skill = true" v-html="$textApi('cancel')"></el-button>
                <el-button type="primary" :loading="loading.skill" class="edit-profile" @click="editSkill">{{disabled.skill ? this.$textApi('update') : this.$textApi('save')}}</el-button>
              </div>
            </div>

            <div class="info" v-bind:class="{'active': activeTab == 3}">
              <el-card class="box-card card-mt">
                <h5 v-html="$textApi('feedbackSection')"></h5>
                <div v-if="disabled.vote">
                  <el-input
                    placeholder="Search"
                    v-model="vote.search">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                  </el-input>

                  <el-table
                    :data="voteFilter"
                    stripe
                    style="width: 100%">
                    <el-table-column
                      prop="title"
                      :label="$textApi('title')"
                      width="300">
                    </el-table-column>
                    <el-table-column
                      prop="vote"
                      :label="$textApi('type')">
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      :label="$textApi('sentDate')">
                    </el-table-column>
                    <el-table-column>
                      <template slot-scope="scope">
                      <el-tag v-if="scope.row.status == 'pending'" size="mini">Sent</el-tag>
                      <el-tag v-else-if="scope.row.status == 'resolved'" size="mini" type="success">Resolved</el-tag>
                      <el-tag v-else-if="scope.row.status == 'returned'" size="mini" type="warning">Returned</el-tag>
                    </template>
                    </el-table-column>
                  </el-table>
                </div>

                <div v-if="!disabled.vote">
                  <el-form>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="6">
                        <el-form-item>
                          <el-select v-model="newVote.type" filterable placeholder="00.0%" style="width: 100%;">
                            <el-option
                              v-for="item in vote.type"
                              :key="item"
                              :label="item"
                              :value="item">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="12">
                        <el-form-item>
                          <el-input maxlength="100" show-word-limit placeholder="Гарчиг" v-model="newVote.title" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :sm="24" :md="6">
                        <el-checkbox v-model="newVote.hidden" style="transform: translateY(50%)">Нэрээ нууцлах</el-checkbox>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :sm="24" :md="24">
                        <el-form-item>
                          <el-input type="textarea" maxlength="500" :rows="10" show-word-limit placeholder="Агуулаг" v-model="newVote.content" clearable></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div>

              </el-card>
              <div class="btn-container">
                <el-button type="primary" class="edit-profile cancel" v-if="!disabled.vote" @click="disabled.vote = true">Болих</el-button>
                <el-button type="primary" class="edit-profile" :loading="loading.vote" @click="sendVote" v-html="$textApi('sendFeedback')"></el-button>
              </div>
            </div>

            <div class="info" v-bind:class="{'active': activeTab == 4}">
              <el-card class="box-card card-mt">
                <section class="management-hierarchy">
                  <div class="hv-container">
                    <div class="hv-wrapper">

                        <!-- Key component -->
                        <div class="hv-item">

                            <div class="hv-item-parent">
                                <div class="person">
                                    <div class="shape">대표</div>
                                </div>
                            </div>

                            <div class="hv-item-parent">
                                <div class="person">
                                    <div class="shape" style="background: #abdbe3;">부사장</div>
                                </div>
                            </div>

                            <div class="hv-item-parent">
                                <div class="person">
                                    <div class="shape" style="background: #69bdd2;">관리부장</div>
                                </div>
                            </div>

                            <div class="hv-item-children">

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after after-left">
                                    <div class="person">
                                      <div class="shape" style="background: #1979a9;">기술수장</div>
                                    </div>
                                  </div>
                                </div>
                              </div>



                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after">
                                    <div class="person">
                                        <div class="shape" style="background: #1979a9;">개발부장</div>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent no-after">
                                    <div class="person">
                                        <table>
                                          <tr>
                                            <td>
                                              프로젝트 매니저
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              팀장
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              개발팀장
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              개발자
                                            </td>
                                          </tr>
                                        </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after after-right">
                                      <div class="person">
                                        <div class="shape" style="background: #1979a9;">차장</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after x3 after-right">
                                    <div class="person">
                                      <div class="shape" style="background: #1979a9;">팀장</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent">
                                    <div class="person">
                                        <div class="shape" style="background: #1979a9;">사무실 관리자</div>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent no-after">
                                    <div class="person">
                                        <table>
                                          <tr>
                                            <td>
                                              일반직
                                            </td>
                                          </tr>
                                        </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>

                        </div>
                    </div>

                    <!-- <div class="hv-wrapper">

                        <div class="hv-item">

                            <div class="hv-item-parent">
                                <div class="person">
                                    <img src="http://itwizard.mn/filemanager/uploads/staff_uVkIe4uZ9PCwrIUOQF7F_1618568437.jpg" alt="">
                                    <p class="name">
                                        대표
                                    </p>
                                </div>
                            </div>

                            <div class="hv-item-parent">
                                <div class="person">
                                    <img src="http://itwizard.mn/filemanager/uploads/staff_7aXE2IMhLgQAYPmlDIRN_1622796005.jpg" alt="">
                                    <p class="name">
                                        부사장
                                    </p>
                                </div>
                            </div>

                            <div class="hv-item-parent">
                                <div class="person">
                                    <img src="http://itwizard.mn/filemanager/uploads/staff_iMmN3fdWgSxwGrsbctGV_1628650285.jpg" alt="">
                                    <p class="name">
                                        관리부장
                                    </p>
                                </div>
                            </div>

                            <div class="hv-item-children">

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after after-left">
                                    <div class="person">
                                        <img src="http://itwizard.mn/filemanager/uploads/staff_PDvvZ3jFdl5jVW7oAddt_1632467058.jpg" alt="">
                                        <p class="name">
                                            기술수장 
                                        </p>
                                    </div>
                                  </div>
                                </div>
                              </div>



                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after">
                                    <div class="person">
                                        <img src="http://itwizard.mn/filemanager/uploads/staff_5655I12j5tykdemGDl5m_1632466738.jpg" alt="">
                                        <p class="name">
                                            개발부장
                                        </p>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent">
                                    <div class="person">
                                        <div class="groupText">PM</div>
                                        <p class="name">
                                            프로젝트 매니저
                                        </p>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent">
                                    <div class="person">
                                        <div class="groupText">LD</div>
                                        <p class="name">
                                            팀장
                                        </p>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent">
                                    <div class="person">
                                        <div class="groupText">DL</div>
                                        <p class="name">
                                            개발팀장
                                        </p>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent no-after">
                                    <div class="person">
                                        <div class="groupText">DP</div>
                                        <p class="name">
                                            개발자
                                        </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after after-right">
                                      <div class="person">
                                        <img src="http://itwizard.mn/filemanager/uploads/staff_hMOOfOgjfsWVPoTNyoLA_1626933344.jpg" alt="">
                                        <p class="name">
                                            차장
                                        </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent with-after x3 after-right">
                                    <div class="person">
                                      <img src="http://itwizard.mn/filemanager/uploads/staff_1uzBr1bDHzhkESLQ5QRG_1618376599.jpg" alt="">
                                      <p class="name">
                                          팀장
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="hv-item-child">
                                <div class="hv-item">
                                  <div class="hv-item-parent">
                                    <div class="person">
                                        <img src="http://itwizard.mn/filemanager/uploads/staff_LtfV6JypE9tvIHyGDBgj_1631064502.jpg" alt="">
                                        <p class="name">
                                            사무실 관리자
                                        </p>
                                    </div>
                                  </div>
                                  <div class="hv-item-parent no-after">
                                    <div class="person">
                                        <div class="groupText">OF</div>
                                        <p class="name">
                                            일반직
                                        </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>

                        </div>
                    </div> -->
                  </div>
                </section>
              </el-card>
            </div>
            <div class="info" v-bind:class="{'active': activeTab == 5}">
              <el-card>
                <h5 style="text-align: center;" v-html="$textApi('changePassword')"></h5>
                <el-form :model="changePassword" :rules="passwordRegx" ref="changePassword">
                  <el-row :gutter="20" class="changePasswordContainer">
                    <el-col :sm="24" :md="12">
                      <el-form-item prop="current">
                        <el-input placeholder="Одоогийн нууц үг" v-model="changePassword.current" show-password></el-input>
                      </el-form-item>
                      <el-form-item prop="created">
                        <el-input placeholder="Шинэ нууц үг" v-model="changePassword.created" show-password></el-input>
                      </el-form-item>
                      <el-form-item prop="repeated">
                        <el-input placeholder="Давтан нууц үг" v-model="changePassword.repeated" show-password></el-input>
                      </el-form-item>
                      <a href="javascript:;" style="width: 90%;" @click="changeCurrentPassword" class="forgot" v-html="$textApi('save')"></a>
                    </el-col>
                  </el-row>
                </el-form>
              </el-card>
            </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
        if (value !== this.changePassword.created) {
            callback(new Error('Нууц үг таарсангүй.'));
        } else {
            callback();
        }
    };
    return {
      changePassword: {
        current: '',
        created: '',
        repeated: ''
      },
      passwordRegx: {
        current: [{required: true, message: 'Одоогийн нууц үгээ оруулна уу', }],
        // eslint-disable-next-line no-useless-escape
        created: [{required: true, message: '1 тоо, 1 үсэг, хамгийн багадаа 6 орон.', pattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.{6,})/}],
        // email: [{required: true, message: 'Имэйл', pattern: /^([a-zA-Z0-9._\-]{3,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,6})*$/}],
        repeated: [{required: true, message: 'Нууц үг таарсангүй.', validator: validatePass2}]
      },
      profession: [],
      teams: [],
      charts: {
        bar: null,
        language: null,
        pie: null
      },
      levels: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
      languages: ['English', 'Russian', 'Chinese', 'Korean', 'Japanese'],
      disabled: {
        personal: true,
        skill: true,
        vote: true
      },
      newVote: {
        title: '',
        type: 'Шинэ санаа',
        content: '',
        hidden: false
      },
      vote: {
        search: '',
        type: ['Шинэ санаа','Санал хүсэлт','Гомдол'],
        list: []
      },
      activeTab: 1,
      user: {
        name: '',
        phone: '',
        email: '',
        team_seq: null,
        profile: '',
        pro_seq: ''
      },
      userInfo: {
        seq: null,
        main: {
          lastname: '',
          firstname: '',
          birthdate: '',
          phone: '',
          register: '',
          email: '',
          address: ''
        },
        family: [],
        edu: [],
        lang: [],
        experience: [],
        personal: {
          advantage: '',
          disadvantage: ''
        },
        skill: []
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
      },
      selectedProfile: null,
      pageLoading: false,
      loading: {
        personal : false,
        skill    : false,
        vote     : false
      },
      language: null
    }
  },
  computed: {
    voteFilter() {
      let arr = [];
      this.vote.list.forEach(vote => {
        vote.title.toUpperCase().includes(this.vote.search.toUpperCase()) ? arr.push(vote) : null;
      });
      return arr;
    }
  },
  created() {
    const lan = localStorage.getItem('lang');
    if (lan) {
      this.language = lan;
    } else {
      this.language = 'MN'
    }
    const user = JSON.parse(localStorage.getItem('employee'));
    this.user = user ? user : null; 
    this.getInfo();
    this.getVotes();
    this.getContent();
    this.getTeams();
  },
  mounted() {},
  methods: {
    changeCurrentPassword() {
      this.$refs.changePassword.validate(async (valid) => {
        if (valid) {
          const result = await this.$useapi('PUT', '/v1/employee/change-password', {current: this.changePassword.current, created: this.changePassword.created, repeated: this.changePassword.repeated});
          if (result === 204) {
            this.$notify({
              title: 'Амжилтгүй',
              message: 'Хуучин нууц үг буруу',
            });
          } else if(result) {
            this.$notify({
              title: 'Амжилттай',
              message: 'Нууц үг солигдлоо',
            });
            this.activeTab = 1;
            this.changePassword = { current: '', created: '', repeated: '' };
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    onLoadError(event) {
      console.log(event);
      event.currentTarget.src = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
    },
    getTeams() {
      this.$axios({
          method: 'get',
          url: '/v1/team/list',
          headers: {},
      }).then(data => {
        if (data.data.message === 'Success') {
          this.teams = data.data.data;
        }
      });
    },
    getTeamName() {
      let name = 'Unknown';
      this.teams.forEach(elm => {
        elm.seq === this.user.team_seq ? name = elm.team_name : null;
      });

      return name;
    },
    getProName() {
      let name = 'Unknown';
      this.profession.forEach(elm => {
        elm.seq === this.user.pro_seq ? name = (this.language === 'MN' ? elm.pro_name : elm.pro_name_ko) : null;
      });

      return name;
    },
    getContent() {
      this.$axios({
        method: 'post',
        url: '/a1/project/get-list',
        data: {
          cont: "PROFESSION"
        }
      }).then(data => {
        this.profession = data.data.data;
      }).catch(err => {
        console.log(err);
      });
    },
    getVotes() {
      this.$axios({
        method: 'get',
        url: '/v1/employee/get-votes',
      }).then((data) => {
        this.vote.list = data.data.data;
      }).catch(err => {
        console.log(err);
      });
    },
    sendVote() {
      if (this.disabled.vote) {
        this.disabled.vote = false;
      } else {
        if (this.newVote.title != '' && this.newVote.content != '') {
          this.loading.vote = true;
          this.$axios({
            method: 'post',
            url: '/v1/employee/add-vote',
            data: {
              newVote: this.newVote
            }
          }).then(() => {
            this.loading.vote = false;
            this.disabled.vote = true;
            this.getVotes();
          }).catch(err => {
            console.log(err);
            this.loading.vote = false;
          });
        }
      }
    },
    initLangChart() {
      var canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = this.userInfo.lang.length > 1 ?  this.userInfo.lang.length * 20 : 40;
      canvas.id = 'chart-language';
      document.querySelector('#language-chart-container').innerHTML = '';
      document.querySelector('#language-chart-container').appendChild(canvas);
      this.charts.language ? this.charts.language.clear() : null;
      let labels = [];
        let dataset = { data: [], backgroundColor: [], borderColor: [], borderWidth: 1};

        this.userInfo.lang.forEach(skill => {
          labels.push(skill.language);
          dataset.data.push(skill.percent);
          dataset.backgroundColor.push(skill.color);
          dataset.borderColor.push(skill.color);
        });

        this.charts.language = new this.$chart(document.querySelector('#chart-language'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [dataset]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: false
                }
              },
              indexAxis: 'y',
              scales: {
                  x: {
                      max: 100
                  }
              }
            }
        });
    },
    initBarChart() {
      var canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = this.userInfo.skill.length > 1 ?  this.userInfo.skill.length * 20 : 40;
      canvas.id = 'chart';
      document.querySelector('#chart-container').innerHTML = '';
      document.querySelector('#chart-container').appendChild(canvas);
      this.charts.bar ? this.charts.bar.clear() : null;
      let labels = [];
        let dataset = { data: [], backgroundColor: [], borderColor: [], borderWidth: 1};

        this.userInfo.skill.forEach(skill => {
          labels.push(skill.programm);
          dataset.data.push(skill.level);
          dataset.backgroundColor.push(skill.color);
          dataset.borderColor.push(skill.color);
        });

        this.charts.bar = new this.$chart(document.querySelector('#chart'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [dataset]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: false
                }
              },
              indexAxis: 'y',
              scales: {
                  x: {
                      max: 100
                  }
              }
            }
        });
    },
    initPieChart() {
      var canvas = document.createElement('canvas');
      canvas.width = 10;
      canvas.height = 10;
      canvas.id = 'chart-pie';
      document.querySelector('#chart-container-pie').innerHTML = '';
      document.querySelector('#chart-container-pie').appendChild(canvas);
      this.charts.pie ? this.charts.pie.clear() : null;
      let labels = [];
        let dataset = { data: [], backgroundColor: [], borderColor: [], borderWidth: 1};

        this.userInfo.skill.forEach(skill => {   
          labels.push(skill.programm);
          dataset.data.push(skill.level);
          dataset.backgroundColor.push(skill.color);
          dataset.borderColor.push(skill.color);
        });

        this.charts.pie = new this.$chart(document.querySelector('#chart-pie'), {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [dataset]
            },
            options: {
              showAllTooltips: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'left'
                }
              }
            }
        });
    },
    dynamicColor() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ", 0.2)";
    },
    async updateCareer(loader) {
      this.userInfo.personal.advantage= this.userInfo.personal.advantage.replaceAll('\n', ' ');
      this.userInfo.personal.disadvantage= this.userInfo.personal.disadvantage.replaceAll('\n', ' ');
      this.loading[loader] = true;
      const data = await this.$useapi('POST', '/v1/employee/update-resume', { resume: this.userInfo });
      if (data) {
        this.loading[loader] = false;
        this.disabled[loader] = true;
        this.user.name = this.userInfo.main.firstname;
        this.user.phone = this.userInfo.main.phone;
        this.user.email = this.userInfo.main.email;
        localStorage.setItem('employee', JSON.stringify(this.user));
        this.$emit("profileChanged", this.user.name);
        this.buildSkillColor();
        this.initLangChart();
      } else {
        this.loading[loader] = false;
      }
    },
    editSkill() {
      if (this.disabled.skill) {
        this.disabled.skill = false;
      } else {
        this.$refs.skill.validate((valid) => {
          if (valid) {
            this.updateCareer('skill');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    editPersonal() {
      if (this.disabled.personal) {
        this.disabled.personal = false;
      } else {
        this.$refs.personal.validate((valid) => {
          if (valid) {
            this.updateCareer('personal');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    addSkill() {
      this.userInfo.skill.push({programm: '',level: '',year: ''});
      this.regx.skill.push({programm: [{required: true, message: this.$textApi('programName'), pattern: /^[a-zA-Z.]{1,}$/}],level: [{required: true, message: 'Түвшин'}],year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]});
    },
    addLanguage() {
      this.userInfo.lang.push({language: '',percent: '',year: ''});
      this.regx.lang.push({language: [{required: true, message: 'Сонгоно уу'}],percent: [{required: true, message: 'Сонгоно уу'}],year: [{required: true, message: 'Судалсан жил',  pattern: /^[0-9]{1,}$/}]});
    },
    addFamily() {
      this.userInfo.family.push({role: '',name: '',profession: '',birthdate: ''});
    },
    addEdu() {
      this.userInfo.edu.push({school: '',profession: '',inYear: '',outYear: ''});
    },
    addExp() {
      this.userInfo.experience.push({company: '',profession: '',inYear: '',outYear: '',outReason: ''});
    },
    async changeAvatar(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      this.selectedProfile = file;
      this.pageLoading = true;
      const fd = new FormData();
      fd.append('image', this.selectedProfile, this.selectedProfile.name);
      this.$axios.post(
        '/v1/employee/update-profile',
        fd
      ).then(data => {
        this.user.profile = data.data.data.profile;
        localStorage.setItem('employee', JSON.stringify(this.user));
        this.pageLoading = false;
      }).catch(err => {
        console.log(err);
        this.pageLoading = false;
      });
    },
    buildSkillColor() {
      this.userInfo.skill.forEach(skill => {          
        let color = this.dynamicColor();
        skill.color = color;
      });

      this.userInfo.lang.forEach(skill => {          
        let color = this.dynamicColor();
        skill.color = color;
      });

      this.initBarChart();
      this.initPieChart();
      this.initLangChart();
    },
    async getInfo() {

      const data = await this.$useapi('GET', '/v1/employee/employee-personal-info');
      if (data) {
        const result = data;
        this.userInfo.main.lastname = result.lastname;
        this.userInfo.main.firstname = result.firstname;
        this.userInfo.main.birthdate = new Date(result.birthdate);
        this.userInfo.main.phone = result.phone;
        this.userInfo.main.register = result.register;
        this.userInfo.main.email = result.email;
        this.userInfo.main.address = result.address;
        this.userInfo.edu = JSON.parse(result.edu);
        this.userInfo.experience = JSON.parse(result.experience);
        this.userInfo.family = JSON.parse(result.family);
        this.userInfo.lang = JSON.parse(result.lang);
        this.userInfo.personal = JSON.parse(result.personal);
        this.userInfo.skill = JSON.parse(result.skill);
        this.userInfo.seq = result.seq;
        this.buildSkillColor();
      }
      // this.$axios({
      //   method: 'get',
      //   url: '/v1/employee/employee-personal-info'
      // }).then(data => {
        
      // });
    }
  }
}
</script>
<style lang="scss" scoped>
a.forgot {
  display: block; 
  text-align: center;
  width: 80%;
  margin: auto;;
  text-decoration: none;
  color: #4c5362;
  padding: 10px 5px;
  border: 1px solid #4c5362;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #4c5362;
    color: #fff;
  }
}

.changePasswordContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
}
</style>