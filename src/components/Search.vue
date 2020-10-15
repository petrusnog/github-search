<template>
    <div v-show="show" class="search" :class="{ 'loading' : loading }">
        <searchtitle></searchtitle>
        <searchbar @loading="loadingQuery()" @loaded="loadedQuery()"></searchbar>
    </div>
</template>

<script>

    import Searchtitle from './Searchtitle.vue';
    import Searchbar from './Searchbar.vue';

    export default {
        components: {
            Searchtitle,
            Searchbar
        },

        data() {
            return {
              loading: false,
              show: true
            }
        },

        methods: {
            loadingQuery() {
              this.loading = true;
            },
            loadedQuery() {
              this.loading = false;
            },
            userFound() {
              this.show = false;
            }
        },

        created() {
            Event.listen('user-found', () => this.userFound() );
        }
    }

</script>


<style>

  .search{
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
  }

  .search.loading{
      opacity: .6;
  }

  @media screen and ( min-width: 768px ) {
      .search {
          height: 100vh;
          padding: 0;
      }
  }


</style>
