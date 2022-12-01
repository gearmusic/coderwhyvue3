<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleClick"><Expand v-if="isFold" /><Fold v-else /></el-icon>
    <div class="content">
      <div>
        <hy-breadcrumb :breadcrumbs="breadCrumds" />
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            下拉菜单
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleExit"><el-icon><CircleClose /></el-icon>退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import localCatche from '@/utils/cache'

import {
  Fold, Expand,
  CircleClose
} from '@element-plus/icons-vue'

import { HyBreadcrumb } from '@/base-ui'
import { pathToBreadcrumb } from '@/utils/map-menus'

const emit= defineEmits<{
  (e: 'foldClick', isFold: boolean): void,

}>()

const isFold = ref(false)

const breadCrumds = computed(() => {
  return pathToBreadcrumb()
})


const handleClick = () => {
  isFold.value = !isFold.value
  emit('foldClick', isFold.value)
}

const router = useRouter()

const handleExit = () => {
  localCatche.deleteCatch('token')
  router.push('/login')
}

</script>

<style lang="less" scoped>
.nav-header {
  display: flex;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 1px;

  }
}

</style>
