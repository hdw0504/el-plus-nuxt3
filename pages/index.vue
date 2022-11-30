<script lang="ts" setup>
</script>

<template>
  <div class="box" m-t-10>
    <div>
      <p>Theme Switch</p>
      <Theme inline />
    </div>
    <div>
      <p>Iconify Icons</p>
      <i-ep-eleme inline />
      <i-ep-element-plus inline />
      <p>custom icons (assets/icons/xxx)</p>
      <i-icons-test inline />
    </div>
    <div>
      <p>Basic Component (click me)</p>
      <TestBasic />
    </div>
    <div>
      <p>Form Component</p>
      <TestForm />
    </div>
    <div>
      <p>Data Component</p>
      <TestData />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box>div>p{
  --at-apply: m-y-2;
}
</style>
