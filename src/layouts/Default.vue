<template>
  <v-app style="font-family: 'Montserrat', sans-serif; color: #1f1f1f;">
    <core-app-bar/>

    <core-drawer/>

    <div id="spacer" style="height:120px;"></div>

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