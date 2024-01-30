<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">My App</RouterLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/books">Books</RouterLink>
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/users">Users</RouterLink>
        </li> -->
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/anggota">Anggota</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/transaksi">Transaksi</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/login">Login</RouterLink>
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