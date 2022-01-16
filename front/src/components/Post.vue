<template>
<md-card md-with-hover>
        <md-ripple>
          <md-card-header-text v-if="Post.getEscrito() !== null">
            <div class="md-subhead">{{Post.getEscrito()}}</div>
            <div class="md-subhead"> <router-link  :to="{name:'Profile', params:{nickName: this.Post.getNickName()}}">{{Post.getUser()}}</router-link> </div>
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
  },
  data () {
    return {
      liked: this.Post.getLiked()
    }
  },
  methods: {
    like: function () {
      this.liked = true
      const tempmuscles = this.Post.getMuscles()
      this.Post.setMuscles(tempmuscles + 1)
    },
    dislike: function () {
      this.liked = false
      const tempmuscles = this.Post.getMuscles()
      this.Post.setMuscles(tempmuscles - 1)
    },
    postlike: function () {
      const params = new URLSearchParams()
      params.append('id', this.Post.getId())
      params.append('like', '1')
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.like()
        }
      }).catch(e => {
        console.log(e)
      })
    },
    postdislike: function () {
      const params = new URLSearchParams()
      params.append('id', this.Post.getId())
      params.append('like', '-1')
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.dislike()
        }
      }).catch(e => {
        console.log(e)
      })
    },
    gotoProfile: function () {
    }
  }
}
</script>
