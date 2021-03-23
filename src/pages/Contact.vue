<template>
  <Layout>
    <section id="home">
      <v-container>
        <br>
        <v-row>
          <v-col
              class="text-center"
              cols="12">
            <h1>Contact</h1>
            <br>
          </v-col>
        </v-row>

        <v-row>
          <v-col
              class="text-center"
              cols="12"
              md="6"
              id="contact"
          >
            <h3>Contactgegevens</h3>
            <br>
            <p><a :href="`tel:${global.telefoon}`" target="_blank" class="no-anchor">
              {{ global.telefoonDisplay }}
            </a></p>
            <p><a :href="`mailto:${global.email}`" target="_blank" class="no-anchor">{{ global.email }}</a></p>
            <p>{{ global.straat }}</p>
            <p>{{ global.postcodePlaats }}</p>
          </v-col>

          <v-col
              class="text-center"
              cols="12"
              md="6">
            <h3>Openingstijden</h3>
            <br>
            <p>Dinsdag t/m donderdag: 8.30 - 17.30 uur</p>
            <p>Vrijdag: 8.30 - 20.00 uur</p>
            <p>Zaterdag: 8.00 - 14.30 uur</p>
          </v-col>

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
