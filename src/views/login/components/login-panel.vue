<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="User">

        <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
          <el-form-item label="账号" prop="name">
            <el-input v-model="account.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" type="password" :show-password="true" />
          </el-form-item>


        </el-form>

      </el-tab-pane>
      <el-tab-pane label="Config">

      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script setup lang="ts">


import { ElForm } from 'element-plus';
import { reactive, ref } from 'vue'

import { rules } from '../config/account-config'
import localCatche from '@/utils/cache'

import useLoginStore from '@/store/login/login'

const account = reactive({
  name: localCatche.getCatche('name') ?? '',
  password: localCatche.getCatche('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginStore = useLoginStore()


const loginAction = () => {
  formRef.value?.validate((valid) => {
    if(valid) {
      localCatche.setCatche('name', account.name)
      localCatche.setCatche('password', account.password)

      loginStore.accountLoginAction({ name: account.name, password: account.password })
    }

  })
}

defineExpose({
  loginAction
})

</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
}
</style>
