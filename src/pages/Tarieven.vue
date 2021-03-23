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
                 offset-md="2"
          >

            <v-card>
              <v-list>
                <v-list-group
                    no-action
                    sub-group
                    value="true"
                    v-for="(category, i) in data.categories"
                    :key="i"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{ category.title }}</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                      v-for="(item, i) in category.items"
                      :key="i"
                      link
                  >
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-icon style="width: 150px;">
                      € {{ item.price }}
                    </v-list-item-icon>

                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
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
