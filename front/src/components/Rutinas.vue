<template>
  <div>
    <vue-scheduler @event-created="eventCreated" :events="events" :event-dialog-config="dialogConfig" event-display="name" :labels="{
        today: 'Hoy',
        back: 'Atrás',
        next: 'Siguiente',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        all_day: 'Todo el día'
      }"/>
      <md-button style="background-color:#fff; color:#ee2d2b; margin: 6px 8px;" v-on:click="postInfo()">Guardar</md-button>
  </div>
</template>

<script>
import axios from 'axios'
// import VueScheduler from 'v-calendar-scheduler'
import 'v-calendar-scheduler/lib/main.css'
import Event from '@/Objects/Event.js'
import Rutinas from '@/Objects/Rutinas.js'
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
    // this.transformarInfo(this.temps)
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
      events: [],
      newEvent: [],
      temps: [
        {
          date: 'Mon Jan 21 2022 18:27:51 GMT-0500 (hora estándar de Colombia)',
          startT: '13:00',
          endT: '16:00',
          text: '10 km trotando'
        },
        {
          date: 'Mon Jan 22 2022 18:27:51 GMT-0500 (hora estándar de Colombia)',
          startT: '13:00',
          endT: '16:00',
          text: '24 kilometros trotando'
        }
      ]
    }
  },
  methods: {
    transformarInfo: function (content) {
      const temp = []
      for (var key in content) {
        var obj = content[key]
        const event = new Event(obj.id, Date.parse(obj.date), obj.ent, obj.startt, obj.text)
        temp.push(event)
      }
      this.events = temp
    },
    guardarInfo: function () {
      const temp = []
      for (var key in this.newEvent) {
        var obj = this.newEvent[key]
        const rutinas = new Rutinas(obj.date, obj.startTime, obj.endTime, obj.name)
        temp.push(rutinas)
      }
      console.log(temp)
      return (temp)
    },
    postInfo: function () {
      // const params = new URLSearchParams()
      // params.append(this.guardarInfo())
      const list = this.guardarInfo()
      console.log(list)
      axios.post('http://localhost:8081/profile/add/rutina', list,
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
          this.newEvent = []
          alert('Rutina guardada exitosamente')
        }
      }).catch(e => {
        console.log(e)
      })
    },
    getInfo: function () {
      // const params = new URLSearchParams()
      axios.get('http://localhost:8081/profile/get/rutina',
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
    },
    eventCreated (event) {
      console.log('Event created')
      this.newEvent.push(event)
      // console.log(event)
    }
  }
}
</script>
