<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="navbar-brand" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="navbar-brand" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="navbar-brand" to="/students">Students</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style>

</style>