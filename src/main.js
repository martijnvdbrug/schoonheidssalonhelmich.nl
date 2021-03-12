import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue';
import BaseBtn from '@/components/base/Btn'
import BaseCard from '@/components/base/Card'
import BaseSubheading from '@/components/base/Subheading'

export default function (Vue, {appOptions, router, head, isClient}) {
    Vue.use(Vuetify)
    appOptions.vuetify = new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#CBAA5C',
                    secondary: '#083759',
                },
            },
        },
    });
    Vue.component('Layout', DefaultLayout);
    Vue.component(BaseBtn.name, BaseBtn);
    Vue.component(BaseCard.name, BaseCard);
    Vue.component(BaseSubheading.name, BaseSubheading);
    Vue.prototype.$store = Vue.observable({
        drawer: false,
    });
}
