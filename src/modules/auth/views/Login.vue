<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
    >

      <v-flex
        xs12
        sm6
        md4
        lg3
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="blue-grey lighten-1"
          >
            <v-toolbar-title>
              Login
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-progress-circular
              v-show="isLoading"
              indeterminate
              color="white"
              width="2"
            ></v-progress-circular>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-if="!isLogin"
                prepend-icon="person"
                name="name"
                label="Nome"
                type="text"
                :error-messages="nameErrors"
                :success="!$v.user.name.$invalid"
                v-model.trim="$v.user.name.$model"
              ></v-text-field>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                :error-messages="emailErrors"
                :success="!$v.user.email.$invalid"
                v-model.trim="$v.user.email.$model"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Senha"
                type="password"
                :error-messages="passwordErrors"
                :success="!$v.user.password.$invalid"
                v-model.trim="$v.user.password.$model"
              ></v-text-field>
            </v-form>
            <v-btn
              block
              depressed
              color="transparent"
              @click="isLogin = !isLogin"
            >
              {{texts.button}}
            </v-btn>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="$v.$invalid"
              color="blue-grey lighten-2"
              large
              @click="submit"
            >{{texts.toolbar}}</v-btn>
          </v-card-actions>

          <v-snackbar
            v-model="showSnackbar"
            top
          >
            {{error}}
            <v-btn
              color="pink"
              flat
              icon
              @click="showSnackbar = false"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',

  data: () => ({
    error: undefined,
    showSnackbar: false,
    isLogin: true,
    isLoading: false,
    user: {
      name: '',
      email: '',
      password: ''
    }
  }),
  validations () {
    const validations = {
      user: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    }
    if (this.isLogin) { return validations }

    return {
      user: {
        ...validations.user,
        name: {
          required,
          minLength: minLength(4)
        }
      }
    }
  },
  computed: {
    texts () {
      return this.isLogin
        ? { toolbar: 'Entrar', button: 'Criar conta' }
        : { toolbar: 'Criar conta', button: 'Já tenho conta' }
    },
    nameErrors () {
      const errors = []
      const name = this.$v.user.name
      if (!name.$dirty) { return errors }
      !name.required && errors.push('Nome é obrigatório!')
      !name.minLength && errors.push(`Insira pelo menos ${name.$params.minLength.min} caracteres!`)
      return errors
    },
    emailErrors () {
      const errors = []
      const email = this.$v.user.email
      if (!email.$dirty) { return errors }
      !email.required && errors.push('Email é obrigatório')
      !email.email && errors.push('Insira um email válido')
      return errors
    },
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) { return errors }
      !password.required && errors.push('password é obrigatório')
      !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} caracteres!`)
      return errors
    }
  },
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    ...mapActions('auth', ['ActionNewLogin']),
    async submit () {
      if (this.isLogin === true) {
        this.isLoading = true
        try {
          await this.ActionDoLogin(
            { 'email': this.user.email,
              'password': this.user.password
            })
          this.$router.push({ name: 'home' })
        } catch (err) {
          console.log(err)
          this.error = err.data ? err.data : 'Não foi possível fazer login'
          this.showSnackbar = true
        } finally {
          this.isLoading = false
        }
      } else {
        try {
          this.isLoading = true

          await this.ActionNewLogin(
            { 'email': this.user.email,
              'password': this.user.password,
              'name': this.user.name
            })
          this.$router.push({ name: 'home' })
        } catch (err) {
          console.log(err)
          this.error = err.data ? err.data : 'Não foi possível fazer login'
          this.showSnackbar = true
        } finally {
          this.isLoading = false
        }
      }
    }
  }
}
</script>
