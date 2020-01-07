<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">
        @{{ event.time }} on {{ event.date }}
      </span>
      <h1 class="title">
        {{ event.title }}
      </h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <span name="map">
      <h2>Location</h2>
    </span>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ event.attendees ? event.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: `${this.event.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about the event #${this.event.title}`
        }
      ]
    }
  },
  /* async asyncData({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(`http://localhost:3000/events/${params.id}`)
        return {
          event: data
        }
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch the event #${params.id}. Please try again.`

      })
    }
  }, */
  /* async asyncData({ error, params }) {
    try {
      const { data } = await EventService.getEvent(params.id)
        return {
          event: data
        }
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch the event #${params.id}. Please try again.`

      })
    }
  }, */
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch the event #${params.id}. Please try again.`

      })
    }
  },
  // computed: {
  //   /* id() {
  //     return this.$route.params.id
  //   } */
  // },
  transition (to, from) {
    if (!from) { return 'slide-left' }
    return  'slide-right'
  },
  computed: mapState({
    event: state => state.events.event
  })
}
</script>

<style scoped lang="scss">
.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);

  > {
    .title {
      margin: 0 0 0.5em;

      > .meta {
        margin-left: 10px;
      }
    }

    .actions {
      display: flex;
      align-items: center;
    }

    button {
      margin-right: 0.5em;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}

.location {
  margin-bottom: 0;

  > .icon {
    margin-left: 10px;
  }
}

.event-header > .title {
  margin: 0;
}

.list-group {
  margin: 0;
  padding: 0;
  list-style: none;

  > .list-item {
    padding: 1em 0;
    border-bottom: solid 1px #e5e5e5;
  }
}
</style>
