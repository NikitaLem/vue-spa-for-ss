<style lang="scss" scoped>
    
    .edit-panel {
        width: 100%;
        background-color: #343a40;
        height: 0;

        td {
            padding: 0;
            vertical-align: middle;
        }

        input {
            width: 100px;
            border: none;
            text-align: center;
            border-radius: .25rem;
        }
    }

</style>

<template>
    <tr class="edit-panel" :class="`edit-panel-${id}`">
        <td></td>
        <td>
            <input class="bg-warning" v-if="isActive" type="text" name="new-name" :value="player.username">
        </td>
        <td>
            <input class="bg-warning" v-if="isActive" type="text" name="new-balance" :value="player.address.zipcode">
        </td>
        <td>
            <span v-if="isActive" style="color: white">{{ player.phone }}</span>
        </td>
        <td>
            <button v-if="isActive" type="button" class="btn btn-warning" @click="completeEdition()">
                <i class="fas fa-check"></i>
            </button>
            <button v-if="isActive" type="button" class="btn btn-warning" @click="$emit('editor-close')">
                <i class="fas fa-arrow-up"></i>
            </button>
        </td>
    </tr>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'EditPanel',

    props: {
        id: {
            type: Number,
            default: 0,
        },

        height: {
            type: Number,
            default: 45,
        },

        player: {
            type: Object,
            default: () => ({}),
        },

        activeEditor: {
            type: Number,
            default: null,
        }
    },

    computed: {
        isActive() {
            if (this.activeEditor === this.id - 1) return true;
            else return false;
        }
    },

    watch: {
        isActive() {
            if (this.isActive) {
                anime({
                    targets: `.edit-panel-${this.id}`,
                    height: this.height + 'px'
                });
                anime({
                    targets: `.edit-panel-${this.id} td`,
                    padding: '0.75rem'
                });
            } else {
                anime({
                    targets: `.edit-panel-${this.id}`,
                    height: '0px',
                });
                anime({
                    targets: `.edit-panel-${this.id} td`,
                    padding: '0rem',
                });
            }
        }
    },

    methods: {
        completeEdition() {
            this.$emit('editor-complete');
        }
    }
}
</script>
