<template>
    <header class="app__header">
        <h1 class="app__header-text">
            <span>casino api testing</span>
        </h1>
        <router-link
            :to="{ name: 'newPlayer', params: { yCoord: height }}"
        >
            <button class="btn btn-warning" @click="getParentHeight($event)">New Player</button>
        </router-link>
    </header>
</template>

<style lang="scss" scoped>
    .app__header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5rem;
    
        a {
            position: absolute;
            top: 1.5rem;
            right: 2rem;
            font-size: 1.4rem;
            color: #ffc107;
        }

        a:hover {
            text-decoration: none;
            color: rgb(192, 158, 7);
        }
    }

    .app__header-text {

        span {
            font-size: 2.4rem;
            text-transform: uppercase;
        }
    }
</style>

<script>
export default {
    name: 'Header',

    data() {
        return {
            height: 0,
        }
    },

    methods: {
        getParentHeight(event) {console.log(1)
            this.height = event.target.parentElement.parentElement.offsetHeight;
        }
    }
}
</script>
