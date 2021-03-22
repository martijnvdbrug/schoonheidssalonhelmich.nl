<template>
  <v-app style="font-family: 'Montserrat', sans-serif; color: #1f1f1f;">
    <core-app-bar/>

    <core-drawer/>

    <slot/>

    <br/>
    <br/>
    <core-footer/>

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
<style>
.overlay {
  background-color: rgba(82, 65, 76, 0.6);
}

h1 {
  font-weight: 400;
  font-size: 2rem;
}

a.no-anchor {
  color: inherit !important;
  text-decoration: inherit !important;
}
</style>