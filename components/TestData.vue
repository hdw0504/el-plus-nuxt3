<script setup lang="ts">

</script>

<template>
  <div w-100 m-x-auto>
    <el-card>
      <el-tag v-for="o in 4" :key="o" closable>
        {{ `List item ${o}` }}
      </el-tag>
    </el-card>
  </div>
</template>

<style scoped>

</style>
