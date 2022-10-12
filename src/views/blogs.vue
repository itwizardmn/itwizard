<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog container min-vh-100">
    <table ref="menu">
        <tr>
            <td class="active" @click="changeType" data=0>All</td>
            <td @click="changeType" data=1>#{{getText('blog')}}</td>
            <td @click="changeType" data=2>#{{getText('news')}}</td>
            <td @click="changeType" data=3>#{{getText('talking')}}</td>
            <td @click="changeType" data=4>#Youtube</td>
        </tr>
    </table>
      <ul class="banner-link" ref="localBlog">
        <li v-for="(item, index) in blogFilter" :key="'blog' + index">
          <p class="itwizard">itwizard</p>
          <router-link :to="'/blog/' + item.blog_seq">
            <img :src="$imgUrl + item.thumbnail_seq" title="">
            <h3 class="f-ns">{{item.title}}</h3>
            <div class="content" v-html="item.content.replaceAll('&nbsp;', '')"></div>
				</router-link>
				</li>
		</ul>
    <ul class="banner-link" ref="youtube" style="display: none;">
        <li v-for="(item, index) in youtube.list" :key="'blog' + index" class="ytb-container">
          <div class="ytb-thumbnail">
            <div class="curtain"></div>
            <img src="@/assets/image/content/playBtn.png" @click="playVideo(item)" class="play-btn" title="play-btn">
            <img :src="item.thumbnail" title="">
          </div>
          <h3>{{item.title}}</h3>
				</li>
		</ul>

    <div class="ytb-dialog" v-bind:class="{ 'open': dialog.iframe }">
      <div class="content">
        <a href="javascript:;" class="close-btn" @click="closeDialog">
          <i class="el-icon-close"></i>
        </a>

        <div style="height: 100%;">
          <iframe v-if="youtube.selected" width="100%" class="iframe" :src="'https://www.youtube.com/embed/' + youtube.selected.video_id" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: {
        iframe: false
      },
      blogs: [],
      conType: 0,
      lang: null,
      youtube: {
        apiKey: 'AIzaSyA2JKlRDMjUIO7YSg0iTn6vCvb_dkcBr1E',
        channelId: 'UC8CFyKbS5Vcv0V-cAkpdRFw',
        selected: null,
        list: []
      }
    }
  },
  computed: {
    blogFilter() {
      if (this.conType === 0) {
        return this.blogs;
      }

      let arr = [];
      this.blogs.forEach(elm => {
        elm.contentType === this.conType ? arr.push(elm) : null;
      });
      return arr;
    }
  },
  async created() {
    const lan = localStorage.getItem('lang');
    if (lan) {
      this.lang = lan;
    } else {
      this.lang = await this.$detectip();
    }
    this.getBlogs();
    this.getYoutubeVideos();
  },
  methods: {
    closeDialog() {
      this.youtube.selected = null;
      this.dialog.iframe = false;
    },
    playVideo(item) {
      this.youtube.selected = item;
      this.dialog.iframe = true;
    },
    async getYoutubeVideos() {
      console.log('=asdfasdf');
      const data = await this.$useapi('GET', '/v1/blog/get-youtube-videos');
      if(data) {
        this.youtube.list = data;
      }
    },
    getText(text) {
        return this.$textApi(text);
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
    changeType(event) {
      let elm = event.currentTarget;
      const idx = elm.getAttribute('data');

      if (idx > 3) {
        this.$refs.youtube.style.display = 'grid';
        this.$refs.localBlog.style.display = 'none';
      } else {
        this.$refs.youtube.style.display = 'none';
        this.$refs.localBlog.style.display = 'grid';

        if (idx) {
          this.conType = Number(idx);
        } else {
          this.conType = 0;
        }
      }

      const arr = this.$refs.menu.querySelectorAll('td');
      arr.forEach(el => {
        el.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      this.move(event.currentTarget); 
    },
    async getBlogs() {
      const data = await this.$useapi('POST', '/v1/blog/list', { lang: this.lang });
      if (data && data.length > 0) {
        this.blogs = data;
      }
    }
  }
}
</script>