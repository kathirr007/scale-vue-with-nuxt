<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard'
// import EventService from '@/services/EventService.js'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Event Listing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can find all the events taking place in your neighborhood...'
        }
      ]
    }
  },
  // asyncData(context) {
    // return context.$axios.get('http://localhost:3400/events')
  /* asyncData({ $axios, error }) {
    return $axios.get('http://localhost:3000/events')
      .then(res => {
        return {
          events: res.data
        }
      })
      .catch(e => {
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time. Please try again.'
        })
      })
  }, */
  /* async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3000/events')
        return {
          events: data
        }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the events at this time. Please try again.'

      })
    }
  }, */
  /* async asyncData({ error }) {
    try {
      const { data } = await EventService.getEvents()
        return {
          events: data
        }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the events at this time. Please try again.'

      })
    }
  }, */
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the events at this time. Please try again.'

      })
    }
  },
  components: {
    EventCard
  },
  computed: mapState({
    events: state => state.events.events
  })
}
</script>
