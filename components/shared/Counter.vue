<template>
  <span class="d-inline-block counter bg-white px-4 py-2 rounded text-green">
    {{ parMinutes }} : {{ parSeconds }}
  </span>
</template>

<script setup lang="ts">
const minutes = ref(0);
const seconds = ref(0);
const parMinutes = computed(() => {
  return minutes.value < 9 ? "0" + minutes.value : minutes.value;
});
const parSeconds = computed(() => {
  return seconds.value < 9 ? "0" + seconds.value : seconds.value;
});
setInterval(() => {
  seconds.value += 1;
  if (seconds.value >= 60) {
    minutes.value++;
    seconds.value = 0;
  }
}, 1000);

</script>

<style scoped lang="scss">
.counter {
  font-size: 20px;
}
</style>