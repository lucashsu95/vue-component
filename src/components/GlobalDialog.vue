<template>
    <Teleport to="body">
        <div v-if="isVisible" class="dialog-overlay">
            <div>
                <slot></slot>
                <button @click="closeDialog">Close</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(false);
const openDialog = () => {
    isVisible.value = true;
}

const closeDialog = () => {
    isVisible.value = false;
}

defineExpose({
    openDialog,
    closeDialog,
    isVisible
})

</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    >div {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
    }

    button {
        margin-top: 15px;
        padding: 8px 16px;
        background-color: $color1;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: darken($color1, 10%);
        }
    }
}
</style>