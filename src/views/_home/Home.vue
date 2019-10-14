<template>
  <div>
    <AppLayout>
    <router-view />
    </AppLayout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppLayout from './../../components/AppLayout'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user'])
  },
  components: {
    AppLayout
  }
}
</script>
