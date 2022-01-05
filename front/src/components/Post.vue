<template>
<md-card md-with-hover>
        <md-ripple>
          <md-card-header-text v-if="Post.getEscrito() !== null">
            <div class="md-title">{{Post.getEscrito()}}</div>
            <div class="md-subhead">{{Post.getUser()}}</div>
          </md-card-header-text>
          <md-card-content v-if="Post.getExiste() === true">
            <img :src = "Post.getUrl()"/>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-icon-button md-raised md-primary" v-if="liked" v-on:click="dislike()">
              <md-icon>sports_mma</md-icon>
              {{Post.getMuscles()}}
            </md-button>
            <md-button class="md-icon-button" v-if="!liked" v-on:click="like()">
              <md-icon>sports_mma</md-icon>
              {{Post.getMuscles()}}
            </md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Post',
  props: {
    Post: Object
    // user: String
  },
  data () {
    return {
      liked: false
    }
  },
  methods: {
    like: function () {
      this.liked = true
      console.warn(this.liked)
      const tempmuscles = this.Post.getMuscles()
      this.Post.setMuscles(tempmuscles + 1)
    },
    dislike: function () {
      this.liked = false
      console.warn(this.liked)
      const tempmuscles = this.Post.getMuscles()
      this.Post.setMuscles(tempmuscles - 1)
    },
    postlike: function () {
      const params = new URLSearchParams()
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
          }
        }).then(response => {
        this.like()
      }).catch(e => {
        console.log(e)
      })
    },
    postdislike: function () {
      const params = new URLSearchParams()
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
          }
        }).then(response => {
        this.dislike()
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
