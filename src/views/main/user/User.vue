<template>

  <el-container>

    <el-header style="height:150px;">
      <page-search
        :search-form-config="searchFormConfig"
        @search-click="searchClick"
        @reset-click="resetClick"
        >
      </page-search>

    </el-header>

    <el-main>

      <page-content
        ref="pageContentRef"
        page-name="users"
        :content-table-config="contentTableConfig"
        @add-click="addClick"
        @edit-click="editClick"
        >
      </page-content>

    </el-main>

    <page-add
      ref="pageAddRef"
      page-name="users"
      :form-items="addFormConfigRef"
      v-model="formData"
      >
    </page-add>
  </el-container>

</template>

<script setup lang="ts">
import { computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageAdd from '@/components/page-add'

import searchFormConfig from './config/search-form-config'
import contentTableConfig from './config/content-table.config'
import addFormConfig from './config/add-form.config'

import usePageSearch from '@/hooks/usePageSearch'
import usePageAdd from '@/hooks/usePageAdd'

import useSystemStore from '@/store/system/system'

const { pageContentRef, searchClick, resetClick } = usePageSearch()

const addCallback = () => {
  const passwordItem = addFormConfig.find(m => m.field === 'password')
  passwordItem!.hidden = false
}

const editCallback = () => {
  const passwordItem = addFormConfig.find(m => m.field === 'password')
  passwordItem!.hidden = true
}

const addFormConfigRef = computed(() => {
  const systemStore = useSystemStore()
  addFormConfig.find(m => m.field === 'departmentId')!.options = systemStore.EntireDeptSelections
  addFormConfig.find(m => m.field === 'roleId')!.options = systemStore.EntireRoleSelections
  return addFormConfig
})

const { pageAddRef, formData, addClick, editClick } = usePageAdd(addCallback, editCallback)

</script>

<style lang="less" scoped>

</style>
