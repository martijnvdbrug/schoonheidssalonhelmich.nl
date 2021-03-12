<template>
  <v-app-bar
      app
      flat
      color="white"
  >
    <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleDrawer"
    />
    <v-container class="mx-auto py-0">
      <v-row align="center justify-space-between">
      </v-row>
      <v-row align="center justify-space-between">
        <v-img
            src="/helmich-logo.png"
            class="mr-5"
            contain
            height="48"
            width="150"
            max-width="150"
            @click="$vuetify.goTo(0)"
        />

        <v-btn
            v-for="(link, i) in links"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down"
            text
            @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
const links = require('@/data/links.json');

export default {
  name: 'CoreAppBar',

  data() {
    return {
      links
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
