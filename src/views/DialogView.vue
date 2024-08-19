<template>
    <div>
        <button class="ms-5 mt-5 btn-info transform-hover hover:scale-90" @click="showDialog">Show Teleport
            Dialog</button>

        <GlobalDialog ref="dialog">
            <p>Hello Teleport Componet!!</p>
        </GlobalDialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(null);
const showDialog = () => {
    dialog.value.openDialog();
}
</script>

<style lang="scss" scoped></style>