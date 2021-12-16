<template>
  <div class="feed" v-on:="">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
  <div id="comment">
    <div id="card" v-for="Post in postUser" :key="Post.id">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header-text>
            <div class="md-title">{{Post.getEscrito()}}</div>
          </md-card-header-text>
          <md-card-content v-if="Post.Multimedias.getExiste() === true">
          </md-card-content>
          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>sports_mma</md-icon>
              {{Post.getMuscles()}}
            </md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
    <div id="card" v-for="content in contents" :key="content.id">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header-text>
            <div class="md-title">{{content.post}}</div>
          </md-card-header-text>
          <md-card-content v-if="content.hasFiles === true">
            <md-card-media  v-for="file in content.files" :key="file">
              <img :src = "file.url"/>
            </md-card-media>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-icon-button">
              {{content.muscles}}
              <md-icon>favorite</md-icon>
            </md-button>
          </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="break"></div>
  </div>
</div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import PostBar from '@/components/PostBar.vue'
import Post from '@/Objects/Post.js'
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
    console.warn(this.$store.state.sesion.token)
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
      si: 'si',
      contents: null,
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar
  },
  methods: {
    postear: function (postCreado) {
      const NewPost = new Post(1, 'Usuario1', postCreado, false)
      this.postUser.push(NewPost)
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
