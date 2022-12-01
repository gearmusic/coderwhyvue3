<template>
  <div class="main">

    <el-container class="main-content">

      <el-aside :width="isCollapse ? '60px' : '210px'" class="content-header">
        <navi-menu :collapse="isCollapse" />
      </el-aside>

      <el-container>

        <el-header>
          <navi-header @fold-click="handleFoldClick"/>
        </el-header>

        <el-main class="content-main">
          <router-view></router-view>
        </el-main>

      </el-container>

    </el-container>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import NaviMenu from '@/components/navi-menu'
import NaviHeader from '@/components/navi-header'


const isCollapse = ref(false)

const handleFoldClick = (isFold: boolean) => {
  isCollapse.value = isFold
}

</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;

  .main-content {
    height: 100%;

    .content-main {
      background-color: #eee;
    }

  }

}
</style>
