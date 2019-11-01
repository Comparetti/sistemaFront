<template>
  <v-app-bar
    app
    fixed
    color="grey lighten-3"
  >
  <v-app-bar-nav-icon @click.stop="$emit('hide', !show)"></v-app-bar-nav-icon>
    <v-toolbar-title>Suporte</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  }
}
</script>
