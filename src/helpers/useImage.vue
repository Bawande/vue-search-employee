<template>
  <img :src="imgPath" @error="imageLoadError" />
  <!-- <p>{{ imgUrl }}</p> -->
</template>

<script>
export default {
  props: {
    imgUrl: String,
  },
  methods: {
    imageLoadError(event) {
      event.target.src = "require('../assets/images/error-image.jpg')";
    },
  },
  computed: {
    imgPath() {
      try {
        const fileName = require(`../assets/${this.imgUrl}`);
        return fileName;
      } catch (error) {
        return require("../assets/images/error-image.jpg");
      }
    },
  },
};
</script>
