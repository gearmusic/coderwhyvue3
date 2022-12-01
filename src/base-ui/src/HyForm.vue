<template>

  <el-form class="search-panel" v-model="modelValue">

    <div class="header">
      <slot name="header"></slot>
    </div>

    <el-row>
      <el-col :span="span"  v-for="(item, index) in formItems" :key="index">
        <el-form-item
          v-if="!item.hidden"
         :label="item.label"
        >
          <template v-if="item.type === InputType.input || item.type === InputType.password">
            <el-input
              :type="item.type ===  InputType.password ? 'password' : 'input'" :show-password="item.type ===  InputType.password"
              v-model="modelValue[`${ item.field }`]"
              />
          </template>
          <template v-else-if="item.type === InputType.select">
            <el-select
              v-model="modelValue[`${ item.field }`]"
              >
              <el-option v-for="(subItem, index) in item.options" :label="subItem.label" :value="subItem.value" />
            </el-select>
          </template>
          <template v-else-if="item.type === InputType.datePicker">
            <el-date-picker
              v-model="modelValue[`${ item.field }`]"
              v-bind="item.otherOptions"
            />
          </template>
        </el-form-item>
      </el-col>
    </el-row>

    <div class="footer">
      <slot name="footer">

      </slot>
    </div>

  </el-form>

</template>

<script setup lang="ts">

import { InputType } from '@/base-ui'
import type { IFormItem } from '@/base-ui'

const props = withDefaults(defineProps<{
  modelValue: any,
  formItems: Array<IFormItem>,
  span: number,
}>(), {
  formItems: () => {
    return []
  },
  span: () => {
    return 8
  },
})



</script>

<style lang="less" scoped>

</style>
