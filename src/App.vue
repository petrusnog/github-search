<template>
    <div id="root">
        <Search></Search>
        <User></User>
    </div>
</template>

<script>

  import Search from './components/Search.vue';
  import User from './components/User.vue';

  export default {
    name: 'root',
    components: {
      Search,
      User
    },
  }

</script>

<style>

</style>
