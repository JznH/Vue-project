<template>
  <div class="swiperBox">
    <el-row :gutter="10">
      <viewer :images="images">
        <el-col
          v-for="(src,index) in images"
          :key="index"
          :span="4"
        >
          <img
            :src="src"
            style="width:100%;height:150px;"
            class="cover"
          >
        </el-col>
      </viewer>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      images: [
        'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
        'https://img.52z.com/upload/news/image/20180621/20180621055754_89028.jpg',
        'http://attachments.gfan.com/forum/201608/04/2344239wi5iihbw7whxv4g.jpg',
        'http://picm.bbzhi.com/fengjingbizhi/yidalifengguangfengjinggaoqingkuan/show_fengjingou_268536_m.jpg',
        'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
        'https://img.52z.com/upload/news/image/20180621/20180621055754_89028.jpg',
        'http://attachments.gfan.com/forum/201608/04/2344239wi5iihbw7whxv4g.jpg',
        'http://picm.bbzhi.com/fengjingbizhi/yidalifengguangfengjinggaoqingkuan/show_fengjingou_268536_m.jpg'
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>
.swiperBox {
    padding:20px;
}
.swiperBox .cover {
  object-fit: cover;
  cursor: pointer;
}
.swiperBox .el-col {
    margin-bottom: 5px;
}
</style>
