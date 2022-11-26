<template>
  <v-app>
    <ToolBar />
      <v-container>
        <slot />
      </v-container>
  </v-app>
</template>
<script setup>
import ToolBar from "~/components/nav/ToolBar.vue";
</script>