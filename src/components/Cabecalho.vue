<template lang="html">
  <header class="cabecalho">
      <Searchtitle cabecalho="true"></Searchtitle>
      <Searchbar></Searchbar>
  </header>
</template>

<script>
  import Searchtitle from './Searchtitle.vue';
  import Searchbar from './Searchbar.vue';
  export default {
      components: {
          Searchtitle,
          Searchbar
      }
  }
</script>

<style lang="css" scoped>
    .cabecalho{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
        flex-direction: column;
    }

    @media screen and ( min-width: 1100px ) {
        .cabecalho{
            flex-direction: row;
            height: 80px;
        }
    }
</style>
