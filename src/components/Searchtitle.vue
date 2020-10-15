<template lang="html">
    <div class="search-title">
        <h1 v-if="!isCabecalho(cabecalho)"><strong>Github</strong> <i>Search</i></h1>
        <h2 v-if="isCabecalho(cabecalho)"><strong>Github</strong> <i>Search</i></h2>
    </div>
</template>

<script>
    export default {
        props: {
            cabecalho: { default: false }
        },
        methods: {
            isCabecalho ( cabecalho ) {
                if ( cabecalho ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style lang="css" scoped>

    .search-title h1, .search-title h2 {
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

    .cabecalho .search-title{
      margin-bottom: 20px;
    }

    .user .search-title h1, .user .search-title h2{
        font-size: 32px;
    }

    @media screen and ( min-width: 768px ) {
        .search-title h1 {
            font-size: 42px;
        }

        .search .search-title h1 {
            font-size: 64px;
        }

        .user .search-title h2{
            font-size: 42px;
        }
    }

    @media screen and ( min-width: 1100px ) {
        .cabecalho .search-title{
            margin-bottom: 0;
        }
    }


</style>
