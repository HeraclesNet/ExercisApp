<template>
  <div class="user">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
  <!-- Info Usuario -->
  <div id="InfoUser">

  </div>
  <!-- Post history Usuario -->
  <div id="PublishedContent">
    <div id="NewPost">
      <ul>
        <li is="Post" v-for="Posts in postUser" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
      </ul>
    </div>
    <div id="PostHystory">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
  </div>
 </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import PostBar from '@/components/PostBar.vue'
import Post from '@/components/Post.vue'
import axios from 'axios'
export default {
  name: 'User',
  Created () {
    this.getPosts()
  },
  data () {
    return {
      peso: null,
      altura: null,
      dateOfBirth: null,
      edad: null, // yo la calculo
      nickname: null,
      visibilidad: null,
      genero: null,
      contents: null,
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar,
    Post
  },
  methods: {
    // 2 post
    // peso altura nickname
    // visibilidad genero
    postear: function (postCreado) {
      this.postUser.push(postCreado)
    },
    transformarContenido: function (contenido) {
      var temp = []
      for (let i = 0; i <= contenido.length; i++) {
        const post = new Post(contenido.id, contenido.user, contenido.post, contenido.hasFiles, contenido.file.url)
        post.setMuscles(contenido.muscles)
        post.setMediaType(contenido.files.type)
        post.setnickName(contenido.user.nickname)
        post.setLiked(contenido.muscle)
        temp.push(post)
      }
      this.contents = temp
    },
    getPosts: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
          }
        }).then(response => {
        this.transformarContenido(response.data.posts)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
