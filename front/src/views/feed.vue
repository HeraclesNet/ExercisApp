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
              <md-icon>favorite</md-icon>
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
          <md-card-content v-for="file in content.files" :key="file">
            <md-card-media  v-if="file.existe === true">
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
  created: function () {
    console.warn(this.$store.state.sesion.token)
    // getData()
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
      contents: [
        {
          id: '12361273',
          post: 'test1',
          muscles: 3,
          files: [
            {
              existe: true,
              url: 'https://www.mydiscprofile.com/_images/homepage-free-personality-test.png'
            }
          ]
        },
        {
          id: '0983457',
          post: 'test2',
          muscles: 1,
          files: [
            {
              existe: false
            }
          ]
        }
      ],
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
      const params = new URLSearchParams()
      params.append()
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(response => {
        this.contents = response.content
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
