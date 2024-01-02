<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1 class="header">This is the entertainment page</h1>
    <RouterLink to="/Books">Books</RouterLink>
    <RouterLink to="/Games">Games</RouterLink>
    <RouterLink to="/Music">Music</RouterLink>
    <RouterLink to="/Shows">Shows</RouterLink>
</template>

<style scoped>
</style>