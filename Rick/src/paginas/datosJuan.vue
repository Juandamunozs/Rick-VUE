<template>
  <router-link to="/" class="boton">Launcher</router-link>
  <router-link to="/rick" class="boton">Rick and Morty cards</router-link>
  <router-link to="/libre" class="boton">Animals cards</router-link>
  <div>
   <h1 class="titulo">{{ titulo }}</h1>
    <div class="cartas-container">
      <div class="carta" v-for="dato in datos" :key="dato.id">
        <h3>Nombre: {{ dato.nombre }}</h3>
        <p>Edad: {{ dato.edad }}</p>
        <p>Identificación: {{ dato.identificacion }}</p>
        <p>Correo: {{ dato.correo }}</p>
        <p>Telefono: {{ dato.telefono }}</p>
        <p>Direccion: {{ dato.calle }}</p>
        <p>Ciudad: {{ dato.ciudad }}</p>
        <p>Nacionalidad: {{ dato.nacionalidad }}</p>
        <p>Estado civil: {{ dato.estadocivil }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../assets/datos.json";

export default {
  name: "DatosJuan",
  computed: {
    datos() {
      return datos.map(dato => {
        return dato;
      });
    }
  },
  data() {
    return {
      titulo: "Carta datos"
    };
  }
};
</script>

<style scoped>
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
    border: 5px solid rgb(120, 17, 236);
    border-radius: 30px;
    padding: 20px;
    margin-bottom: 10px;
    background-color: #83b1ee;
    height: 200px;
    width: 250px;
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
  .titulo{
    text-align: center;
    color: #000000;
  }
</style>