<template>
  <div class="navi-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :index="index">
        <el-breadcrumb-item v-if="item.to" :to="{ path: item.to }">
          {{ item.text }}
        </el-breadcrumb-item>

        <el-breadcrumb-item v-else>
          {{ item.text }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">

import type { IBreadcrumb } from '../types'

const props = defineProps<{
  breadcrumbs: Array<IBreadcrumb>
}>()

</script>

<style lang="less" scoped>

</style>
