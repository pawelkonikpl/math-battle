<template>
  <v-toolbar
    density="compact"
    color="pink"
  >
    <v-app-bar-nav-icon />
    <v-toolbar-title>{{ $t("DEFAULT.HEADER.TITLE") }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon :icon="mdiMagnifyIcon" />
    </v-btn>

    <v-btn icon>
      <v-icon :icon="mdiAccountIcon" />
    </v-btn>

    <v-btn icon>
      <v-icon :icon="mdiDotsVerticalIcon" />
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
import { mdiAccountCircle, mdiDotsVertical, mdiMagnify } from "@mdi/js";

const mdiDotsVerticalIcon = mdiDotsVertical;
const mdiMagnifyIcon = mdiMagnify;
const mdiAccountIcon = mdiAccountCircle;
</script>

<style scoped lang="scss">

</style>