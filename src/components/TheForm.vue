<template>
    <div class="wrap items-center">
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <form class="">
            <slot></slot>
            <div class="space-x-2 w-full mt-3">
                <button type="submit" class="btn-primary">送出</button>
                <button type="reset" class="btn-secondary">重設</button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>