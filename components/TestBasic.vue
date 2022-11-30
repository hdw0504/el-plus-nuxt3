<script setup lang="ts">
function btnClick(type: 'success' | 'warning' | 'info' | 'error') {
  ElMessage({
    message: `this is a ${type} message.`,
    type,
  })
  ElNotification({
    title: type,
    message: `this is a ${type} notification.`,
    type,
  })
}
</script>

<template>
  <div>
    <el-button type="success" @click="btnClick('success')">
      Success
    </el-button>
    <el-button type="info" plain @click="btnClick('info')">
      Info
    </el-button>
    <el-button type="warning" plain round @click="btnClick('warning')">
      Warning
    </el-button>
    <el-button type="danger" round @click="btnClick('error')">
      Danger
    </el-button>
  </div>
</template>

<style scoped>

</style>
