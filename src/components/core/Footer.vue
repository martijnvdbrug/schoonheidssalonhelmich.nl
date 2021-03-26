<template>

  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container class="mx-auto">
      <v-row>

        <v-col
            class="text-center"
            cols="12"
            md="4">
          <h3>Openingstijden</h3>
          <br>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="openinghour in global.openinghours">
                  <td>{{ openinghour.day }}</td>
                  <td>{{ openinghour.hours }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>

        <v-col
            class="text-center"
            cols="12"
            md="4"
            id="contact"
        >
          <h3>Contact</h3>
          <br>
          <p><a :href="`tel:${global.telefoon}`" target="_blank" class="no-anchor">
            {{ global.telefoonDisplay }}
          </a></p>
          <p><a :href="`mailto:${global.email}`" target="_blank" class="no-anchor">{{ global.email }}</a></p>
          <p>{{ global.straat }}</p>
          <p>{{ global.postcodePlaats }}</p>
        </v-col>

        <v-col
            order="first"
            class="text-center"
            cols="12"
            md="4">

          <v-btn depressed color="primary rounded-0" class="mx-2">
            <a :href="global.afspraakPlanner" _target="blank" class="no-anchor text-capitalize">Afspraak inplannen</a>
          </v-btn>
          <br>
          <br>

          <v-btn depressed color="primary rounded-0">
            <a :href="`tel:${global.telefoon}`" target="_blank" class="no-anchor">
              <v-icon dark>
                mdi-phone
              </v-icon>
            </a>
          </v-btn>
          <br>
          <br>

          <v-btn depressed color="primary rounded-0">
            <a :href="`${global.facebook}`" target="_blank" class="no-anchor">
              <v-icon dark>
                mdi-facebook
              </v-icon>
            </a>
          </v-btn>
        </v-col>

        <v-spacer />
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import global from '@/data/global.json';
  export default {
    name: 'CoreFooter',
     data: () => ({
       global
     })
  }
</script>
