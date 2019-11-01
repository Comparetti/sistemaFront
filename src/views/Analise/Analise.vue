<template>
  <v-card elevation="10">

    <v-card elevation="0">

      <v-card-title>Analise</v-card-title>
    </v-card>

    <v-card-title>
      <div class="flex-grow-1"></div>
      <v-text-field
        loading
        v-model="search"
        append-icon="search"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    > <template v-slot:item.detalhe="{ item }">
        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
          <v-card>
            <v-card-title>
              POS
            </v-card-title>
            <v-card-text>
              Passar uma lista com as pos vinculadas
            </v-card-text>
          </v-card>

          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              icon
              @click="dialog2 = true"
            >
              <v-icon
                dark
                v-on="on"
              >visibility</v-icon>
                </v-btn>
            <v-btn
              class="ma-2"
              icon
              @click="dialog2 = true"
            >
              <v-icon
                dark
                v-on="on"
              >add_circle_outline</v-icon>
            </v-btn>
          </template>
        </v-dialog>
      </template>

      <template v-slot:item.phoebus.value="{ item }">
        <span>{{formatCurrency(item.phoebus.value / 100)}}</span>
      </template>
      <template v-slot:item.confirmation_date="{ item }">
        <span>{{dateMoments(item.confirmation_date)}}</span>
      </template>

    </v-data-table>

  </v-card>

</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import { currencyFormatter } from '@/utils'
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Transação POS - Analise',
          align: 'center',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'Cliente', align: 'center', value: 'nomeRazao' },
        { text: 'CNPJ', align: 'center', value: 'cpfCnpj' },
        { text: 'NSU', align: 'center', value: 'nsu' },
        { text: 'Bandeira', align: 'center', value: 'phoebus.brand' },
        { text: 'Numero Cartao', align: 'center', value: 'card_number' },
        { text: 'Valor', align: 'center', value: 'phoebus.value' },
        { text: 'POS', align: 'center', value: 'phoebus.terminal' },
        { text: 'Detalhes | Adicionar', align: 'center', value: 'detalhe' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindAnaliselist()
    this.desserts = this.analiselist.results
  },
  computed: {
    ...mapState('analiselist', ['analiselist'])
  },
  methods: {
    ...mapActions('analiselist', ['ActionFindAnaliselist']),
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    dateMoments (date) {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>
