<template>
  <div class="hello">
    <Header/>
    <div class="container mrgnbtm"  style="display: flex; justify-content: center; flex-wrap: wrap;flex-direction: column;">
          <div class="row">
            <CargoGerenciamento/>
          </div>
          <div class="row">
            <PerfilGerenciamento/>
          </div>
          <div class="row">
            <UsuarioGerenciamento/>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
// import CreateUser from './createUser.vue'
// import CreateCargo from './createCargo.vue'
import CargoGerenciamento from './cargoGerenciamento.vue'
import PerfilGerenciamento from './perfilGerenciamento.vue'
import UsuarioGerenciamento from './usuarioGerenciamento.vue'
// import DisplayBoard from './displayBoard.vue'
import Users from './users.vue'
import { getAllUsers, createUser } from '../services/userService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    // CreateCargo,
    CargoGerenciamento,
    PerfilGerenciamento,
    UsuarioGerenciamento,
    // DisplayBoard,
    Users
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    userCreate(data) {
      console.log('data:::', data)
      data.id = this.numberOfUsers + 1
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  }
  // mounted () {
  //   this.getAllUsers();
  // }
}
</script>