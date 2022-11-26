<template>
  <div class="rounded bg-white">
    <span>{{ $t("HOME.SELECT_OPERATIONS") }}:</span>
    <div class="bg-red rounded">
      <div class="flex-row d-flex align-center justify-center">
        <v-checkbox
          v-for="operator in ['+', '-', '*', ':']"
          :key="operator"
          v-model="selectedOperation"
          class="rounded"
          color="pink"
          :label="operator"
          :value="operator"
          :hide-details="true"
          inline
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedOperation = ref<string[]>([])

</script>

<style scoped lang="scss">

</style>