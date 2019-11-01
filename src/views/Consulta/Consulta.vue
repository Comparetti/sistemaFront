<template>
  <v-card elevation="10">

    <v-card elevation="0">

      <v-card-title>Consulta</v-card-title>
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
      <template v-slot:item.valorAluguel="{ item }">
        <span>{{formatCurrency(item.valorAluguel)}}</span>
      </template>

      <template v-slot:item.cpfcnpj="{ item }">
        <v-tooltip right="">
          <template v-slot:activator="{ on }">
            <span v-on="on">{{item.cpfcnpj}}</span>
          </template>
          <span>{{item.nomeRazao}}</span>
        </v-tooltip>
      </template>

      <template v-slot:item.posStatus="{ item }">
        <v-chip
          :color="getStatus(item.posStatus)"
          dark
        >{{ item.posStatus }}</v-chip>
      </template>

      <template v-slot:item.descontoEmFaturamento="{ item }">
        <v-chip
          :color="getStatus(item.descontoEmFaturamento)"
          dark
        >{{ item.descontoEmFaturamento }}</v-chip>
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
          text: 'Cliente',
          align: 'left',
          sortable: false,
          value: 'cpfcnpj'
        },
        { text: 'Numero Serie', align: 'center', value: 'numeroDeSerie' },
        { text: 'Numero Logico', align: 'center', value: 'numeroLogico' },
        { text: 'Modelo', align: 'center', value: 'modelo' },
        { text: 'Dia Vencimento', align: 'center', value: 'diaVencimento' },
        { text: 'Valor Aluguel', align: 'center', value: 'valorAluguel' },
        { text: 'Desconto Faturamento', align: 'center', value: 'descontoEmFaturamento' },
        { text: 'Status', align: 'center', value: 'posStatus' }
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
    ...mapActions('consultalist', ['ActionFindConsultalist']),
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    getStatus (statusCobranca) {
      if (statusCobranca === 'Ativo') return 'green'
      else return 'red'
    }
  }
}
</script>
