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
        page-name="menu"
        :content-table-config="contentTableConfig"
        >

      </page-content>

    </el-main>

  </el-container>
  </template>

  <script setup lang="ts">

  import PageSearch from '@/components/page-search'
  import PageContent from '@/components/page-content'

  import searchFormConfig from './config/search-form-config'
  import contentTableConfig from './config/content-table.config'

  import usePageSearch from '@/hooks/usePageSearch'

  const { pageContentRef, searchClick, resetClick } = usePageSearch()

  </script>

  <style lang="less" scoped>

  </style>
