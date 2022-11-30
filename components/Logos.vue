<script setup lang="ts">
</script>

<template>
  <div flex="~" gap-2 justify-center items-center>
    <img
      class="logo"
      src="https://element-plus.org/images/element-plus-logo.svg"
    >
    <i-ep-plus />
    <NuxtLogo class="logo" />
  </div>
  <h2 m-b-8>
    <el-link type="primary" target="_blank" href="https://element-plus.org/">
      Element Plus
    </el-link>
    With
    <el-link type="primary" target="_blank" href="https://nuxt.com/">
      Nuxt
    </el-link>
  </h2>
</template>

<style>
.logo {
  max-height: 3rem;
}
</style>
