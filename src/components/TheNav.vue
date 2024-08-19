<template>
    <div>
        <nav class="navbar">
            <button v-for="nav in navs" :key="nav.path" @click="navigateTo(nav.path)"
                :class="currentPath === nav.path ? 'btn-primary' : 'btn-secondary'">
                {{ nav.name }}
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { paths, currentPath, navigateTo } from "@/router/index";
const navs = ref([
    {
        path: paths.home,
        name: '首頁',
    },
    {
        path: paths.studentList,
        name: '學生列表',
    },
    {
        path: paths.loginView,
        name: '表單',
    },
])
</script>

<style lang="scss" scoped></style>