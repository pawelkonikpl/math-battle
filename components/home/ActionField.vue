<template>
  <ClientOnly>
    <v-row class="action-field text-center align-center justify-center d-flex bg-amber-accent-2 rounded mb-6">
      <v-col cols="3">
        <span class="fs-4">{{ aParam }}</span>
      </v-col>
      <v-col cols="1">
        <span class="fs-4">{{ operator }}</span>
      </v-col>
      <v-col cols="3">
        <span class="fs-4">{{ bParam }}</span>
      </v-col>
      <v-col cols="1">
        <span class="fs-4">=</span>
      </v-col>
      <v-col cols="3">
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
import { computed, ref, watch } from "#imports";
import { mdiCheckCircleOutline } from "@mdi/js";
import TextField from "~/components/shared/TextField.vue";
import { Operator } from "~/store/game";
const accountIcon = mdiCheckCircleOutline;
const props = defineProps<{ operators: Operator[], maxNumber: number }>();
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
};
const additionOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber - a + 1);
  return { a, b, result: a + b };
};
const subtractionOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber - a + 1);
  return { a, b, result: a - b };
};
const multiplicationOperation = (maxNumber: number): OperationResult => {
  const a = getRandomInt(maxNumber);
  const bNumber = Math.floor(maxNumber / a);
  const isInfinity = bNumber === Infinity;
  if (isInfinity) {
    return multiplicationOperation(maxNumber);
  }
  const b = getRandomInt(bNumber +1);
  console.log("aaaaa", isInfinity, a, b);

  return { a, b, result: a * b };
};
const divisionOperation = (maxNumber: number): OperationResult => {
  let a = getRandomInt(maxNumber);
  const dividers = divider(a);
  if(!dividers.length) {
    return divisionOperation(maxNumber);
  }
  const index = getRandomInt(dividers.length);
  const b = dividers[index];
  return { a, b, result: a / b };
};
type Operation = (maxNumber: number) => OperationResult;
const operations: Record<Operator, Operation> = {
  "+": additionOperation,
  "-": subtractionOperation,
  "*": multiplicationOperation,
  ":": divisionOperation,
};
const randomOperator = (): Operator => {
  const operatorsLength = props.operators.length;
  const index = getRandomInt(operatorsLength);
  return props.operators[index];
};
const operator = ref(randomOperator());
console.log("OPERATOR", operator.value);
let result: number;
// watch works directly on a ref
watch(() => props.maxNumber, async (newValue) => {
  let { a, b, result: res } = operations[operator.value](newValue);
  aParam.value = a;
  bParam.value = b;
  result = res;
});

let { a, b, result: resBase } = operations[operator.value](props.maxNumber);
aParam.value = a;
bParam.value = b;
result = resBase;

const validateResult = () => {
  return Number(model.value) === result;
};
</script>
<style scoped>
</style>