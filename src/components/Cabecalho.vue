<template lang="html">
  <header class="cabecalho">
    <div class="icon-back">
        <Backbutton></Backbutton>
        <Searchtitle cabecalho="true"></Searchtitle>
    </div>
    <Searchbar></Searchbar>
  </header>
</template>

<script>
  import Searchtitle from './Searchtitle.vue';
  import Searchbar from './Searchbar.vue';
  import Backbutton from './Backbutton.vue';

  export default {
      components: {
          Searchtitle,
          Searchbar,
          Backbutton
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

    .icon-back {
        display: flex;
    }

    .icon-back div:first-child {
        margin-right: 20px;
    }

    @media screen and ( min-width: 1100px ) {
        .cabecalho{
            flex-direction: row;
            height: 80px;
        }
    }
</style>
