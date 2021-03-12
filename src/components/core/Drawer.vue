<template>
  <v-navigation-drawer
      v-model="$store.drawer"
      app
      dark
      temporary
  >
    <v-list>
      <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :href="link.href"
          @click="onClick($event, link)"
      >
        <v-list-item-title v-text="link.text"/>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const links = require('@/data/links.json');
export default {
  name: 'CoreDrawer',
  data() {
    return {
      links
    }
  },

  methods: {
    onClick(e, item) {
      e.stopPropagation()
      if (item.to === '/') {
        this.$vuetify.goTo(0)
        this.$store.drawer = false;
        return
      }
      if (item.to || !item.href) return
      this.$vuetify.goTo(item.href)
      this.$store.drawer = false;
    },
  },
}
</script>
