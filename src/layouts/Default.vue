<template>
  <v-app style="font-family: 'Montserrat', sans-serif; color: #1f1f1f;">
    <core-app-bar/>
    <core-drawer/>
    <div id="spacer" style="height:120px;"></div>
    <slot/>

    <br/>
    <br/>
    <div id="footer-banner" class="text-center" style="background-color: #2F837F; padding: 5px;"><a :href="global.footerBannerLink">{{ global.footerBanner }}</a></div>
    <core-footer/>
  </v-app>
</template>
<script>
import CoreCTA from '../components/core/Cta';
import CoreDrawer from '../components/core/Drawer';
import CoreFooter from '../components/core/Footer';
import CoreAppBar from '../components/core/AppBar';
const global = require('@/data/global.json');

export default {
  name: 'App',
  components: {
    CoreCTA, CoreAppBar, CoreDrawer, CoreFooter
  },
  data() {
    return {
      global
    }
  }
}
</script>
<style>
#footer-banner a{
  color: white;
}
</style>