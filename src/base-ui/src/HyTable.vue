<template>
  <div class="hy-table">

    <div class="header">
      <el-row>
        <el-col :span="4">{{ title }}</el-col>
        <el-col :span="16"></el-col>
        <el-col class="buttons" :span="4" >
          <slot name="header_handler"></slot>
        </el-col>
      </el-row>
    </div>

    <el-table
      :data="data"
      :border="true"
      style="width: 100%"
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
      >

      <el-table-column
          v-if="showSelection"
          width="60"
          align="center"
          type="selection">
      </el-table-column>

      <template v-for="propItem in propList" :index="propItem.prop">
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>

    </el-table>

    <div v-if="showFooter" class="hy-footer">
      <slot name="footer"></slot>
    </div>

  </div>

</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  data: Array<any>,
  propList: any,
  showSelection: Boolean,
  showFooter: Boolean,
  title: String,
  childrenProps: Object
}>(), {
  title: ()=> {
    return ''
  },
  showSelection: () => {
    return false
  },
  showFooter: () => {
    return true
  },
  childrenProps: () => {
    return {}
  }
})

const emit= defineEmits<{
  (e: 'selectionChange', value: any): void
}>()

const handleSelectionChange = (val: any) => {
  emit('selectionChange', val)
}

</script>

<style lang="less" scoped>
.hy-table {
  padding: 10px;

  background-color: #fff;

  .header {
    margin: 10px 0;
  }

  .hy-footer {
    background-color: #fff;
  }


}


</style>
