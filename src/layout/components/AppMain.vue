<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div :style="{ height : height + 'px' }">
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <router-view :key="key" />
        </transition>
      </section>
    </div>
  </el-scrollbar>
</template>
<script>
export default {
  name: 'AppMain',
  data() {
    return {
      height: ''
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  mounted() {
    const windowHeight = document.body.clientHeight - 50
    this.height = windowHeight
  }
}
</script>

<style scoped>
  .fixed-header+.app-main {
    padding-top: 50px;
  }
</style>
