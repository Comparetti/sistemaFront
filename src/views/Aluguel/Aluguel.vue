<template>
  <v-card elevation="10">

    <v-card elevation="0">

      <v-card-title>Extrato do Aluguel</v-card-title>
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

      <template v-slot:item.listClientePos="{ item }">
        <v-dialog
          v-model="dialog"
         max-width="500px"
         scrollable = "true"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              tile
              large
              color="blue"
              icon
            >
              <v-icon
                dark
                v-on="on"
              >visibility</v-icon>
            </v-btn>

          </template>
<v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
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
      headerss: [
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
    await this.ActionFindAluguellist()
    this.desserts = this.aluguellist
  },
  computed: {
    ...mapState('aluguellist', ['aluguellist'])
  },
  methods: {
    ...mapActions('aluguellist', ['ActionFindAluguellist']),
    getStatus (statusCobranca) {
      if (statusCobranca === 'Correto') return 'green'
      else return 'red'
    }
  }
}
</script>
