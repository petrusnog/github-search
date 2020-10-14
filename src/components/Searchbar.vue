<template lang="html">
    <div>
        <div class="search-bar" :class="{ 'errored' : errored }">
            <input v-model="query" @input="onTyping()" type="text" placeholder="Nome de usuário. Ex: 'SamuraiPetrus'">
            <button type="button" class="animation" name="button" @click="onSearch()">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div v-show="errored" class="errored">
            Usuário não encontrado. Desculpa. &#9785;
        </div>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              query: '',
              errored: false
          }
      },

      computed: {
          sanitize_query: function () {
              return this.query.replace(/ /g, '');
          }
      },

      methods: {
          onSearch() {
              this.$emit('loading');
              axios
              .get('https://api.github.com/users/' + this.sanitize_query )
              .then( response => {
                  console.log( response );
                  this.$emit( 'user-found', response.data );
              })
              .catch( error => {
                  console.log(error)
                  this.errored = true
              })
              .finally( () => this.$emit('loaded') );
          },
          onTyping() {
              if ( this.errored ) {
                  this.errored = false
              }
          }
      }
  }
</script>

<style lang="css" scoped>

    .search-bar {
        width: 100%;
        height: 50px;
        display: flex;
        border: 3px solid #363636;
    }

    .search-bar.errored{
        border: 3px solid #a10000;
    }

    .errored{
        color: #a10000;
        margin-top: 10px;
    }

    .search-bar input[type=text] {
        width: 80%;
        text-indent: 10px;
        font-size: 20px;
    }

    .search-bar button {
        width: 20%;
        border: none;
        background: #363636;
        color: #fff;
        border-left: 3px solid #363636;
        transition: all .5s;
    }

    .search-bar button:hover{
        background: transparent;
        color: #363636;
    }

    .search-bar button:focus{
      background: #757575;
    }

    .search-bar .fas{
        font-size: 18px;
    }

    .search-bar button,
    .search-bar input[type=text] {
        height: 100%;
    }

    @media screen and ( min-width: 768px ) {
        .search-bar{
            width: 700px;
        }
    }

</style>
