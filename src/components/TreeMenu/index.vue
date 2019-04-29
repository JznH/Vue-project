<template>
  <div class="tree-container normal_height" ref="treeWrap">
    <div class="title">
      <span v-html="title"></span>
      <i class="el-icon-refresh cursor-pointer" @click="refresh"></i>
    </div>
    <div class="content-wrap">
      <div class="content">
        <el-input class="filter-text" placeholder="输入关键字进行过滤" v-model="filterText" size="mini">
        </el-input>
      </div>
    </div>
    <el-scrollbar class="el-scrollbar">
      <div class="content-wrap">
        <div class="content">
          <el-tree class="filter-tree" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2" @node-click="handleCheckChange" :data="treeList" :expand-on-click-node="false" v-loading="loading" element-loading-text="加载中" element-loading-spinner="el-icon-loading">
          </el-tree>
        </div>
      </div>
    </el-scrollbar>
  </div>
  
</template>
<script>
import { getMainHeight } from '@/api/variables'
export default {
  props: {
    treeList: {
      type: Array,
      default() {
        return [{}]
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    isResize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filterText: '',
      list: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      scrollbar: {
        fade: true,
        interactive: true
      },
      mouseWheel: true,
      height: 0
    }
  },
  mounted() {
    this.resize()
  },
  methods: {
    handleCheckChange(data) {
      this.$emit('refreshList', data)
    },
    refresh() {
      this.$emit('refreshTree')
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    setHeight() {
      this.height = getMainHeight()
      this.$refs.treeWrap &&
        (this.$refs.treeWrap.style.height = this.height + 'px')
    },
    resize() {
      this.setHeight()
      if (!this.isResize) return
      window.addEventListener('resize', this.setHeight)
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  }
}
</script>
<style>
.tree-container .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
<style lang="scss" scoped>
@import "src/styles/variables.scss";
.el-scrollbar {
  height: 85%;
  overflow-y: auto;
}
.tree-container {
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid $table-border-color;
  position: relative;
  border-radius: $table-border-radius;
  overflow: hidden;
  .content-wrap {
    position: relative;
    padding: 0 10px;
    font-size: 12px;
  }
  .title {
    padding: 0 10px;
    margin-bottom: 10px;
    position: relative;
    font-size: $title-font-size;
    line-height: $table-title-height;
    background-color: $table-title-bg;
  }
  .el-icon-refresh {
    font-size: 18px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
p {
  line-height: 5;
}
.filter-text {
  margin-bottom: 5px;
}
</style>

