<template>
  <v-app-bar
      app
      flat
      color="white"
      height="120"
  >
    <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleDrawer"
    />
    <v-container>
      <v-row align="center">
        <v-col style="width: 190px;">
          <g-link to="/">
          <g-image
              src="/helmich-logo.png"
              style="height: 50px;"
          />
          </g-link>
        </v-col>
        <v-col align="right">
          <v-btn :href="global.afspraakPlanner" depressed color="primary rounded-0 hidden-sm-and-down text-capitalize" class="mx-2">
            Afspraak inplannen
          </v-btn>
          <v-btn :href="`tel:${global.telefoon}`" target="_blank" depressed color="primary rounded-0">
            <v-icon dark>
              mdi-phone
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center justify-space-between">
        <g-link
            :to="link.href"
            v-for="(link, i) in global.links"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down text-capitalize v-btn v-btn--text theme--light v-size--default gbutton">
          <span class="v-btn__content">
          {{ link.text }}
        </span>
        </g-link>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
const global = require('@/data/global.json');

export default {
  name: 'CoreAppBar',

  data() {
    return {
      global
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.drawer = !this.$store.drawer;
    },
    onClick(e, item) {
      e.stopPropagation()
      if (item.to || !item.href) return
      this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
    },
  },
}
</script>
<style>
.gbutton {
  color: #1f1f1f;
}
</style>
