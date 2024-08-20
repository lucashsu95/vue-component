<template>
  <div>
    <nav class="navbar">
      <button
        v-for="nav in navs"
        :key="nav.path"
        @click="navigateTo(nav.path)"
        :class="{
          'btn-primary': currentPath === nav.path,
          'btn-secondary': currentPath !== nav.path
        }"
      >
        {{ nav.name }}
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { paths, currentPath, navigateTo } from '@/router/index'

const navs = ref([paths.home, paths.studentList, paths.loginView])
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  margin: 0 auto;
}
</style>
