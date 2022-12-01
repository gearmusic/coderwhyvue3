<template>
  <div class="navi-menu">
    <div class="logo">
      <img class="img" src="~@/assets/vue.svg" />
      <span class="title">
        Vue3 + TS
      </span>

    </div>

    <div class="menu">

      <el-menu
        default-active="2"
        class="el-menu-vertical"
        :collapse="collapse"
        :collapse-transition="false"
        :router="true"
        >

        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>

          <el-menu-item index="/main/user">用户管理</el-menu-item>
          <el-menu-item index="/main/role">角色管理</el-menu-item>
          <el-menu-item index="/main/menu">菜单管理</el-menu-item>

        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>业务管理</span>
          </template>

          <el-menu-item index="/main/goods">商品管理</el-menu-item>


        </el-sub-menu>

      </el-menu>

    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  collapse: boolean
}>()

</script>

<style lang="less" scoped>
.navi-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .menu {
    clear: both;
    width:100%;
  }
}
</style>
