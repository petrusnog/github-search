<template lang="html">
    <div class="repo">
        <h2>
            <slot name="title"></slot>
        </h2>
        <p>
            <slot name="description"></slot>
        </p>
        <Iconedinfo icon="fa-star">
            <slot name="stars"></slot>
        </Iconedinfo>
    </div>
</template>

<script>
    import Iconedinfo from './Iconedinfo.vue';
    export default {
        components: {
            Iconedinfo
        }
    }
</script>

<style lang="css" scoped>

  .repo{
      margin-bottom: 30px;
  }

  .repo:last-child{
      margin-bottom: 0;
  }

  .repo h2, .repo p {
      margin-bottom: 10px;
  }

  .repo h2 {
      font-weight: lighter;
      font-size: 28px;
  }

  .repo p {
      font-size: 18px;
      color: #757575;
  }

</style>
