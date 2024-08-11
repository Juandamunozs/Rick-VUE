<template>
   <router-link to="/" class="boton">Launcher</router-link>
   <router-link to="/rick" class="boton">Rick and Morty cards</router-link>
   <router-link to="/datos" class="boton">Me card</router-link>
   <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <div class="cartas-container">
      <div class="carta" v-for="Animal in Animales" :key="Animal.id">
        <h3 class="titulo" >{{ Animal.nombre }}</h3>
        <img :src="Animal.imagen" :alt="Animal.nombre" class="imagen-animal">
        <p>Especie: {{ Animal.especie }}</p>
        <p>Extinto: {{ Animal.extinto }}</p>
        <p>Peso (kg): {{ Animal.peso }}</p>
        <p>Altura (cm): {{ Animal.altura }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Animales from "../assets/libre.json";

export default {
  name: "DatosTemaLibre",
  computed: {
    Animales() {
      return Animales.map(Animal => {
        return Animal;
      });
    }
  },
  data() {
    return {
      titulo: "Cartas Tema libre"
    };
  }
};
</script>

<style scoped>
.titulo {
  text-align: center; 
  margin-bottom: 20px;
}

.imagen-animal {
  width: 394px;
  height: 250px; 
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
  border: 5px solid rgb(120, 17, 236);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #83b1ee;
  height: 200px;
  width: 200px;
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
  margin: 20px auto;
  }
</style>