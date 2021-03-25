<template>
  <v-navigation-drawer
      v-model="$store.drawer"
      app
      color="white"
      temporary
  >
    <v-list>
      <v-list-item
          v-for="(link, i) in global.links"
          :key="i"
          @click="$store.drawer = false"
      >
        <g-link :to="link.href" class="no-anchor">
          <v-list-item-title v-text="link.text"/>
        </g-link>
      </v-list-item>
      <v-list-item>
        <a :href="global.afspraakPlanner" class="no-anchor">
          <v-list-item-title>Afspraak inplannen</v-list-item-title>
        </a>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const global = require('@/data/global.json');
export default {
  name: 'CoreDrawer',
  data() {
    return {
      global
    }
  }
}
</script>
