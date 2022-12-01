<template>
  <content-table
    :config="contentTableConfig"
    :data="systemStore.PagedList"
    :total-count="systemStore.TotalCount"
    :current-page="systemStore.CurrentPage"
    :pageSize="systemStore.PageSize"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @delete-data="handleDeleteClick"
    @add-data="handleAddClick"
    @edit-click="handleEditClick"
    >

    <template
      v-for="item in otherPropSlotsReactive"
      :key="item.prop"
      v-slot:[item.slotName!]="scope"
    >
      <slot :name="item.slotName" :row="scope.row"></slot>
    </template>
  </content-table>
</template>

<script setup lang="ts">
import { reactive, nextTick } from 'vue'

import ContentTable from '@/components/content-table'

import useSystemStore from '@/store/system/system'

import type { ITableContent } from '@/base-ui'

const props = defineProps<{
  pageName: string,
  contentTableConfig: ITableContent
}>()

const emit= defineEmits<{
  (e: 'addClick'): void,
  (e: 'editClick', data: any): void,
}>()

const systemStore = useSystemStore()

const getPageData = (searchItems?: any) => {
  systemStore.getPagedList(
    props.pageName,
    systemStore.CurrentPage,
    systemStore.PageSize,
    searchItems
    )

}

const handleCurrentChange = (current: number) => {
  systemStore.setCurrentPage(current)
  getPageData(systemStore.searchItems)
}

const handleSizeChange = (size: number) => {
  systemStore.setCurrentPage(1)
  systemStore.setPageSize(size)
  getPageData(systemStore.searchItems)
}

nextTick(() => {
  getPageData()

  //初始化数据载入地点
  systemStore.initialData()
})

defineExpose({ getPageData })

const otherPropSlots = props.contentTableConfig.propList.filter(m => {
  if(m.slotName === undefined) return false
  if(m.slotName === 'enable') return false
  if(m.slotName === 'createAt') return false
  if(m.slotName === 'updateAt') return false
  if(m.slotName === 'handler') return false

  return true
})

const otherPropSlotsReactive = reactive(otherPropSlots)

const handleDeleteClick = (id: number) => {
  systemStore.deletePageData(props.pageName, id)
}

const handleAddClick = () => {
  emit('addClick')
}

const handleEditClick = (data: any) => {
  emit('editClick', data)
}

</script>

<style lang="less" scoped>

</style>
