<style lang="scss" scoped>
    .delete-panel {
        position: absolute;
        right: 0;
        width: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;

        button {
            background-color: #ffffff;
        }

        button:hover {
            background-color: #ffc107!important;
            color: #fff!important;
        }

        span {
            padding-left: .75rem;
        }

        span:nth-child(1) {
            flex-basis: 5.8%;
        }

        span:nth-child(2) {
            flex-basis: 25.47%;
        }

        span:nth-child(3) {
            flex-basis: 17.53%;
        }

        span:nth-child(4) {
            flex-basis: 32.66%;
        }

        span:nth-child(5) {
            flex-basis: 18.54%;
        }
    }
</style>

<template>
    <div class="delete-panel bg-danger" :style="{  top: sizes.y + 'px', height: sizes.height + 'px' }">
        <span></span>
        <span v-if="isActive">{{ player.username }}</span>
        <span v-if="isActive">{{ player.address.zipcode }}</span>
        <span v-if="isActive">Delete this player?</span>
        <span v-if="isActive">
            <span class="btn-group">
                <button type="button" class="btn text-danger" stryle="color: #fff">Yes</button>
                <button type="button" class="btn text-danger" stryle="color: #fff" @click="$emit('cancel-deleting')">No</button>
            </span>
        </span>
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
            if (this.isActive) {
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
