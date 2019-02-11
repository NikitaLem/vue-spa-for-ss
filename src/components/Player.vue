<style lang="scss" scoped>

    .player-card {
        position: absolute;
    }

    .player-card__header {
        display: flex;
        justify-content: space-between;
    }
    
</style>

<template>
    <div class="card player-card" :style="styleObj">
        <div class="box__header card-header bg-dark text-white player-card__header">
            <span>{{ `ID: ${id}` }}</span>
            <router-link tag="button" class="btn btn-warning text-white" :to="{ name: '/'}">
                <i class="fas fa-arrow-up" style="font-size: 1.6rem"></i>
            </router-link>
        </div>
        <div class="card-body">
            <p>
                <strong>{{ `USERNAME: ${user.name}` }}</strong>
            </p>
            <p>
                {{ user.phone }}
            </p>
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import Header from './Header'

export default {
    name: 'Player',

    components: {
    },

    props: {
        id : {
            type: Number,
            default: 0,
        },
        user: {
            type: Object,
            default: () => {},
        },
        panelRect: {
            type: Object,
            default: () => {},
        }
    },

    data() {
        return {

        }
    },

    computed: {
        styleObj() {
                if (Object.keys(this.panelRect).length > 0)
                    return {
                        top: this.panelRect.y + 'px',
                        left: this.panelRect.x + 'px',
                        width: this.panelRect.width + 'px'
                    };
        }
    },

    methods: {
    },

    mounted() {
        anime({
            targets: '.player-card',
            duration: 1000,
            easing: 'easeOutElastic()',
            translateY: this.panelRect.parentY - this.panelRect.y,
            height: this.panelRect.parentHeight + 'px'
        });
    }
}
</script>
