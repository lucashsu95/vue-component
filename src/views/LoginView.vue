<template>
    <TheForm @submit.prevent="handleSubmit">
        <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" class="peer focus:ring-primary input" />
            <p class="mt-1 invisible peer-invalid:visible text-danger text-sm">
                Please provide a valid email address.
            </p>
        </label>
        <label class="block">
            <span class="block text-sm font-medium text-slate-700">Password</span>
            <input type="text" class="focus:ring-primary input" />
        </label>
    </TheForm>
</template>

<script setup>
import TheForm from '@/components/TheForm.vue';
const handleSubmit = () => {
    alert('submit');
}
</script>

<style lang="scss" scoped></style>