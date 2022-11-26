<template>
  <v-app>
    <ToolBar />
    <slot />
  </v-app>
</template>
<script setup>
import ToolBar from "~/components/nav/ToolBar.vue";
</script>