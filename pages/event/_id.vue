<template>
  <div>
    <h1 class="title">
      Event #{{ this.$route.params.id }}
    </h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Event #${this.id}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about the event #${this.id}`
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  transition (to, from) {
    if (!from) { return 'slide-left' }
    return  'slide-right'
  },
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
