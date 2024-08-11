<template>
  <div class="launcher">
    <div class="launcher-contenido">
      <h1>¡Bienvenido al Launcher!</h1>
      <div class="botones-container">
        <router-link to="/rick" class="boton">CARTAS RICK AND MORTY</router-link>
        <router-link to="/libre" class="boton">CARTAS DE TEMA LIBRE</router-link>
        <router-link to="/datos" class="boton">CARTAS DATOS</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LauncherPaginas'
}
</script>

<style>
/* Estilos para el Launcher */
.launcher {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100vh; /* Ajusta la altura al 100% del viewport */
}

.launcher-contenido {
  text-align: center; /* Alinea el contenido al centro */
}

  .boton {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid #0044ff;
    border-radius: 5px;
    background-color: #5e34a1;
    color: white;
    text-decoration: none; /* Para quitar el subrayado del enlace */
    cursor: pointer;
  }
  
  /* Estilos para los botones al pasar el ratón por encima */
  .boton:hover {
    background-color: #39d4cc;
    filter: brightness(1.1);
    transform: scale(1.05);
    border: 2px solid #eee8e8;
  }
  </style>