<template>
  <div class="feed">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
<<<<<<< HEAD
  <div id="comment">
    <div id="card" v-for="Post in postUser" :key="Post.id">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-content>
            <p>{{Post.getEscrito()}}</p>
          </md-card-content>
        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
    <div class="break"></div>
=======
  <div id="PostHistory">
    <ul>
      <li v-for="Post in postUser" :key="Post.id">
        <div id="post">
          <p>{{Post.getEscrito()}}</p>
        </div>
      </li>
    </ul>
  </div>
>>>>>>> 693b8375c1246f1a3e8f3c3e229b570366082875
  </div>
</div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import PostBar from '@/components/PostBar.vue'
import Post from '@/Objects/Post.js'
export default {
  name: 'Home',
  data () {
    return {
      user: [],
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar
  },
  methods: {
    postear: function (postCreado) {
      const NewPost = new Post('Usuario1', postCreado, 1)
      this.postUser.push(NewPost)
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
