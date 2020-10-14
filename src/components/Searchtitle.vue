<template lang="html">
    <div class="search-title">
        <h1><strong>Github</strong> <i>Search</i></h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="css" scoped>

    .search-title h1, h2 {
        color: #363636;
        font-size: 38px;
    }

    .search-title h1 strong, .search-title h2 strong{
        font-family: 'Roboto Mono', sans-serif;
        font-weight: 700;
    }

    .search .search-title {
        margin-bottom: 20px;
        text-align: center;
    }

    @media screen and ( min-width: 768px ) {
        .search-title h1 {
            font-size: 42px;
        }

        .search .search-title h1 {
            font-size: 64px;
        }
    }


</style>
