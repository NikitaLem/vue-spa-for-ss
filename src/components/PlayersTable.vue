<style lang="scss" scoped>
  .app-table {
    td {
      cursor: pointer;
      border: 0;
    }
  }
</style>

<template>
  <table class="table table-striped table-borderless table-hover app-table">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Balance</th>
          <th>Token</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="app-table__row" v-for="(player, index) in players" :key="index">
          <td>{{ player.id }}</td>
          <td>{{ player.username }}</td>
          <td>{{ player.address.zipcode }}</td>
          <td>{{ player.phone }}</td>
          <td>
            <router-link :to="{ name: 'player', params: { id: player.id, user: player, panelRect: rectForPlayerPanel } }">
              <button class="btn btn-info" @click="getRowRect($event)">
                <i class="fas fa-eye"></i>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'PlayersTable',

  props: {
    players: {
      type: Array,
      default: () => {[]},
    },
  },

  data () {
    return {
      rectForPlayerPanel: {},
    }
  },

  methods: {
    getRowRect(event) {
      const allTable = event.target.closest('.app-table');
      const activeRow = event.target.closest('.app-table__row');
      const rect = activeRow.getBoundingClientRect();
      this.rectForPlayerPanel = {
        y: rect.top,
        x: rect.left,
        height: rect.height,
        width: rect.width,
        parentY: allTable.getBoundingClientRect().top,
        parentHeight: allTable.getBoundingClientRect().height
      };
    }
  },

  updated() {
    anime({
        targets: '.app-table tr',
        opacity: [0, 1],
        delay: anime.stagger(60)
    });
  }
}
</script>

