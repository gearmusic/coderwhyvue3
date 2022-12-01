<template>
  <div class="add-dialog">
    <el-dialog
      v-model="visible"
      title="Tips"
      width="30%"
      @close="handleClose"
    >
      <hy-form
        :form-items="formItems"
        v-model="modelValue"
        :span="24"
        >
      </hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">退出</el-button>
          <el-button type="primary" @click="handleConfirm">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import HyForm, { IFormItem } from '@/base-ui'
import useSystemStore from '@/store/system/system'

const props = defineProps<{
  pageName: string,
  modelValue: any,
  formItems: Array<IFormItem>,
  otherValue?: any
}>()

const visible = ref(false)

const systemStore = useSystemStore()

const handleClose = () => {
  visible.value = false
}

const handleConfirm = () => {
  console.log(props.otherValue)
  console.log({ ...props.modelValue, ...props.otherValue })
  if(props.modelValue.id) {
    if(props.pageName === 'role') {
      systemStore.updatePageData(props.pageName, { ...props.modelValue, ...props.otherValue }, props.modelValue.id)
    } else {
      console.log('这个模块的修改API被关闭了!')
    }
  } else {
    systemStore.createPageData(props.pageName, { ...props.modelValue, ...props.otherValue })
  }

  visible.value = false
}

defineExpose({ visible })

</script>

<style style="less" scoped>

</style>
