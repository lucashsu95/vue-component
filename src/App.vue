<template>
  <div class="wraps flex-col">
    <TheNav />
    <component :is="currentView" />
  </div>
</template>

<script setup>
import TheNav from "./components/TheNav.vue";
import { currentView } from "./router";
</script>