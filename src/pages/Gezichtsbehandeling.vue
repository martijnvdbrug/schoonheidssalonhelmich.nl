<template>
  <Layout>
    <section id="gezichtsbehandeling">
      <v-container>
        <v-row>
          <v-col cols="12">
            <base-card dark>
              <v-img
                  :src="data.image"
                  class="grey lighten-2"
                  width="100%"
                  height="400"
              >
              </v-img>
            </base-card>
          </v-col>
          <v-col
              cols="12"
          >
            <h1>
              {{ data.title }}
            </h1>

            <p>
              {{ data.body }}
            </p>
          </v-col>

          <v-col
              v-for="img in data.images"
              :key="img"
              cols="12"
              md="4"
          >
            <v-img
                :src="img"
                height="200"
            />
          </v-col>
        </v-row>

      </v-container>
    </section>
  </Layout>
</template>

<script>
import data from '@/data/gezichtsbehandeling.json';

export default {

  components: {
  },
  data: () => ({
    data
  })
}
</script>
