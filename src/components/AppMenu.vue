<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    :mini-variant.sync="mini"
    absolute
    temporary
  >
    <v-list>

      <v-list-item
        v-if="mini"
        @click.stop="mini = !mini"
      >
        <v-list-item-avatar>
          <v-list-item-title>
            <v-icon color="primary">
              chevron_right
            </v-icon>
          </v-list-item-title>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item v-if="!mini">
        <v-list-item-avatar>
          <v-icon color="primary">fingerprint</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>{{this.user.name}}</v-list-item-title>
        <v-list-item-action>
          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon color="primary">chevron_left</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider light></v-divider>

      <v-list-item
        v-for="item in itemsnav"
        :key="item.title"
        :to="item.url"
        :exact="item.exact"
        @click.stop="$emit('input', false)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.url"
          :exact="subItem.exact"
          @click.stop="$emit('input', false)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'AppMenu',
  props: {
    value: Boolean
  },
  data: () => ({
    items: [
      { title: 'Transações',
        icon: 'payment',
        url: '/',
        exact: true,
        items: [
          {
            title: 'Phoebus',
            url: '/Phoebaus',
            icon: 'icon-bell',
            exact: true
          },
          {
            title: 'Cloud Walker',
            url: '/',
            exact: true
          },
          {
            title: 'BD - Intermeio',
            url: '/intermeio',
            exact: true
          }
        ] },
      { title: 'POS',
        icon: 'account_balance_wallet',
        url: '/',
        exact: true,
        items: [
          {
            title: 'Aluguel',
            url: '/Phoebus',
            icon: 'icon-bell',
            exact: true
          },
          {
            title: 'Desativadas',
            url: '/intermeio',
            exact: true
          },
          {
            title: 'Consulta',
            url: '/',
            exact: true
          }
        ] }

    ],
    itemsnav: [
      { title: 'Home', icon: 'home', url: '/', exact: true },
      { title: 'Analise', icon: 'assignment_late', url: '/analise', exact: true }
    ],
    mini: true
  }),
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
