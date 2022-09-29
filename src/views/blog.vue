<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="single-blog">
    <div class="title">
      {{this.blog.title}}
    </div>
    <p class="date">{{this.blog.created_date ? this.blog.created_date.substr(0, 10) : ''}}</p>
    <p class="bottom__line"></p>
    <img :src="$imgUrl + this.blog.thumbnail_seq" alt="">
    <div v-html="this.blog.content" class="content"></div>
    <div v-if="this.blog.url != '' && this.blog.url != null">
      <iframe width="100%" class="iframe" :src="'https://www.youtube.com/embed/' + getId(this.blog.url)" frameborder="0" allowfullscreen></iframe>
    </div>
    <p class="bottom__line"></p>
    <a href="javascript:;" @click="$router.push('/blogs')" class="btn-list">Жагсаалт</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      blog: [],
      lang: null
    }
  },
  created() {
    if (this.$route.params.id) {
      this.lang = localStorage.getItem('lang');
      this.id = this.$route.params.id;
      this.getBlog();
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    async getBlog() {
      const data = await this.$useapi('POST', '/v1/blog/list', {blogSeq: this.id, lang: this.lang });
      if (data && data.length > 0) {
        this.blog = data[0];
      }
    },
    getId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11)
        ? match[2]
        : null;
    }
  }
}
</script>