<style lang="scss" scoped>
  .app-table {

    td {
      cursor: pointer;
      border: 0;
    }
  }
</style>

<template>
<div style="width: 100%">
  <table class="table table-borderless app-table">
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
        <template v-for="(player, index) in players">
          <tr class="app-table__row" :key="index">
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
              <button class="btn btn-success player-edit" @click="showEditor(index)">
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button class="btn btn-danger player-remove" @click="readyForDelete($event, index)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
          <edit-panel :key="10 + index"
            :id="player.id"
            :player="player"
            :activeEditor="editorForShow"
            @editor-close="editorForShow = null"
            @editor-complete="onEditorComplete"
          ></edit-panel>
        </template>
      </tbody>
    </table>
    <delete-panel
      :player="players[playerForDeleting]"
      :sizes="rectForPlayerPanel"
      :isActive="deleteIntent"
      @cancel-deleting="cancelDeleting()"
    ></delete-panel>
</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import EditPanel from './EditPanel';
import DeletePanel from './DeletePanel';

export default {
  name: 'PlayersTable',

  components: {
    'edit-panel': EditPanel,
    'delete-panel': DeletePanel,
  },

  props: {
    players: {
      type: Array,
      default: () => {[]},
    },
  },

  data () {
    return {
      rectForPlayerPanel: {},
      editorForShow: null,
      deleteIntent: false,
      playerForDeleting: null,
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
    },

    readyForDelete(event, index) {
      if (this.editorForShow !== null) return;
      
      this.getRowRect(event);
      this.playerForDeleting = index;
      this.deleteIntent = true;
    },

    showEditor(index) {
      this.cancelDeleting();
      this.editorForShow = index;
    },

    onEditorComplete() {
      this.editorForShow = null;
    },

    cancelDeleting() {
      this.deleteIntent = false;
      this.playerForDeleting = null;
    }
  },

  mounted() {
    anime({
        targets: '.app-table__row',
        opacity: [0, 1],
        delay: anime.stagger(60)
    });
  }
}
</script>

