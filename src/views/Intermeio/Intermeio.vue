<template>
  <v-card elevation="10">

    <v-card elevation="0">

      <v-card-title>Banco de dados - Intermeio</v-card-title>
    </v-card>

    <v-card-title>
      <div class="flex-grow-1"></div>
      <v-text-field
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
    >
      <template v-slot:item.detalhe="{ item }">
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
              <img
                :src="imagemSincSrc"
                style="width: 30px; height: 30px"
              />
            </v-btn>
          </template>
        </v-dialog>
      </template>
      <template v-slot:item.valor="{ item }">
        <span>R$ {{item.valor}}</span>
      </template>

      <template v-slot:item.confirmation_date="{ item }">
        <span>{{dateMoments(item.confirmation_date)}}</span>
      </template>

      <template v-slot:item.bandeira="{ item }">
        <v-tooltip right="">
          <template v-slot:activator="{ on }">
            <span v-on="on"> <img
                :src="retornaImagem(item.bandeira)"
                style="width: 50px; height: 50px"
              /></span>
          </template>
          <span>{{item.bandeira}}</span>
        </v-tooltip>
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
      imagemVisaSrc: require('../../assets/img/visa.png'),
      imagemMasterSrc: require('../../assets/img/mastercard.png'),
      imagemVisibiliSrc: require('../../assets/img/visibility.png'),
      imagemSincSrc: require('../../assets/img/sicmoney.svg'),
      headers: [
        {
          text: 'Transação POS - Intermeio',
          align: 'center',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'Cliente', align: 'center', value: 'nomeRazao' },
        { text: 'CNPJ', align: 'center', value: 'cpfCnpj' },
        { text: 'NSU', align: 'center', value: 'nsu' },
        { text: 'Bandeira', value: 'bandeira' },
        { text: 'Numero Cartao', align: 'center', value: 'card_number' },
        { text: 'Valor', align: 'center', value: 'valor' },
        { text: 'POS', align: 'center', value: 'numeroDeSerie' },
        { text: 'Detalhes | Sincronizar', align: 'center', value: 'detalhe' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindIntermeiolist()
    this.desserts = this.intermeiolist.results
  },
  computed: {
    ...mapState('intermeiolist', ['intermeiolist'])
  },
  methods: {
    ...mapActions('intermeiolist', ['ActionFindIntermeiolist']),
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    dateMoments (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    retornaImagem (brand, date) {
      if (brand === 'VISA' || brand === 'VISA ELECTRON') {
        return this.imagemVisaSrc
      } else {
        return this.imagemMasterSrc
      }
    }
  }
}
</script>
