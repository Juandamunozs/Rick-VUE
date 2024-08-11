<template>
  <div class = "Header">
<h1>Mi pagina Vue</h1>
  </div>

  <div class ="Main">
    <!-- Componente para renderizar las vistas de las rutas -->
    <router-view></router-view>
  </div>

  <div class = "Footer">
    <a href="https://www.instagram.com/juandamunozs/" class="boton" target="_blank">ig: @juandamunozs</a>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.Header{
  text-align: center;
  background-color: rgb(48, 131, 199);
  color: aliceblue;
  border: 3px solid rgb(251, 250, 253);
  
}
.Main{
background-color: rgb(164, 199, 209);
color: rgb(20, 17, 1);
}
.Footer{
  text-align: center;
  background-color: rgb(48, 131, 199);
  color: aliceblue;
  border: 3px solid rgb(255, 255, 255);
}
</style>