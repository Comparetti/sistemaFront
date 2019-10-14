<template>
  <v-card>
    <v-card-title>
      Intermeio
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
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    console.log(this.intermeiolist.results)
  },
  computed: {
    ...mapState('intermeiolist', ['intermeiolist'])
  },
  methods: {
    ...mapActions('intermeiolist', ['ActionFindIntermeiolist'])
  }
}
</script>
