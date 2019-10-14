<template>
  <v-card>
    <v-card-title>
      Phoebus
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
          text: 'Transação POS - Phoebus',
          align: 'left',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'NSU', value: 'nsu' },
        { text: 'Cliente Cartão', value: 'card_holder' },
        { text: 'Bandeira', value: 'brand' },
        { text: 'Numero Cartao', value: 'card_number' },
        { text: 'Forma Pagamento', value: 'product_name' },
        { text: 'Valor', value: 'value' },
        { text: 'POS', value: 'terminal_serial_number' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindPhoebuslist()
    this.desserts = this.phoebuslist.results
    console.log(this.phoebuslist)
  },
  computed: {
    ...mapState('phoebuslist', ['phoebuslist'])
  },
  methods: {
    ...mapActions('phoebuslist', ['ActionFindPhoebuslist'])
  }
}
</script>
