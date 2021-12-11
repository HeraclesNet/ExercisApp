<template>
  <div class="Welcome">
    <div v-resize-text="{minFontSize: '25px', maxFontSize: '60px'}">Bienvenidos a Appxercise</div>
    <div v-resize-text="{minFontSize: '7px', maxFontSize: '25px'}">Lider en contenido para ejercicio fisico personal</div>
 </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
.Welcome{
  line-height: 20px;
}
div:not(:last-child) {
  margin-top: 20px;
  margin-bottom: 40px
}
</style>
