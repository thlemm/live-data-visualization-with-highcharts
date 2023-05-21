<template>
  <v-layout align-center>
    <v-select
      v-model="topic"
      class="mt-6"
      :items="topics"
      label="Topic"
      dense
      filled
      outlined
      @change="selected()"
    />
    <v-btn
      class="ml-3"
      elevation="2"
      icon
      small
      tile
      @click="last()"
    >
      <v-icon dark>
        mdi-menu-left
      </v-icon>
    </v-btn>
    <v-btn
      class="ml-3"
      elevation="2"
      icon
      small
      tile
      @click="next()"
    >
      <v-icon dark>
        mdi-menu-right
      </v-icon>
    </v-btn>
    <v-text-field
      v-model="time"
      class="mt-6 ml-6"
      label="Window End"
      dense
      filled
      outlined
    />
    <v-btn
      class="ml-3"
      elevation="2"
      icon
      small
      tile
      @click="jump()"
    >
      <v-icon dark>
        mdi-check
      </v-icon>
    </v-btn>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      topic: undefined,
      time: undefined,
      topics: ['live_data', 'dataset_01']
    }
  },
  mounted () {

  },
  methods: {
    selected () {
      this.$nuxt.$emit('topic-selected', this.topic)
    },
    next () {
      this.$nuxt.$emit('next-set')
    },
    last () {
      this.$nuxt.$emit('last-set')
    },
    jump () {
      console.log(this.time)
      this.$nuxt.$emit('time-set', this.time)
    }
  }
}
</script>
