<template>
  <v-card elevation="10">

    <v-card elevation="0">
      <v-card-title>Extrato do Aluguel</v-card-title>
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

      <template v-slot:item.totalAluguel="{ item }">
        <span>{{formatCurrency(item.totalAluguel)}}</span>
      </template>
      <template v-slot:item.totalRecebido="{ item }">
        <span>{{formatCurrency(item.totalRecebido)}}</span>
      </template>

      <template v-slot:item.listClientePos="{ item }">
        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
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
          </template>
        </v-dialog>
      </template>

      <template v-slot:item.cpfcnpj="{ item }">
        <v-tooltip right="">
          <template v-slot:activator="{ on }">
            <span v-on="on">{{item.cpfcnpj}}</span>
          </template>
          <span>{{item.nomeRazao}}</span>
        </v-tooltip>
      </template>

      <template v-slot:item.statusCobranca="{ item }">
        <v-chip
          :color="getStatus(item.statusCobranca)"
          dark
        >{{ item.statusCobranca }}</v-chip>
      </template>

    </v-data-table>

  </v-card>

</template>

<script>
import { currencyFormatter } from '@/utils'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Data Cobrança',
          align: 'center',
          sortable: false,
          value: 'dataCadastro'
        },
        { text: 'Cliente', value: 'cpfcnpj' },
        { text: 'POS Cadastradas', align: 'center', value: 'posCadastradas' },
        { text: 'POS Cobradas', align: 'center', value: 'posCobradas' },
        { text: 'Total de Aluguel', align: 'center', value: 'totalAluguel' },
        { text: 'Total Recebido', align: 'center', value: 'totalRecebido' },
        { text: 'Status', align: 'center', value: 'statusCobranca' },
        { text: 'POS', align: 'center', value: 'listClientePos' }
      ],
      desserts: [],
      aluguelList: []
    }
  },
  async created () {
    await this.ActionFindAluguellist()
    this.desserts = this.aluguellist
  },
  computed: {
    ...mapState('aluguellist', ['aluguellist'])
  },
  methods: {
    ...mapActions('aluguellist', ['ActionFindAluguellist']),
    formatCurrency (value) {
      return currencyFormatter().format(value)
    },
    getStatus (statusCobranca) {
      if (statusCobranca === 'Correto') return 'green'
      else return 'red'
    }
  }
}
</script>
