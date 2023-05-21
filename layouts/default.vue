<template>
  <v-app
    id="inspire"
  >
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Analyseergebnisse</v-toolbar-title>
      <v-spacer />
      <topic-selector />
      <v-spacer />
    </v-app-bar>

    <v-main style="background-color: #EED5DA;">
      <v-container
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      color="primary"
      app
    >
      <span class="white--text" />
    </v-footer>
  </v-app>
</template>

<script>
import topicSelector from '~/components/controls/topic-selector.vue'

export default {
  components: { topicSelector },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
