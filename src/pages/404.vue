<template>
  <Layout>
    <section id="home">
      <v-container>
        <br>
        <v-row>
          <v-col
              class="text-center"
              cols="12">
            <h1>404 - Deze pagina bestaat helaas niet</h1>
            <br>
            <br>
            <br>
            <g-link to="/contact/">Neem contact op</g-link>
            <br>
            <br>
            <br>
            <br>
          </v-col>
        </v-row>

        <v-row>
          <feed-card
              v-for="block in home.blocks"
              :key="block.title"
              :size="3"
              :title="block.title"
              :img="block.image"
              :link="block.link"
          />
        </v-row>

      </v-container>
    </section>
  </Layout>
</template>

<script>
import home from '@/data/home.json';
import global from '@/data/global.json';

export default {

  components: {
    FeedCard: () => import('../components/FeedCard'),
  },
  data: () => ({
    home,
    global
  })
}
</script>
