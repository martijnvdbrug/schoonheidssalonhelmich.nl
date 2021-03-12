<template>
  <v-app>
    <core-app-bar/>

    <core-drawer/>

    <v-content id="home">
      <slot/>
    </v-content>

    <core-footer/>

    <core-cta/>
  </v-app>
</template>

<script>
import CoreCTA from '../components/core/Cta';
import CoreDrawer from '../components/core/Drawer';
import CoreFooter from '../components/core/Footer';
import CoreAppBar from '../components/core/AppBar';

export default {
  name: 'App',

  components: {
    CoreCTA, CoreAppBar, CoreDrawer, CoreFooter
  }
}
</script>
