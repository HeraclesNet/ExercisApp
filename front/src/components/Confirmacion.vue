<template>
<div id="confirmation">
  <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Felicitaciones"
      md-description="Su cuenta ha sido creada apropiadamente">
    </md-empty-state>
    <md-button id="perfil" class="md-accent" :to="{name:'User'}">Ir al Perfil</md-button>
</div>
</template>
<style>
#perfil {
  display: flex;
  background-color: #fff;
  justify-content: center;
  width: 10%;
}
</style>
