<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Data Visualization</v-list-item-title>
            <v-list-item-subtitle>Live Data From Kafka</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />

      <v-list>
        <v-list-item
          link
          to="/"
          nuxt
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Startseite</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/dashboard"
          nuxt
        >
          <v-list-item-action>
            <v-icon>mdi-chart-bell-curve</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/map"
          nuxt
        >
          <v-list-item-action>
            <v-icon>mdi-chart-bell-curve</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Map</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Analyseergebnisse</v-toolbar-title>
      <v-spacer />
      <!-- <topic-selector /> -->
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
      <span class="white--text"></span>
    </v-footer>
  </v-app>
</template>

<script>
import topicSelector from "~/components/controls/topic-selector.vue"


export default {
  components: { topicSelector },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
