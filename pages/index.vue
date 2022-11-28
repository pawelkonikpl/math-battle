<template>
  <v-row class="bg-white rounded ">
    <SelectedOperators />
    <OperationNumberScope />
    <v-col cols="12">
      <NuxtLink to="/game">
        <v-btn
          color="pink"
        >
          {{ $t("HOME.START_GAME") }}
        </v-btn>
      </NuxtLink>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import SelectedOperators from "~/components/home/SelectedOperators.vue";
import OperationNumberScope from "~/components/home/OperationNumberScope.vue";</script>