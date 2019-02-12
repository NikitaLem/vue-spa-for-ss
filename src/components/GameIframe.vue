<style lang="scss" scoped>
    .iframe-container {
        position: absolute;
        border: none;

        iframe {
            border: none;
        }
    }
</style>

<template>
    <div class="iframe-container card" :style="{ top: styleObj.y + 'px', left: styleObj.x + 'px', width: styleObj.width + 'px', height: styleObj.height + 'px' }">
        <router-link tag="button" class="btn btn-warning text-white" :to="{ name: '/'}">
            <i class="fas fa-arrow-up" style="font-size: 1.6rem"></i>
        </router-link>
        <iframe :src="src" :style="{ width: styleObj.width + 'px', height: styleObj.height + 'px' }"></iframe>
    </div>
</template>

<script>
export default {
    name: 'GameIframe',

    props: {
        src: {
            type: String,
            default: '/',
        },

        sizes: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        styleObj() {
            return {
                x: this.sizes.x,
                y: this.sizes.parentY,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight - this.sizes.parentY
            };
        },
    },
    
}
</script>
