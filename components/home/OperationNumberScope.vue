<template>
  <v-col cols="6">
    <v-text-field
      v-model="value"
      :label="$t('HOME.SELECT_RANGE')"
      type="number"
      variant="solo"
      single-line
      @change="handelChange"
    />
  </v-col>
</template>

<script setup lang="ts">
import { useGameStore } from "~/store/game";

const value = ref(null);
const gameStore = useGameStore();
const handelChange = () => {
  gameStore.updateMaxNumber(Number(value.value));
};
</script>

<style scoped lang="scss">

</style>