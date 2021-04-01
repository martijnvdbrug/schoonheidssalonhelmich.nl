<template>
  <v-col
      cols="12"
      :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <g-link :to="link">
      <v-img
          dark
          :src="img"
          gradient="rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
          height="200"
      >
        <v-row
            align="center"
            justify="center"
            style="height: 100%;"
        >
          <v-col
              class="text-center"
              cols="12"
          >
            <h2>
              {{ title }}
            </h2>
          </v-col>
        </v-row>
      </v-img>
    </g-link>
    <!--<base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      href="#!"
    >
      <v-img
        :src="require(`@/assets/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row
          v-if="!value.prominent"
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <h3 class="title font-weight-bold mb-2">
              Title
            </h3>

            <div class="caption">
              {{ value.author }}<br>Date
            </div>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              Read More
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>-->
  </v-col>
</template>

<script>
export default {
  name: 'FeedCard',
  props: ['size', 'title', 'img', 'link']
}
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
