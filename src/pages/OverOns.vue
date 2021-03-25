<template>
  <Layout>
    <section id="over-ons">
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
          <v-col cols="12">
            <base-card dark>
              <v-img
                  :src="data.image"
                  class="grey lighten-2"
                  width="100%"
                  min-height="500"
              >
              </v-img>
            </base-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col
              v-for="(employee, i) of data.employees"
              :key="i"
              cols="12"
              sm="6"
          >
            <h1>
              {{ employee.title }}
            </h1>
            <br>

            <p v-html="employee.body"></p>
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
import data from '@/data/over-ons.json';

export default {
  data: () => ({
    data,
    selectedImage: false
  })
}
</script>
