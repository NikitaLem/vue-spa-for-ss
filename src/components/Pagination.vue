<style lang="scss" scoped>
    .app-pagination {
        min-width: 320px;
        display: flex;
        justify-content: center;
    }
</style>

<template>
    <div class="app-pagination btn-group">
        <button class="btn btn-info btn-lg">Previous</button>
        <button class="btn btn-info btn-lg">1</button>
        <button class="btn btn-info btn-lg">2</button>
        <button class="btn btn-info btn-lg">3</button>
        <button class="btn btn-info btn-lg">Next</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
}
</script>
