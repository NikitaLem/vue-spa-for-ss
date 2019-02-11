<style lang="scss" scoped>
    .edit-panel {
        background-color: purple;
        width: 0vw;
        height: 0vh;
    }
</style>

<template>
    <div class="edit-panel"></div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'EditPanel',

    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    },
 
    mounted() {
        anime({
            targets: '.edit-panel',
            width: '95vw',
            height: '33vh'
        })
    }
}
</script>
