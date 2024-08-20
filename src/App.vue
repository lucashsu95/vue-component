<template>
  <div class="wraps flex-col">
    <TheNav />
    <keep-alive>
      <component :is="currentView" />
    </keep-alive>
  </div>
</template>

<script setup>
import TheNav from "./components/TheNav.vue";
import { currentView } from "./router";
</script>