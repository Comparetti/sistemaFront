<template>
  <v-card elevation="10">

      <v-card-title>Phoebus</v-card-title>

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
    >

      <template v-slot:item.confirmation_date="{ item }">
        <span>{{dateMoments(item.confirmation_date)}}</span>
      </template>
            <template v-slot:item.value="{ item }">
        <span>{{formatCurrency(item.value / 100)}}</span>
      </template>

      <template v-slot:item.brand="{ item }">
        <img
          :src="retornaImagem(item.brand)"
          style="width: 50px; height: 50px"
        />
      </template>

    </v-data-table>

  </v-card>

</template>

<script>
import moment from 'moment'
import { currencyFormatter } from '@/utils'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      imagemVisaSrc: require('../../assets/img/visa.png'),
      imagemMasterSrc: require('../../assets/img/mastercard.png'),
      name: 'Phoebus',
      search: '',
      headers: [
        {
          text: 'Transação POS - Phoebus',
          align: 'center',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'NSU', align: 'center', value: 'nsu' },
        { text: 'Cliente Cartão', align: 'center', value: 'card_holder' },
        { text: 'Bandeira', align: 'center', value: 'brand' },
        { text: 'Numero Cartao', align: 'center', value: 'card_number' },
        { text: 'Forma Pagamento', align: 'center', value: 'product_name' },
        { text: 'Valor', align: 'center', value: 'value' },
        { text: 'POS', align: 'center', value: 'terminal_serial_number' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindPhoebuslist()
    this.desserts = this.phoebuslist.results
  },
  computed: {
    ...mapState('phoebuslist', ['phoebuslist'])
  },
  methods: {
    ...mapActions('phoebuslist', ['ActionFindPhoebuslist']),
    retornaImagem (brand, date) {
      if (brand === 'VISA') {
        return this.imagemVisaSrc
      } else {
        return this.imagemMasterSrc
      }
    },
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    dateMoments (date) {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>
