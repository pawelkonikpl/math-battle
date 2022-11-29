<template>
  <v-row>
    <Counter />
  </v-row>
  <v-row v-if="validateNumber()">
    <v-col cols="12">
      <v-form ref="form">
        <ActionField
          v-for="index in 10"
          :key="index"
          :operators="gameStore.getSelectedOperations"
          :max-number="gameStore.maxNumber"
        />
      </v-form>
      <v-btn
        color="pink"
        to="/"
      >
        <span class="font-weight-bold">Nowa gra</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ActionField from "~/components/home/ActionField.vue";
import Counter from "~/components/shared/Counter.vue";
import { useGameStore } from "~/store/game";
import { useRouter } from "#imports";
const gameStore = useGameStore();
const router = useRouter();

const validateNumber = () =>{
  if(!gameStore.maxNumber) {
    router.push("/");
  }
  return true;
};
</script>

<style scoped lang="scss">

</style>