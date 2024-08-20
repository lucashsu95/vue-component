<template>
  <div class="w-[400px]">
    <div
      v-for="student in students"
      :key="student.name"
      class="bg-slate-100 p-4 rounded-lg w-max flex items-center space-x-3 m-5 group/item transform-300 hover:translate-x-2"
    >
      <img src="@/assets/53-global-icon.png" alt="" class="w-10 h-10" />
      <h1 class="text-2xl font-bold">{{ student.name }}</h1>
      <h2>{{ student.age }}age</h2>
      <div class="group-hover/item:block group/edit hidden">
        <button class="btn-warning p-1 flex items-center">
          <div class="group-hover/edit:mr-5 mr-2 transition-all duration-300">Call Dialog</div>
          <div class="mr-2">&gt;</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
  { name: 'John', age: 20, score: 80 },
  { name: 'Jane', age: 21, score: 90 },
  { name: 'Doe', age: 22, score: 85 }
])
</script>

<style lang="scss" scoped></style>
