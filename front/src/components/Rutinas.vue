<template>
  <div>
    <vue-scheduler/>
    <div>
      <md-button style="background-color:#fff; color:#ee2d2b; margin: 6px 8px;" v-on:click="undo()">Deshacer</md-button>
      <md-button style="background-color:#fff; color:#ee2d2b; margin: 6px 8px;" v-on:click="guardarInfo()">Guardar</md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Vue from 'vue';
import VueScheduler from 'v-calendar-scheduler';
import 'v-calendar-scheduler/lib/main.css';
// Vue.use(VueScheduler);
export default {
  name: 'Rutinas',
  components: {
    VueScheduler
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  created () {
    this.loadEvents()
  },
  data () {
    return {
      events: [],
      newEvents: []
    }
  },
  methods: {
    guardarInfo: function () {
      // DayPilot.Calendar.events.find(id);
      let temp = []
      temp = DayPilot.Calendar.events.find(1)
      return temp
    },
    LoadInfo: function () {
      this.service.initialize()
    },
    postInfo: function () {
      const params = new URLSearchParams()
      axios.put('http://localhost:8081/post/muscle', params,
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
        }
      }).catch(e => {
        console.log(e)
      })
    },
    getInfo: function () {
      const params = new URLSearchParams()
      axios.put('http://localhost:8081/post/muscle', params,
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>