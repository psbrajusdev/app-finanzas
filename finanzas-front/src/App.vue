<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <headerComponent></headerComponent>
  <!--si la siguiente instruccion no funciona el router-->
  <router-view></router-view>
</template>

<style scoped></style>
