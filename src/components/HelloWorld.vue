<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <div class="root">
  <div class="test-div">
    <span>
      <span class="inner-text">TEST</span>
    </span>
  </div>
    <div class="test-div2">
    <span>
      <span class="inner-text">TEST</span>
    </span>
    </div>
  </div>
</template>

<style scoped>
.test-div {
  position: absolute;
  transform: translateX(208px) translateY(291px) rotate(0deg) scale(1) skewX(0deg) skewY(0deg);
  width: 514px;
  height: 62px;
  display: flex;
  opacity: 1;
  visibility: visible;
  white-space: pre-wrap;
  -webkit-text-stroke: 0px rgba(0, 0, 0, 0);
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0px;
  overflow-wrap: break-word;
  justify-content: center;
  text-align: center;
  color: rgb(3, 93, 167);
  text-decoration: none rgb(3, 93, 167);
  line-height: 0;
  font-size: 55px;
  pointer-events: auto;
  align-items: center;
  font-family: Herokid;
}

.test-div2 {
  position: absolute;
  //transform: translateX(208px) translateY(291px) rotate(0deg) scale(1) skewX(0deg) skewY(0deg);
  top: 291px;
  left: 208px;
  width: 514px;
  height: 62px;
  display: flex;
  opacity: 1;
  visibility: visible;
  white-space: pre-wrap;
  -webkit-text-stroke: 0px rgba(0, 0, 0, 0);
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0px;
  overflow-wrap: break-word;
  justify-content: center;
  text-align: center;
  color: rgb(3, 93, 167);
  text-decoration: none rgb(3, 93, 167);
  line-height: 0;
  font-size: 55px;
  pointer-events: auto;
  align-items: center;
  font-family: Herokid;
}

.inner-text {
  background-image: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  overflow-wrap: break-word;
  text-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
}
</style>
