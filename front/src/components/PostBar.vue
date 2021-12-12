<template>
  <div class="conf">
     <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Post</div>
          <div class="md-subhead">Esto es un comentario embebido</div>
        </md-card-header>
        
        <md-card-content>
          <md-field>
            <label>Contenido</label>
            <md-textarea v-model="textarea" md-counter="80"></md-textarea>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button v-on:click="crearPost()">Publicar</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'PostBar',
  methods: {
    crearPost: function () {
      this.$emit('PostCreado', this.textarea)
    }
  }
}
</script>

<style>
.conf {
  text-align: center
}
.md-card {
  width: 520px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
