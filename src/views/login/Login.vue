<template>
  <div class="login">
    <LoginPanel ref="accountRef" />
    <el-button type="primary" size="default" @click="loginActionRef">登录系统</el-button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import LocalCatche from '@/utils/cache'
import router from '@/router';

import LoginPanel from './components/login-panel.vue';


const accountRef = ref<InstanceType<typeof LoginPanel>>()

const loginActionRef = () => {
  accountRef.value?.loginAction()
  if(LocalCatche.getCatche('token') != null) {
    router.push('/main')
  }

}



</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>
