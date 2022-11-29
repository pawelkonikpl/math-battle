<template>
  <v-form ref="formRefs">
    <v-row class="bg-white rounded ">
      <SelectedOperators />
      <OperationNumberScope />
      <v-col cols="12">
        <v-btn
          color="pink"
          @click="validate"
        >
          {{ $t("HOME.START_GAME") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup lang="ts">
import SelectedOperators from "~/components/home/SelectedOperators.vue";
import OperationNumberScope from "~/components/home/OperationNumberScope.vue";
import { useRouter } from "#imports";
const router = useRouter();
const formRefs = ref<HTMLFormElement>();

const validate = async () => {
  const { valid } = await formRefs?.value?.validate();
  if( valid) {
    await router.push("/game");
  }
};
</script>