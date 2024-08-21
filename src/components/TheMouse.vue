<template>
  <div class="mouse-wrap">
    <a class="root-down" :href="'#' + props.tag">
      <p class="p"></p>
    </a>
  </div>
</template>

<script setup>
const props = defineProps(['tag'])
</script>

<style lang="scss" scoped>
.mouse-wrap {
  position: relative;
}

.root-down {
  display: block;
  border-radius: 100px;
  margin: auto;
  border: 1px #666 solid;
  width: 25px;
  height: 45px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.p {
  width: 3px;
  height: 8px;
  background-color: #666;
  margin: auto;
  border-radius: 100px;
  animation: down 1s infinite;
}

@keyframes down {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
