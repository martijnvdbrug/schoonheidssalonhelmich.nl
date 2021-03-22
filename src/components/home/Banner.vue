<template>
  <base-card dark>
    <v-img
      :src="home.image"
      class="grey lighten-2"
      width="100%"
      height="600"
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
          <h1>
            {{ home.title }}
          </h1>

          <p>
            {{ home.body }}
          </p>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
import home from '@/data/home.json';
  export default {
    data() {
      return {
        home
      }
    }
  }
</script>
