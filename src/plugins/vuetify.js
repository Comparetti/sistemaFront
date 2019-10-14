import Vue from 'vue'
import Vuetify from 'vuetify'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    primary: colors.teal.darken1
  },
  icons: {
    iconfont: 'md'
  }
})
