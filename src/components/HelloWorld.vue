<script setup lang="ts">

import {onMounted, ref} from "vue";

defineProps<{ msg: string }>()
const txt = ref<HTMLSpanElement | null>(null);

onMounted(() => {
  console.log(txt.value!.getBoundingClientRect());
})


</script>

<template>
  <div class="root">
    <div class="test-div">
    <span>
      <span class="inner-text" ref="txt">TEST</span>
    </span>
    </div>


    <div class="test-div2">
    <span>
      <span class="inner-text" ref="txt">TEST</span>
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
  //-webkit-text-stroke: 0px rgba(0, 0, 0, 0);
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
  text-box-edge: ideographic-ink;
  text-box-trim: both;
}

.test-div2 {
  position: absolute;
  transform: translateX(208px) translateY(291px) rotate(0deg) scale(1) skewX(0deg) skewY(0deg);
  width: 514px;
  height: 62px;
  font-size: 55px;
  font-family: Herokid;
  text-box-edge: ideographic-ink;
  text-box-trim: both;
}


.inner-text {
  background-image: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  overflow-wrap: break-word;
  text-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
}
</style>
