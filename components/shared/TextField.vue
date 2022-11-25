<template>
  <v-text-field
    v-model="value"
    bg-color="white"
    variant="solo"
    single-line
    density="comfortable"
    :counter="false"
    hide-details
  />
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue?: string | number }>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});

</script>
