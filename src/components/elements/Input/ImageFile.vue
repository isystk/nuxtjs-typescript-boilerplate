<template>
  <div>
    <VueImageBase64
      :maxFileSize="10485760"
      :thumbnailSize="100"
      :drop="true"
      dropText="ファイルをドラッグ＆ドロップもしくは"
      capture="environment"
      accept="*"
      :multiple="true"
      @handleChange="onChangeValue"
    />
    <div>
      <span v-for="(image, index) in images" :key="index" >
        <img :src="image.fileData" width="100px" />
      </span>
    </div>
  </div>
</template>

<script>
import VueImageBase64 from "vuejs-image-base64";
export default {
  components: {
    VueImageBase64,
  },
  props: {
    name: String,
  },
  data() {
    return {
      images: [],
      imageErrors: []
    };
  },
  methods: {
    onChangeValue(data) {
      console.log(data);
      if (data.result) {
        this.images = [...this.images, data];
      } else {
        this.errors = data.messages;
      }
    }
  }
};
</script>
