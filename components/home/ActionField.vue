<template>
  <ClientOnly>
    <v-row class="action-field align-center justify-center text-center bg-amber-accent-2 rounded mb-6">
      <v-col cols="2">
        <span class="text-h2">{{ aParam }}</span>
      </v-col>
      <v-col cols="1">
        <span class="text-h2">{{ props.operator }}</span>
      </v-col>
      <v-col cols="2">
        <span class="text-h2">{{ bParam }}</span>
      </v-col>
      <v-col cols="1">
        <span class="text-h2">=</span>
      </v-col>
      <v-col cols="2">
        <TextField
          v-model="model"
        />
      </v-col>
      <v-col cols="1">
        <v-icon
          v-if="validateResult()"
          :icon="accountIcon"
          color="green"
        />
        <v-icon
          v-if="res && !validateResult()"
          :icon="accountIcon"
          color="red"
        />
      </v-col>
    </v-row>
  </ClientOnly>
</template>
<script setup lang="ts">
import { computed, ref } from "#imports";
import { mdiCheckCircleOutline } from "@mdi/js";
import TextField from "~/components/shared/TextField.vue";

const accountIcon = mdiCheckCircleOutline;
const props = defineProps<{ operator: string, maxNumber: number }>();
const maxNumber = ref(props.maxNumber)
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
let res = ref(null);
const aParam = ref<number>(0);
const bParam = ref<number>(0);
const model = computed({
  get() {
    return res.value;
  },
  set(value) {
    res.value = value;
  }
});
type OperationResult = {
  a: number,
  b: number,
  result: number
}
const divider = (number: number): number[] => {
  const dividers = [];
  let counter = 1;

  for (counter; counter <= number; counter++) {
    if (number % counter == 0) {
      dividers.push(counter);
    }
  }
  return dividers;
}
const additionOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber)
  const b = getRandomInt(maxNumber - a + 1)
  return { a, b, result: a + b }
}
const subtractionOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber)
  const b = getRandomInt(maxNumber - a + 1)
  return { a, b, result: a - b }
}
const multiplicationOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber)
  const b = getRandomInt(maxNumber - a + 1)
  return { a, b, result: a * b }
}
const divisionOperation = (maxNumber: number): OperationResult => {
  let a = getRandomInt(maxNumber);
  const dividers = divider(a)
  if(!dividers.length) {
    return divisionOperation(maxNumber)
  }
  const index = getRandomInt(dividers.length)
  const b = dividers[index]
  return { a, b, result: a / b }
}
type Operation = (maxNumber: number) => OperationResult;
const operations: Record<string, Operation> = {
  "+": additionOperation,
  "-": subtractionOperation,
  "*": multiplicationOperation,
  ":": divisionOperation,
}
const { a, b, result } = operations[props.operator](maxNumber.value)
aParam.value = a
bParam.value = b

const validateResult = () => {
  return Number(model.value) === result;
};
</script>
<style scoped>
span {
  font-family: 'Patrick Hand', cursive !important;
}
</style>