<template>
    <header class="app__header">
      <h1 class="app__header-text">casino api testing</h1>
    </header>
</template>

<style lang="scss" scoped>
    .app__header {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5rem;
    }

    .app__header-text {
        font-size: 2.4rem;
        text-transform: uppercase;
    }
</style>

<script>
export default {
    name: 'Header',
}
</script>
