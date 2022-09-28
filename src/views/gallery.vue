<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="office">
    <div class="container">
      <h2>itwizard office</h2>
      <div class="gallery">
      <div class="gallery__column">
        <a href="javascript:;" class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/1.jpg" alt="" class="gallery__image">
          </figure>
        </a>

        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/6.jpg" alt="" class="gallery__image">
          </figure>
        </a>

        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/2.jpg" alt="" class="gallery__image">
          </figure>
        </a>
      </div>
      
      <div class="gallery__column">
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/3.jpg" alt="" class="gallery__image">
          </figure>
        </a>
        
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/4.jpg" alt="" class="gallery__image">
          </figure>
        </a>

        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/10.jpg" alt="" class="gallery__image">
          </figure>
        </a>
      </div>
      
      <div class="gallery__column">
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/11.jpg" alt="" class="gallery__image">
          </figure>
        </a>
        
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/5.jpg" alt="" class="gallery__image">
          </figure>
        </a>

        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/8.jpg" alt="" class="gallery__image">
          </figure>
        </a>
      </div>
      
      <div class="gallery__column">
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/12.jpg" alt="" class="gallery__image">
          </figure>
        </a>

        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/9.jpg" alt="" class="gallery__image">
          </figure>
        </a>
        
        <a href="javascript:;"  class="gallery__link" @click="showPreview">
          <figure class="gallery__thumb">
            <img src="@/assets/image/content/gallery/7.jpg" alt="" class="gallery__image">
          </figure>
        </a>
      </div>
    </div>
    </div>

    <div class="demo-image__preview">
        <el-image
            hidden
            style="width: 100px; height: 100px"
            ref="imagePreview"
            id="imagePreview"
            :src="preview.url"
            :preview-src-list="preview.list"
            :initial-index="preview.idx"
            :hide-on-click-modal="true"
            fit="cover"
        />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview: {
          url: require('@/assets/image/content/gallery/1.jpg'),
          list: [
            require('@/assets/image/content/gallery/1.jpg'),
            require('@/assets/image/content/gallery/6.jpg'),
            require('@/assets/image/content/gallery/2.jpg'),
            require('@/assets/image/content/gallery/3.jpg'),
            require('@/assets/image/content/gallery/4.jpg'),
            require('@/assets/image/content/gallery/10.jpg'),
            require('@/assets/image/content/gallery/11.jpg'),
            require('@/assets/image/content/gallery/5.jpg'),
            require('@/assets/image/content/gallery/8.jpg'),
            require('@/assets/image/content/gallery/12.jpg'),
            require('@/assets/image/content/gallery/9.jpg'),
            require('@/assets/image/content/gallery/7.jpg')
          ],
          idx: 1
      }
    }
  },
  methods: {
    showPreview(event) {
      let tags = document.querySelectorAll('.gallery__link');
      let idx = Array.prototype.indexOf.call(tags, event.currentTarget)

      this.preview.idx = idx;
      const el = document.getElementById("imagePreview");
      el.click();
    }
  }
}
</script>