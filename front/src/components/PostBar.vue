<template>
  <div class="conf">
    <md-card md-with-hover>
      <md-ripple>
      <form>
        <md-card-header>
          <div class="md-title">Post</div>
          <div class="md-subhead">Esto es un comentario embebido</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Contenido</label>
            <md-textarea v-model="textarea" md-counter="80" md-clearable></md-textarea>
          </md-field>
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <md-button>
            <!-- <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input"/> -->
            <md-field accept="image/*" id="file-input" md-clearable>
              <label>Subir Imagen</label>
                <md-file v-model="placeholder" @change="uploadImage($event)" placeholder="Subir Imagen" />
              </md-field>
          </md-button>
          <md-button v-on:click="postear()" key="componentKey" type="reset">Publicar</md-button>
        </md-card-actions>
      </form>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '@/Objects/Post.js'
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
      textarea: this.textarea,
      placeholder: this.placeholder,
      file: '',
      id: 1
    }
  },
  methods: {
    postear: function () {
      const text = this.textarea
      this.userPost.append('content', this.textarea)
      axios.post('http://localhost:8081/post/media/upload',
        this.userPost, {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Content-Type': `multipart/form-data; boundary=${this.userPost._boundary}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.url = response.data.message
          this.id = response.data.message.id
          this.crearPost(text)
          this.forceReset()
        }
      }).catch(e => {
        console.log(e)
      })
    },
    crearPost: function (text) {
      console.log(this.placeholder)
      var existe = true
      if (this.url === 'OnlyText' || this.placeholder === null) {
        existe = false
      }
      const post = new Post(this.id, this.$store.state.sesion.name, text, existe)
      if (existe === true) {
        post.setUrl(this.url)
      }
      post.setMuscles(0)
      post.setNickName(this.$store.state.sesion.nickName)
      post.setLiked(false)
      this.$emit('PostCreado', post)
    },
    uploadImage (event) {
      console.log(this.file)
      this.file = event.target.files[0]
      this.userPost.append('file', this.file)
    },
    forceReset () {
      this.textarea = null
      this.placeholder = null
      this.userPost = new FormData()
      this.file = null
      this.id = null
    }
  }
}
</script>

<style>
.conf {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.md-card {
  width: 520px;
  margin: 4px;
  vertical-align: top;
}
</style>
