<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="home-routelink">Home</RouterLink>
        <RouterLink to="/assignments" class="assignments-routelink">Assignments</RouterLink>
        <RouterLink to="/subjects" class="subjects-routelink">Subjects</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
  .wrapper {
    text-align: center;
  }
  
  nav {
    font-size: 20px;
  }

  .home-routelink{
    position: relative;
    right: 20px;
  }
</style>
