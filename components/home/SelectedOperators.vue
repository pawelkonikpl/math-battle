<template>
  <v-col
    cols="12"
  >
    <span class="fs-4 text-grey">{{ $t("HOME.SELECT_OPERATIONS") }}:</span>
    <v-col
      cols="6"
      class="bg-pink elevation-4 rounded flex-row d-flex align-center justify-center "
    >
      <v-checkbox
        v-for="operator in gameStore.getAvailableOperations"
        :key="operator"
        v-model="selectedOperation"
        class="rounded d-flex align-center ma-0 pa-0"
        color="white"
        :value="operator"
        :hide-details="true"
        inline
        @change="handeOperationChange"
      >
        <template #label>
          <span class="fs-4 text-black">{{ operator }}</span>
        </template>
      </v-checkbox>
    </v-col>
  </v-col>
</template>

<script setup lang="ts">
import { useGameStore, Operator } from "~/store/game";

const selectedOperation = ref<Operator[]>([]);
const gameStore = useGameStore();
const handeOperationChange = () => {
  gameStore.updateSelectedOperators(selectedOperation.value);
};
</script>

<style scoped lang="scss">

</style>