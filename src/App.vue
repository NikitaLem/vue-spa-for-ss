<style lang="scss">

html {
  font-size: 62.5%;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.table-wrapper {
  display: flex;
  justify-content: center;
}

</style>

<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <div class="table-wrapper">
        <players-table
          :players="players"
          @show-editor="showEditor()"
        ></players-table>
      </div>
      <edit-panel
        :isActive=editActive
      ></edit-panel>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import PlayersTable from './components/PlayersTable'
import Header from './components/Header'
import EditPanel from './components/EditPanel'

export default {
  name: 'App',

  components: {
    'app-header': Header,
    'players-table': PlayersTable,
    'edit-panel': EditPanel
  },

  data() {
    return {
      players: [],
      editActive: false,
    }
  },

  methods: {
    getPlayers() {
      axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
          this.players = response.data;
        })
        .catch(error => console.log(`Error: ${error}`));
    },

    showEditor() {
      this.editActive = true;
    },
  },

  mounted() {
    this.getPlayers();
  }
}
</script>