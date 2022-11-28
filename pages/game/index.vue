<template>
  <v-row>
    <Counter />
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-form ref="form">
        <ActionField
          v-for="index in 10"
          :key="index"
          operators="+"
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


</script>

<style scoped lang="scss">

</style>