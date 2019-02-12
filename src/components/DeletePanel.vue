<style lang="scss" scoped>
    .delete-panel {
        position: absolute;
        right: 0;
        width: 0px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;

        button {
            background-color: #ffc107;
            color: #fff
        }
    }
</style>

<template>
    <div class="delete-panel bg-danger" :style="{  top: sizes.y + 'px', height: sizes.height + 'px' }">
        <span v-if="isActive">{{ player.username }}</span>
        <span v-if="isActive">{{ player.address.zipcode }}</span>
        <span v-if="isActive">Delete this player?</span>
        <div v-if="isActive" class="btn-group">
            <button type="button" class="btn" stryle="color: #fff">Yes</button>
            <button type="button" class="btn" stryle="color: #fff">No</button>
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'DeletePanel',

    props: {
        isActive: {
            type: Boolean,
            default: false,
        },

        sizes: {
            type: Object,
            default: () => ({})
        },

        player: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        styleObj() {
            return {
                top: this.sizes.y + 'px', 
                height: this.sizes.height + 'px'
            }
        },
    },

    watch: {
        isActive() {
            if (this.isActive) { console.log(this.sizes);
                anime({
                    targets: '.delete-panel',
                    width: this.sizes.width + 'px'
                });
            } else {
                anime({
                    targets: '.delete-panel',
                    width: '0px'
                });
            }
        },
    },
}
</script>
