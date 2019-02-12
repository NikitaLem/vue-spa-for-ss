<style lang="scss" scoped>
    .new-player-card {
        position: absolute;
        height: 0;
        width: 100%;
    }

    .new-player-card__header {
        display: flex;
        justify-content: flex-end;
    }

    .new-player-card__body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        h2 {
            font-size: 2.4rem
        }

        .new-player-card__input {
            display: flex;
            justify-content: space-between;
            width: 50%;
            min-width: 320px;

            input {
                border: none;
                text-align: center;
                border-radius: .25rem;
            }
        }
    }
</style>

<template>
    <form>
        <div class="card new-player-card" :style="{ top: yCoord + 'px' }">
            <div class="card-header bg-dark text-white new-player-card__header">
                <router-link tag="button" class="btn btn-warning text-white" :to="{ name: '/'}">
                    <i class="fas fa-arrow-up" style="font-size: 1.6rem"></i>
                </router-link>
            </div>
            <div class="card-body bg-dark text-white new-player-card__body">
                <h2>Create new player</h2>
                <div class="new-player-card__input">
                    <label for="new-player-name">
                        Player name:
                    </label>
                    <input type="text" id="new-player-name" name="new-player-name">
                </div>
                <div class="new-player-card__input">
                    <label for="new-player-username">
                        Player username:
                    </label>
                    <input type="text" id="new-player-username" name="new-player-username">
                </div>
                <div class="new-player-card__input">
                    <label for="new-player-balance">
                        Player balance:
                    </label>
                    <input type="text" id="new-player-balance" name="new-player-balance">
                </div>
                <button class="btn btn-warning btn-lg" type="submit" @click="createPlayer($event)">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'NewPlayer',

    props: {
        yCoord: {
            type: Number,
            default: 0,
        },
    },

    methods: {
        createPlayer(event) {
            event.preventDefault();
        }
    },

    mounted() {
        anime({
            targets: '.new-player-card',
            height: '500px',
            easing: 'spring(1, 100, 10, 3)'
        });
    }
}
</script>
