<template>
  <div class="feed">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
  <div id="PostHistory">
    <ul>
      <li v-for="Post in postUser" :key="Post.id">
        <p>{{Post.getEscrito()}}</p>
      </li>
    </ul>
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
#PostHistory li{
  color: #FFFBF4;
  font-family: 'Roboto';
  font-size: 10px;
  line-height: 1em
}
</style>
