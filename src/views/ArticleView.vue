<template>
  <div class="w-8/12">
    <div class="wrap min-h-screen">
      <h1 class="text-4xl font-bold mb-3">Hello</h1>
      <p class="text-xl mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, deserunt exercitationem vel
        saepe officiis unde velit mollitia sunt fugit, id voluptate quas alias est quidem
        consectetur hic aliquam doloribus libero?
      </p>
      <TheMouse class="mt-10" tag="about" />
    </div>
    <div class="wrap min-h-screen">
      <h1 class="text-4xl font-bold mb-3" id="about">About</h1>
      <p class="text-xl mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, deserunt exercitationem vel
        saepe officiis unde velit mollitia sunt fugit, id voluptate quas alias est quidem
        consectetur hic aliquam doloribus libero?
      </p>
    </div>
  </div>
</template>

<script setup>
import TheMouse from '@/components/TheMouse.vue'
</script>

<style lang="scss" scoped>
.wrap {
  @apply border-0 shadow-none rounded-none justify-center;
}
</style>
