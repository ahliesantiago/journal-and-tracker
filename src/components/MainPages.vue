<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="text-blue-400 flex justify-around">
      <RouterLink to="/">Home</RouterLink>
      <div>Dashboard</div>
      <div>Today</div>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>