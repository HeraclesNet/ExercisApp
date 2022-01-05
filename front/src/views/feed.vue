<template>
  <div class="feed" v-on:="">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
  <!-- Filtro -->
  <div id="filtrar">
    <md-button v-on:click="filtro='votos'">Mas Gustados</md-button>
    <md-button v-on:click="filtro='nuevo'">Mas Nuevos</md-button>
  </div>
  <!-- Post Recien Creados -->
  <div id="comment">
    <ul>
      <li is="Post" v-for="Posts in postUser" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
    </ul>
    <!-- FeedBack -->
    <div v-if="filtro === nuevo">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div v-if="filtro === votos">
       <div id="card" v-for="content in contents" :key="content.id">
        <md-card md-with-hover>
          <md-ripple>
            <md-card-header-text v-if="content.post !== null">
              <div class="md-title">{{content.post}}</div>
              <div class="md-subhead">{{content.user}}</div>
            </md-card-header-text>
            <md-card-content v-if="content.hasFiles === true">
              <md-card-media  v-for="file in content.files" :key="file">
                <img :src = "file.url"/>
              </md-card-media>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-icon-button">
                {{content.muscles}}
                <md-icon>sports_mma</md-icon>
              </md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
    </div>
    <div class="break"></div>
  </div>
</div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import PostBar from '@/components/PostBar.vue'
import Post from '@/components/Post.vue'
import axios from 'axios'
export default {
  name: 'Home',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background: #36393e')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  created: function () {
    this.getData()
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      user: null,
      contents: null,
      filtro: 'nuevo',
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar,
    Post
  },
  methods: {
    postear: function (postCreado) {
      this.postUser.push(postCreado)
    },
    transformarContenido: function (contenido) {
      var mock = []
      for (let i = 0; i <= contenido.length; i++) {
        const post = new Post(contenido.id, contenido.user, contenido.post, contenido.hasFiles, contenido.file.url, contenido.date)
        post.setMuscles(contenido.muscles)
        this.mock.push(post)
      }
      this.contents = mock
    },
    getData: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token
          }
        }).then(response => {
        this.contents = response.data.content
        console.warn()
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
.feed {
  font-family: 'TTOctosquares-Regular Regular';
  color: #fff;
  font-size: 30px;
  }
#comment{
  display: block;
  flex-flow: wrap
}
#card {
  margin: 4px;
  display: flex;
  justify-content: center;
}
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
