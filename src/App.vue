<template>
  <div id="app">
    <div class="user" v-for="user in allUsers" :key="user.id">
      <h2><b>Name: </b>{{user.name}}</h2>
      <p><b>Email:</b> {{user.email}}</p>
      <p><b>Phone:</b> {{user.phone}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'app',
  computed: mapGetters(['allUsers']),
  methods: mapActions(['fetchUsers']),
  async mounted() {
    // this.$store.dispatch('fetchUsers')

    //Передаем параметр - лимит пользователей для отображения
    this.fetchUsers(10);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 60px auto;
  width: 400px;
}

.user {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
