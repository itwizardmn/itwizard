<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog container min-vh-100">
    <table ref="menu">
        <tr>
            <td class="active" @click="changeType" data=0>All</td>
            <td @click="changeType" data=1>#{{getText('blog')}}</td>
            <td @click="changeType" data=2>#{{getText('news')}}</td>
            <td @click="changeType" data=3>#{{getText('talking')}}</td>
        </tr>
    </table>
      <ul class="banner-link">
        <li v-for="(item, index) in blogFilter" :key="'blog' + index">
          <p class="itwizard">itwizard</p>
          <router-link :to="'/blog/' + item.blog_seq">
            <img :src="$imgUrl + item.thumbnail_seq" title="">
            <h3 class="f-ns">{{item.title}}</h3>
            <div class="content" v-html="item.content.replaceAll('&nbsp;', '')"></div>
				</router-link>
				</li>
		</ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      conType: 0,
      lang: null
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
  created() {
    this.lang = localStorage.getItem('lang');
    this.getBlogs();
  },
  methods: {
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
      if (idx) {
        this.conType = Number(idx);
      } else {
        this.conType = 0;
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