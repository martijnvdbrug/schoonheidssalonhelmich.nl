<template>
  <Layout>
    <section id="permanente-makeup">
      <v-container>

        <v-row>
          <v-col cols="12">
            <base-card dark>
              <v-img
                  :src="$context.data.image"
                  class="grey lighten-2"
                  width="100%"
                  height="500"
              >
              </v-img>
            </base-card>
          </v-col>
          <v-col
              cols="12"
          >
            <h1>
              {{ $context.data.title }}
            </h1>

            <p v-html="$context.data.body"></p>
          </v-col>

          <v-col
              v-for="(img,i) in $context.data.images"
              :key="img+i"
              cols="12"
              sm="4"
              v-on:click="selectedImage = img">
            <v-img
                :src="img"
                height="300"/>
          </v-col>
        </v-row>

        <v-overlay :value="selectedImage" align="center">
          <v-btn
              icon
              @click="selectedImage = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-img
              :src="selectedImage"
              width="80%"
              @click="selectedImage = false"
          />
        </v-overlay>

      </v-container>
    </section>
  </Layout>
</template>

<script>
export default {

  components: {
    FeedCard: () => import('../components/FeedCard'),
  },
  data: () => ({
    selectedImage: false
  })
}
</script>
