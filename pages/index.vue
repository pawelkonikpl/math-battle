<template>
    <v-row class="ml-auto ma-0 pa-0">
      <Counter />
    </v-row>
    <v-row class="mt-5">
        <SelectedOperators />
        <OperationNumberScope @number-change="handleNumberChange" />
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-form ref="form">
          <ActionField
            v-for="index in 10"
            :key="index"
            operators="+"
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
</template>
<script setup lang="ts">
import ActionField from "~/components/home/ActionField.vue";
import Counter from "~/components/shared/Counter.vue";
import SelectedOperators from "~/components/home/SelectedOperators.vue";
import OperationNumberScope from "~/components/home/OperationNumberScope.vue";
const maxNumber = ref(10000)

const handleNumberChange = (value: number) => {
  maxNumber.value = value
}
</script>