<template>
  <v-card>
    <v-card-title>
      Analise
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
          text: 'Transação POS - Analise',
          align: 'left',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'Cliente', value: 'nomeRazao' },
        { text: 'CNPJ', value: 'cpfCnpj' },
        { text: 'NSU', value: 'nsu' },
        { text: 'Bandeira', value: 'phoebus.brand' },
        { text: 'Numero Cartao', value: 'card_number' },
        { text: 'Valor', value: 'phoebus.value' },
        { text: 'POS', value: 'phoebus.terminal_serial_number' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindAnaliselist()
    this.desserts = this.analiselist.results
    console.log(this.analiselist.results)
  },
  computed: {
    ...mapState('analiselist', ['analiselist'])
  },
  methods: {
    ...mapActions('analiselist', ['ActionFindAnaliselist'])
  }
}
</script>
