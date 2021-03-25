<template>
  <Layout>
      <section id="home">
        <v-container>
          <v-row>
            <v-col cols="12">
              <base-card dark>
                <v-img
                    :src="data.image"
                    class="grey lighten-2"
                    width="100%"
                    min-height="500"

                >
                  <v-row
                      class="fill-height pa-3"
                      align="center"
                  >
                    <v-col
                        cols="12"
                        md="8"
                        offset="0"
                        offset-md="2"
                        class="overlay"
                    >
                      <h1 style="color: white;">
                        {{ data.title }}
                      </h1>

                      <p v-html="data.body"></p>

                    </v-col>
                  </v-row>
                </v-img>
              </base-card>
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
export default {

  components: {
    FeedCard: () => import('../components/FeedCard'),
  },
  data: () => ({
    home,
  })
}
</script>
