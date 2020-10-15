<template lang="html">
    <div class="user-profile">
        <figure>
            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-mr-robot-rami-malek.jpg" alt="foto de perfil do usuário Elliot Alderson">
        </figure>
        <div>
            <h1>Elliot Alderson</h1>
            <p>misterRobot</p>
        </div>
    </div>
</template>

<script>
    export default {
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
