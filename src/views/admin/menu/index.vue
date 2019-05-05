<template>
  <el-form
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    size="small"
    :inline="true"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="新增类型"
      prop="type"
    >
      <el-select
        v-model="ruleForm.type"
        placeholder=""
        @change="reset('ruleForm')"
      >
        <el-option
          label="菜单"
          value="1"
        />
        <el-option
          label="按钮"
          value="2"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="名称"
      prop="title"
    >
      <el-input v-model="ruleForm.title" />
    </el-form-item>
    <el-form-item
      label="上级菜单"
      prop="parentid"
    >
      <el-select
        v-model="ruleForm.parentid"
        placeholder="请选择上级菜单"
      >
        <el-option
          label="区域一"
          value="shanghai"
        />
        <el-option
          label="区域二"
          value="beijing"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      v-show="isAddMenu"
      label="访问地址"
      prop="path"
    >
      <el-input v-model="ruleForm.path" />
    </el-form-item>
    <el-form-item
      v-show="isAddMenu"
      label="路由名称"
      prop="name"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item
      v-show="isAddMenu"
      label="页面地址"
      prop="component"
    >
      <el-input v-model="ruleForm.component" />
    </el-form-item>
    <el-form-item
      v-show="isAddMenu"
      label="跨域地址"
      prop="treehref"
    >
      <el-input v-model="ruleForm.treehref" />
    </el-form-item>
    <el-form-item
      label="显示图标"
      prop="icon"
    >
      <el-input v-model="ruleForm.icon" />
    </el-form-item>
    <el-form-item
      label="访问权限"
      prop="roles"
    >
      <el-input v-model="ruleForm.roles" />
    </el-form-item>
    <!-- <el-form-item
      label="角色类型"
      prop="grade"
    >
      <el-input v-model="ruleForm.grade" />
    </el-form-item> -->
    <el-form-item
      v-show="isAddMenu"
      label="是否显示"
      prop="showflag"
    >
      <el-select
        v-model="ruleForm.showflag"
        placeholder=""
      >
        <el-option
          label="显示"
          value="1"
        />
        <el-option
          label="隐藏"
          value="2"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="排序"
      prop="orderno"
    >
      <el-input v-model="ruleForm.orderno" />
    </el-form-item>
    <el-form-item
      label="说明"
      prop="remarks"
    >
      <el-input v-model="ruleForm.remarks" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
      >立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
const defaultForm = {
  type: '1',
  name: '',
  showflag: '1'
}
export default {
  data() {
    return {
      ruleForm: { ...defaultForm },
      rules: {}
    }
  },
  computed: {
    isAddMenu() {
      return this.ruleForm.type === '1'
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(this.ruleForm)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset(formName) {
      const type = this.ruleForm.type
      this.ruleForm = { ...defaultForm }
      this.ruleForm.type = type
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
