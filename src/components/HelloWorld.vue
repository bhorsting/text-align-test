<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <div class="root">
  <div class="test-div">
    TEST
  </div>
  </div>
</template>

<style scoped>
.test-div {
  position:absolute;
  top:100px;
  left:100px;
  color: white;
  font-size: 100px;
  font-family: Herokid;
}
</style>
