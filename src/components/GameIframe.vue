<style lang="scss" scoped>
    .iframe-container {
        position: absolute;
        border: none;

        iframe {
            border: none;
        }

        button {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
</style>

<template>
    <div class="iframe-container card" :style="{ top: styleObj.y, left: styleObj.x, width: styleObj.width, height: styleObj.height }">
        <router-link tag="button" class="btn btn-warning text-white" :to="{ name: '/'}">
            <i class="fas fa-arrow-up" style="font-size: 1.6rem"></i>
        </router-link>
        <iframe :src="src" :style="{ width: styleObj.width, height: styleObj.height }"></iframe>
    </div>
</template>

<script>
export default {
    name: 'GameIframe',

    props: {
        id: {
            type: String,
            default: '1',
        },

        sizes: {
            type: Object,
            default: () => ({
                x: 0,
                y: 0,
                parentY: 50
            }),
        },
    },

    computed: {
        src() {
            switch (this.id) {
                case 1:
                    return 'https://game-launcher.beta.clockwork.soma.ac/game/1';
                case 2:
                    return 'https://game-launcher.beta.clockwork.soma.ac/game/1';
                case 3:
                    return 'https://game-launcher.beta.clockwork.soma.ac/game/1';
                default:
                    return 'https://game-launcher.beta.clockwork.soma.ac/game/1';
            }
        },

        styleObj() {
            return {
                x: this.sizes.x + 'px',
                y: this.sizes.parentY + 'px',
                width: document.documentElement.clientWidth + 'px',
                height: document.documentElement.clientHeight - this.sizes.parentY + 'px'
            };
        },
    },
    
}
</script>
