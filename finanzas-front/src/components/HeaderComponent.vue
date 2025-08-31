<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/">Balance</RouterLink>
    <RouterLink :to="{ name: 'Ingresos' }">Ingresos</RouterLink>
    <RouterLink :to="{ name: 'Gastos' }">Gastos</RouterLink>
    <RouterLink :to="{ name: 'Creditos' }">Creditos</RouterLink>
    <RouterLink :to="{ name: 'Deudas' }">Deudas</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #222;
  padding: 1rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-sizing: border-box;
}

.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a:hover {
  color: #1abc9c;
}
</style>
