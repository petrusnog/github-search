<template lang="html">
    <div class="user-profile">
        <figure>
            <img :src="avatar" :alt="name">
        </figure>
        <div>
            <h1 v-if="name">{{ name }}</h1>
            <p v-if="username">{{ username }}</p>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
          name: {},
          username: {},
          avatar: {}
      }
    }
</script>

<style lang="css" scoped>
    .user-profile{
        margin-bottom: 30px;
    }
    .user-profile figure {
        width: 100%;
        height: 300px;
        margin-bottom: 15px;
    }
    .user-profile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .user-profile h1, .user-profile p, .user-profile span{
        font-weight: lighter;
    }

    .user-profile h1 {
        font-size: 32px;
    }

    .user-profile p {
        font-size: 22px;
        color: #757575;
    }


</style>
