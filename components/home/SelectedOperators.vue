<template>
  <v-col cols="12" class="ma-0 pa-0">
      <span class="fs-4">{{ $t("HOME.SELECT_OPERATIONS") }}:</span>
      <div class="rounded">
        <v-col cols="6" class="bg-red rounded">
          <div class="flex-row d-flex align-center justify-center ">
            <v-checkbox
                v-for="operator in ['+', '-', '*', ':']"
                :key="operator"
                v-model="selectedOperation"
                class="rounded d-flex align-center"
                color="white"
                :value="operator"
                :hide-details="true"
                @change="handeOperationChange"
                inline
            >
              <template v-slot:label>
                <span class="fs-4 text-black">{{ operator }}</span>
              </template>
            </v-checkbox>
          </div>
        </v-col>

      </div>
  </v-col>
</template>

<script setup lang="ts">
const selectedOperation = ref<string[]>([])
const emits = defineEmits(['operationChange'])
const handeOperationChange = (event) => {
  emits('operationChange', selectedOperation.value)
  console.log('CHANGE', selectedOperation.value, event)
}
</script>

<style scoped lang="scss">

</style>