<!-- 
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const ingresos = ref([]);

// cargar ingresos al montar la vista
onMounted(async () => {
  const res = await axios.get("http://localhost:3000/api/ingresos");
  ingresos.value = res.data;
});
</script>

<template>
  <div>
    <h2>Tabla de Ingresos</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Monto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ingreso in ingresos" :key="ingreso.id">
          <td>{{ ingreso.id }}</td>
          <td>{{ ingreso.descripcion }}</td>
          <td>{{ ingreso.monto }}</td>
          <td>{{ ingreso.fecha }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> -->

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const ingresos = ref([]);
const descripcion = ref("");
const monto = ref("");
const fecha = ref("");

// cargar ingresos al montar
const cargarIngresos = async () => {
  const res = await axios.get("http://localhost:3000/api/ingresos");
  ingresos.value = res.data;
};

onMounted(cargarIngresos);

// enviar nuevo ingreso
const agregarIngreso = async () => {
  if (!descripcion.value || !monto.value || !fecha.value) {
    alert("Completa todos los campos");
    return;
  }

  await axios.post("http://localhost:3000/api/ingresos", {
    descripcion: descripcion.value,
    monto: monto.value,
    fecha: fecha.value,
  });

  // limpiar form
  descripcion.value = "";
  monto.value = "";
  fecha.value = "";

  // recargar tabla
  await cargarIngresos();
};
</script>

<template>
  <div>
    <h2>Nuevo Ingreso</h2>
    <form @submit.prevent="agregarIngreso">
      <input v-model="descripcion" type="text" placeholder="Descripción" />
      <input v-model="monto" type="number" step="0.01" placeholder="Monto" />
      <input v-model="fecha" type="date" />
      <button type="submit">Agregar</button>
    </form>

    <h2>Tabla de Ingresos</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Monto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ingreso in ingresos" :key="ingreso.id">
          <td>{{ ingreso.id }}</td>
          <td>{{ ingreso.descripcion }}</td>
          <td>{{ ingreso.monto }}</td>
          <td>{{ ingreso.fecha }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
