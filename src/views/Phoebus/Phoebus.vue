<template>
  <v-card elevation="10">

    <v-card-title>Phoebus</v-card-title>

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
          v-model="dialog3"
          max-width="900px"
        >
          <v-card>
            <v-card-title
              class="headline blue-grey lighten-5"
              primary-title
            >
              <span>Phoebus</span>
              <v-spacer></v-spacer>
              <v-menu
                bottom
                right
                color="blue"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    v-on="on"
                  >
                    <v-icon color="blue darken-2">more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in menudialog"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-avatar>
                      <v-icon :color='item.color'>
                        {{item.icon}}
                      </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container>
                <span>Data</span>
                <v-divider></v-divider>
                <v-row>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.confirmation_date"
                      label="Data Confirmação"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.finish_date"
                      disabled="true"
                      label="Data Final"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <span>Transação</span>
                <v-divider></v-divider>
                <v-row>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.nsu"
                      label="NSU"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.authorization_number"
                      label="Autorizador"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.acquirer_nsu"
                      disabled="true"
                      label="Acquirer NSU"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <span>Cartão</span>
                <v-divider></v-divider>
                <v-row>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.card_holder"
                      label="Nome Cartão"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.card_number"
                      disabled="true"
                      label="Nº Cartão"
                      outlined
                      align="center"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.product_name"
                      label="Forma Pagamento"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-text-field
                      v-model="item.brand"
                      disabled="true"
                      label="Bandeira"
                      outlined
                      align="center"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <span>Terminal</span>
                <v-divider></v-divider>
                <v-row>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.terminal"
                      label="Terminal"
                      disabled="true"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.terminal_model"
                      disabled="true"
                      label="Modelo Maquina"
                      outlined
                      align="center"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                    sm="4"
                  >
                    <v-text-field
                      v-model="item.terminal_serial_number"
                      disabled="true"
                      label="Numero de Serie"
                      outlined
                      align="center"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-textarea
                    outlined
                    cols="8"
                    name="input-7-4"
                    background-color="grey lighten-2"
                    color="blue"
                    label="Observação :)"
                  ></v-textarea>
                  <v-btn
                    :loading="loading3"
                    :disabled="!valid"
                    color="success"
                    class="ma-2 white--text"
                    @click="validate"
                  >
                    Validar
                    <v-icon
                      right
                      dark
                    >done_outline</v-icon>
                  </v-btn>
                  <v-btn
                    :loading="loading3"
                    :disabled="!valid"
                    color="success"
                    class="ma-2 white--text"
                    @click="validate"
                  >
                    Validar
                    <v-icon
                      right
                      dark
                    >done_outline</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              icon
              @click="dialog3 = true"
            >
              <v-icon
                dark
                v-on="on"
              >visibility</v-icon>
            </v-btn>
          </template>
        </v-dialog>
      </template>

      <template v-slot:item.confirmation_date="{ item }">
        <span>{{dateMoments(item.confirmation_date)}}</span>
      </template>
      <template v-slot:item.value="{ item }">
        <span>{{formatCurrency(item.value / 100)}}</span>
      </template>

      <template v-slot:item.brand="{ item }">
        <v-tooltip right="">
          <template v-slot:activator="{ on }">
            <span v-on="on"> <img
                :src="retornaImagem(item.brand)"
                style="width: 50px; height: 50px"
              /></span>
          </template>
          <span>{{item.brand}}</span>
        </v-tooltip>
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
      imagemVisibiliSrc: require('../../assets/img/visibility.png'),
      imagemSincSrc: require('../../assets/img/sicmoney.svg'),
      name: 'Phoebus',
      search: '',
      valid: true,
      headers: [
        {
          text: 'Transação POS - Phoebus',
          align: 'center',
          sortable: false,
          value: 'confirmation_date'
        },
        { text: 'NSU', align: 'center', value: 'nsu' },
        { text: 'Nº Autorizador', align: 'center', value: 'authorization_number' },
        { text: 'Numero Cartao', align: 'center', value: 'card_number' },
        { text: 'Bandeira', align: 'center', value: 'brand' },
        { text: 'Valor', align: 'center', value: 'value' },
        { text: 'Detalhes', align: 'center', value: 'detalhe' }
      ],
      menudialog: [
        {
          title: 'Sincronizador',
          icon: 'build',
          color: 'blue-grey darken-4'
        },
        {
          title: 'Adicionar Analise',
          icon: 'warning',
          color: 'amber accent-4'
        }
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
      if (brand === 'VISA' || brand === 'VISA ELECTRON') {
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
