<template>
  <Layout>
    <section id="gezichtsbehandeling">
      <v-container>

        <v-row>
          <v-col
              cols="12"
          >
            <br>
            <h1>
              {{ data.title }}
            </h1>

            <p v-html="data.body"></p>
          </v-col>
        </v-row>
        <v-row>
          <feed-card
              v-for="block in data.blocks"
              :key="block.title"
              :size="3"
              :title="block.title"
              :img="block.image"
              :link="block.link"
          />
        </v-row>

        <br>
        <br>
        <br>

      </v-container>
    </section>
  </Layout>
</template>

<script>
import data from '@/data/huidverbeterend.json';
import FeedCard from '../components/FeedCard';

export default {
  components: {
    FeedCard
  },
  data: () => ({
    data,
    selectedImage: false
  })
}
</script>
