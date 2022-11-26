<template>
  <div>
    <v-text-field
      label="Wybierz zakres"
      type="number"
      v-model="value"
      @change="handelChange"
      variant="solo"
      single-line
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(null)
const emit = defineEmits(['numberChange'])
const handelChange = () => {
  emit('numberChange', Number(value.value))
}
</script>

<style scoped lang="scss">

</style>