<template>
  <Layout>
    <section id="home">
      <v-container>
        <br>
        <v-row>
          <v-col
              class="text-center"
              cols="12">
            <h1>Tarieven</h1>
            <p v-html="data.body"></p>
            <br>
          </v-col>
        </v-row>


        <v-row>
          <v-col align="center"
                 cols="12"
                 md="8"
                 offset="0"
                 offset-md="2">

            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Behandeling
                  </th>
                  <th class="text-left">
                    Prijs
                  </th>
                </tr>
                </thead>
                <tbody>
                <template
                    v-for="(category, i) in data.categories"
                >
                  <tr>
                    <td><h3 style="color: #2F837F;">{{ category.title }}</h3></td>
                    <td></td>
                  </tr>
                  <tr
                      v-for="(item, i) in category.items"
                      :key="item.name"
                  >
                    <td style="padding-left:20px;">
                      <g-link v-if="item.link && item.link.length > 0" :to="item.link" style="text-decoration: inherit;">
                        {{ item.name }}
                      </g-link>
                      <template v-else>
                        {{ item.name }}
                      </template>
                    </td>
                    <td>€ {{ item.price }}</td>
                  </tr>
                </template>
                </tbody>
              </template>
            </v-simple-table>

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
import data from '@/data/tarieven.json';

export default {

  components: {
    FeedCard: () => import('../components/FeedCard'),
  },
  data: () => ({
    home,
    data
  })
}
</script>
