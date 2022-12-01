<template>
  <search-form
    :form-items="searchFormConfig"
    v-model="formData"
    >
    <template #footer>
      <el-button @click="handleResetClick">重置</el-button>
      <el-button @click="handleSearchClick">搜索</el-button>
    </template>
  </search-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchForm from '@/components/search-form'
import { IFormItem } from '@/base-ui'

const props = defineProps<{
  searchFormConfig: Array<IFormItem>,
}>()

const formData = ref({})

const emit= defineEmits<{
  (e: 'update:modelValue', newValue: any): void,
  (e: 'searchClick', formData: any): void,
  (e: 'resetClick'): void,
}>()

const handleResetClick = () => {
  //emit('update:modelValue', {})
  formData.value = {}

  emit('resetClick')
}

const handleSearchClick = () => {
  emit('searchClick', { ...formData.value })
}

</script>

<style lang="less" scoped>

</style>
