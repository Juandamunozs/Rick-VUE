<template>
  <router-link to="/" class="boton">Launcher</router-link>
  <router-link to="/libre" class="boton">Animals cards</router-link>
  <router-link to="/datos" class="boton">Me card</router-link>
  <div class="container">
    <h1 class="titulo">{{ datos }}</h1>
    <div class="cartas-container">
      <div class="carta" v-for="item in items" :key="item.id" @click="abrirHTML(item)">
        <h3> {{ item.name }} </h3>
        <img :src="item.image" alt="">
        <p> {{ "Especie: " + item.species }} </p>
        <p> {{ "Estado: " + item.status }} </p>
        <p> {{ "Género: " + item.gender }} </p>
        <p> {{ "Origen: " + item.origin.name }} </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from '@/axios';

const datos = ref("");
const items = ref("");

const valoresRick = async () => {
  try {
    const response = await axios.get('/character/');
    items.value = response.data.results;
    console.log(items.value);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

onBeforeMount(() => {
  datos.value = "Cartas Rick and Morty";
  valoresRick();
})

const abrirHTML = (item) => {
  const ventanaNueva = window.open('', '_blank');
  ventanaNueva.document.write(`
    <h1>${item.name}</h1>
    <h2>Episodios en los que aparece:</h2>
    <ul>
      ${item.episode.map(episodio => `<li>${episodio}</li>`).join('')}
    </ul>
  `);
}
</script>

<style scoped>
.container {
  text-align: center;
}

.titulo {
  margin-bottom: 20px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.carta {
  height: 250px;
  width: 250px;
  border: 5px solid rgb(120, 17, 236);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #83b1ee;
  display: inline-table;
}


.carta:hover {
  filter: brightness(1.1);
  transform: scale(1.05);
  border: 2px solid #eee8e8;
}
.boton {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid #4254b9;
    border-radius: 5px;
    background-color: #4279b9;
    color: white;
    text-decoration: none; /* Para quitar el subrayado del enlace */
    cursor: pointer;
  }
  
  /* Estilos para los botones al pasar el ratón por encima */
  .boton:hover {
    background-color: #3948d4;
    filter: brightness(1.1);
    transform: scale(1.05);
    border: 2px solid #eee8e8;
  }
  .cartas-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  }
</style>