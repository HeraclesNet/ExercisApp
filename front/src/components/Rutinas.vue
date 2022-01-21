<template>
  <div>
    <vue-scheduler :events="events" :event-dialog-config="dialogConfig" event-display="name"/>
    <div>
      <!-- md-button style="background-color:#fff; color:#ee2d2b; margin: 6px 8px;" v-on:click="LoadInfo()">Deshacer</md-button-->
      <md-button style="background-color:#fff; color:#ee2d2b; margin: 6px 8px;" v-on:click="guardarInfo()">Guardar</md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import VueScheduler from 'v-calendar-scheduler'
import 'v-calendar-scheduler/lib/main.css'
import Event from '@/Objects/Event.js'
export default {
  name: 'Rutinas',
  components: {
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  created () {
    this.getInfo()
  },
  data () {
    return {
      dialogConfig: {
        title: 'Rutina',
        createButtonLabel: 'Guardar',
        showLabel: true,
        fields: [
          {
            name: 'name',
            label: 'Nombre de la rutina'
          }
        ]
      },
      events: [
        {
          date: new Date(),
          startTime: '13:00',
          endTime: '15:00',
          customAttribute: 'Im a custom attribute',
          name: 'Example 1'
        }
      ]
    }
  },
  methods: {
    guardarInfo: function (content) {
      const temp = []
      for (var key in content) {
        var obj = content[key]
        const event = new Event(obj.customAttribute, Date.parse(obj.date), obj.startTime, obj.endTime, obj.name)
        temp.push(event)
      }
      this.events = temp
    },
    transformarInfo: function () {
      const temp = []
      for (var key in this.events) {
        var obj = this.events[key]
        const event = new Event(obj.customAttribute, obj.date, obj.startTime, obj.endTime, obj.name)
        temp.push(event)
      }
      return (temp)
    },
    postInfo: function () {
      this.transformarInfo()
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
          this.transformarInfo(response.data)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
