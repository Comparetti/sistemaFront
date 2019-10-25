<template>
  <v-card elevation="10">

    <v-card elevation="0">

      <v-card-title>Consulta</v-card-title>
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
          text: 'Cliente',
          align: 'left',
          sortable: false,
          value: 'cpfcnpj'
        },
        { text: 'Numero Serie', value: 'numeroDeSerie' },
        { text: 'Numero Logico', value: 'numeroLogico' },
        { text: 'Modelo', value: 'modelo' },
        { text: 'Dia Vencimento', value: 'diaVencimento' },
        { text: 'Valor Aluguel', value: 'valorAluguel' },
        { text: 'Desconto Faturamento', value: 'descontoEmFaturamento' },
        { text: 'Status', value: 'posStatus' }
      ],
      desserts: []
    }
  },
  async mounted () {
    await this.ActionFindConsultalist()
    this.desserts = this.consultalist
  },
  computed: {
    ...mapState('consultalist', ['consultalist'])
  },
  methods: {
    ...mapActions('consultalist', ['ActionFindConsultalist'])
  }
}
</script>
