<template>
  <hy-table
    v-bind="config"
    :data="data"
    >

    <template #header_handler>
      <el-button
        type="primary"
        size="small"
        @click="handleAddClick"
      >
      新增
      </el-button>
    </template>

    <template #footer>
      <el-pagination
        :page-sizes="[5, 10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        />
    </template>

    <template #enable="scope">
      <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
    </template>

    <template #createAt="scope">
      <span style="color:#090;">
        {{ $.appContext.config.globalProperties.$filters.formatTime(scope.row.createAt) }}
      </span>
    </template>

    <template #updateAt="scope">
      <span style="color:#090;">
        {{ $.appContext.config.globalProperties.$filters.formatTime(scope.row.upadteAt) }}
      </span>
    </template>

    <template #handler="scope">

      <el-button
       size="mini"
       type="text"
       @click="handleEditClick(scope.row)"
      >
        修改
      </el-button>

      <el-button size="mini" type="text" @click="handleDeleteClick(scope.row.id)">
        删除
      </el-button>

    </template>

    <template
      v-for="item in otherPropSlotsReactive"
      :key="item.prop"
      v-slot:[item.slotName!]="scope"
    >
      <slot :name="item.slotName" :row="scope.row"></slot>
    </template>

  </hy-table>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { HyTable } from '@/base-ui';

import type { ITableContent } from '@/base-ui'

const props = defineProps<{
  config: ITableContent
  data: Array<any>,
  totalCount: number,
  currentPage: number,
  pageSize: number,
}>()

const emit= defineEmits<{

  (e: 'currentChange', current: number): void,
  (e: 'sizeChange', size: number): void,
  (e: 'deleteData', size: number): void,
  (e: 'editClick', data: any): void,
  (e: 'addData'): void,
}>()

const handleCurrentChange = (currentPage: number) => {
  emit('currentChange', currentPage)
}

const handleSizeChange = (size: number) => {
  emit('sizeChange', size)
}

const otherPropSlots = props.config.propList.filter(m => {
  if(m.slotName === undefined) return false
  if(m.slotName === 'enable') return false
  if(m.slotName === 'createAt') return false
  if(m.slotName === 'updateAt') return false
  if(m.slotName === 'handler') return false

  return true
})

const otherPropSlotsReactive = reactive(otherPropSlots)

const handleDeleteClick = (id: number) => {
  emit('deleteData', id)
}

const handleAddClick = () => {
  emit('addData')
}

const handleEditClick = (row: any) => {
  emit('editClick', { ...row })
}

</script>

<style lang="less" scoped>

</style>
