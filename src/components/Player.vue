<style lang="scss" scoped>

    .player-card {
        position: absolute;
    
        .card-footer {
            height: 50%;

            .games-container {
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;

                a {
                    width: 30%;
                    max-width: 259px;
                    
                    :hover {
                        box-shadow: 0px 0px 8px #ffc107;
                    }
                }

                img {
                    border: 1px #ffc107 solid;
                    border-radius: 3px;
                }
            }
        }
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
        <div class="card-body bg-dark text-white">
            <p>
                <strong>{{ `USERNAME: ${user.name}` }}</strong>
            </p>
            <p>
                {{ `Balance: ${user.phone}` }}
            </p>
        </div>
        <div class="card-footer bg-dark text-white">
            <div class="games-container">
                <router-link
                    :to="{name: 'game', params: { id: '1', sizes: panelRect }}"
                >
                    <img src='../assets/dolphins_pearl_logo.jpg' style="width: 100%"/>
                </router-link>
                <router-link
                    :to="{name: 'game', params: { id: '1', sizes: panelRect }}"
                >
                    <img src='../assets/dolphins_pearl_logo.jpg' style="width: 100%"/>
                </router-link>
                <router-link
                    :to="{name: 'game', params: { id: '1', sizes: panelRect }}"
                >
                    <img src='../assets/dolphins_pearl_logo.jpg' style="width: 100%"/>
                </router-link>
            </div>
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
            default: () => ({}),
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
