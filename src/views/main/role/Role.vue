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
      page-name="role"
      :content-table-config="contentTableConfig"
      @add-click="addClick"
      @edit-click="editClick"
      >
    </page-content>

  </el-main>

  <page-add
      ref="pageAddRef"
      page-name="role"
      :form-items="addFormConfig"
      v-model="formData"
      :other-value="otherValue"
      >
      <template #default>
        <el-tree
          ref="elTreeRef"
          :data="systemStore.EntireMenu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
        />
      </template>
    </page-add>

</el-container>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageAdd from '@/components/page-add'

import searchFormConfig from './config/search-form-config'
import contentTableConfig from './config/content-table.config'
import addFormConfig from './config/add-form.config'

import usePageSearch from '@/hooks/usePageSearch'
import usePageAdd from '@/hooks/usePageAdd'

import useSystemStore from '@/store/system/system'

import { getMenuListLeafKeys } from '@/utils/map-menus'

const elTreeRef = ref<InstanceType<typeof ElTree>>()

const editCallback = (item: any) => {
  const leafKeys = getMenuListLeafKeys(item.menuList)

  nextTick(() => {
    elTreeRef.value!.setCheckedKeys(leafKeys, false)
  })
}

const { pageContentRef, searchClick, resetClick } = usePageSearch()

const { pageAddRef, formData, addClick, editClick } = usePageAdd(undefined, editCallback)

const systemStore = useSystemStore()

const otherValue = ref({})

const handleCheck = (tree: any, checked: any) => {
  const menuList = [...checked.checkedKeys, ...checked.halfCheckedKeys]
  otherValue.value = { menuList }
}

</script>

<style lang="less" scoped>

</style>
