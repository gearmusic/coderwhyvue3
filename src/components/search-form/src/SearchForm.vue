<template>

  <hy-form :form-items="formItems" v-model="modelValue">
    <template #header><h1>高级搜索框</h1></template>

    <template #footer>
      <slot name="footer">

      </slot>
    </template>
  </hy-form>

</template>

<script setup lang="ts">

import HyForm, { IFormItem } from '@/base-ui'

const props = withDefaults(defineProps<{
  modelValue: any,
  formItems: Array<IFormItem>
}>(), {
  formItems: () => {
    return []
  }
})

</script>

<style lang="less" scoped>

</style>
