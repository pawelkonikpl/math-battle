<template>
  <v-container>
    <v-row class="ml-auto">
      <Counter />
    </v-row>
    <v-row class="mt-5">
      <SelectedOperators />
      <OperationNumberScope @numberChange="handleNumberChange"/>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-form ref="form">
          <ActionField
            v-for="index in 10"
            :key="index"
            operator="+"
            :max-number="maxNumber"
          />
        </v-form>
        <v-btn
          color="pink"
        >
          <span class="font-weight-bold">{{ $t("VERIFY") }}</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import ActionField from "~/components/home/ActionField.vue";
import Counter from "~/components/shared/Counter.vue";
import SelectedOperators from "~/components/home/SelectedOperators.vue";
import OperationNumberScope from "~/components/home/OperationNumberScope.vue";
const maxNumber = ref(10000)

const handleNumberChange = (value: number) => {
  console.log('value change', value)
  maxNumber.value = value
}
</script>