<template>
  <v-card
    elevation="10"
  >

    <v-card elevation="0">

      <v-card-title>Banco de dados - Intermeio</v-card-title>
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
    >
          <template v-slot:item.valor="{ item }">
        <span>R$ {{item.valor}}</span>
      </template>
    </v-data-table>

  </v-card>

</template>

<script>
import { mapActions, mapState } from 'vuex'
import { currencyFormatter } from '@/utils'
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Transação POS - Intermeio',
          align: 'left',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'Cliente', value: 'nomeRazao' },
        { text: 'CNPJ', value: 'cpfCnpj' },
        { text: 'NSU', value: 'nsu' },
        { text: 'Bandeira', value: 'bandeira' },
        { text: 'Numero Cartao', value: 'card_number' },
        { text: 'Valor', value: 'valor' },
        { text: 'POS', value: 'numeroDeSerie' }
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
    }
  }
}
</script>
