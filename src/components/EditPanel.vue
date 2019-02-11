<style lang="scss" scoped>
    
</style>

<template>
    <div class="edit-panel" :class="{ 'edit-panel_active': isActive }"></div>
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
 
    // mounted() {
    //     anime({
    //         targets: '.edit-panel',
    //         width: '95vw',
    //         height: '33vh'
    //     })
    // }
}
</script>
