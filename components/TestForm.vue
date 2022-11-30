<script setup lang="ts">
const input = ref('im input')
const DatePicker = ref<[Date, Date]>([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10),
])
</script>

<template>
  <div w-100 m-x-auto flex="~ col" gap-2>
    <el-input v-model="input" placeholder="Please input" />
    <el-input v-model="input" disabled placeholder="Please input" />
    <el-date-picker
      v-model="DatePicker"
      type="datetimerange" range-separator="To"
      start-placeholder="Start date" end-placeholder="End date"
    />
  </div>
</template>

<style scoped>

</style>
