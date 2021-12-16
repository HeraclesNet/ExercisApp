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
        <md-card-actions md-alignment="space-between">
          <md-button>
            <!-- <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input"/> -->
            <md-field accept="image/*" id="file-input">
              <label>Subir Imagen</label>
              <md-file v-model="placeholder" @change="uploadImage($event)" placeholder="Subir Imagen" />
              </md-field>
          </md-button>
          <md-button v-on:click="postear()">Publicar</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostBar',
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      userPost: new FormData(),
      file: ''
    }
  },
  methods: {
    postear: function () {
      this.userPost.append('content', this.textarea)
      axios.post('http://localhost:8081/user/media/upload',
        this.userPost, {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Content-Type': `multipart/form-data; boundary=${this.userPost._boundary}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        console.log(response.status)
        this.crearPost()
      }).catch(e => {
        console.log(e)
      })
    },
    crearPost: function () {
      this.$emit('PostCreado', this.textarea)
    },
    uploadImage (event) {
      this.file = event.target.files[0]
      this.userPost.append('file', this.file)
      console.warn(this.file)
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
