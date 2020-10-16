<template lang="html">
    <div style="position: relative;">
        <div class="search-bar" :class="{ 'errored' : errored }">
            <input v-model="query" @input="onTyping()" type="text" placeholder="Nome de usuário. Ex: 'SamuraiPetrus'" pattern="[a-zA-Z0-9]+">
            <button type="button" class="animation" name="button" @click="onSearch()" :disabled="forbidden_char">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="error-msg" :class="{ 'show' : forbidden_char }">
            Evite caracteres especiais.
        </div>
        <div class="error-msg" :class="{ 'show' : errored }">
            Usuário não encontrado. Desculpa. &#9785;<br>
            Evite acentos, ou caracteres especiais.
        </div>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              query: '',
              forbidden_char: false,
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
              if ( this.query ) {

                  Event.fire('loading');

                  axios
                  .get('https://api.github.com/users/' + this.sanitize_query )
                  .then( response => {

                      Event.fire( 'user-found', response.data );

                  })
                  .catch( error => {

                      this.errored = true

                  })
                  .finally( () => Event.fire('loaded') );
              }
          },
          onTyping() {
              if ( this.errored ) {
                  this.errored = false;
              }

              if ( this.query ) {
                  if ( ! this.query.match(/[a-zA-Z0-9]+/) ) {
                      this.forbidden_char = true;
                  } else {
                      this.forbidden_char = false;
                  }
              } else {
                  this.forbidden_char = false;
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
        transition: all .5s;
    }

    .search-bar.errored{
        border: 3px solid #a10000;
    }

    .search-bar.errored button {
        border-left: 3px solid #a10000;
    }

    .error-msg{
        color: #a10000;
        margin-top: 10px;
        position: absolute;
        opacity: 0;
        transition: all .5s;
    }

    .error-msg.show{
        opacity: 1;
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
