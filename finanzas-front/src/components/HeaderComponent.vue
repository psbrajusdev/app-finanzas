<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <!--to="/" es con el path, cuando no hay nada es la home por defecto-->
    <RouterLink to="/">Balance</RouterLink>
    <!--con :to llamo a la varibale name definida en routes.js-->
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
  display: flex; /*con esta instruccion se pone horizontal*/
  gap: 2rem;
  align-items: center;
  box-sizing: border-box;
}
</style>
