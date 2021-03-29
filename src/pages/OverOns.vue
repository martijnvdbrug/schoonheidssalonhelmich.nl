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
          <v-col
              v-for="(employee, i) of data.employees"
              :key="i"
              cols="12"
              sm="6"
          >
            <v-img
                :src="employee.image"
                class="grey lighten-2"
                width="100%"
                min-height="400"
            >
            </v-img>
            <h1>
              {{ employee.title }}
            </h1>
            <br>

            <p v-html="employee.body"></p>
          </v-col>
        </v-row>

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
