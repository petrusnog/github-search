<template lang="html">
    <div class="repo">
        <h2>
            <a :href="link" target="_blank">
                <slot name="title"></slot>
            </a>
        </h2>
        <p>
            <slot name="description"></slot>
        </p>
        <div class="repo-meta">
            <Iconedinfo icon="fa-star">
                <slot name="stars"></slot>
            </Iconedinfo>
        </div>
    </div>
</template>

<script>
    import Iconedinfo from './Iconedinfo.vue';

    export default {
        components: {
            Iconedinfo
        },
        props: {
            link: {}
        }
    }
</script>

<style lang="css" scoped>

  .repo{
      margin-bottom: 40px;
  }

  .repo:last-child{
      margin-bottom: 0;
  }

  .repo h2 a{
      font-weight: bolder;
      color: #363636;
      font-size: 28px;
      margin-bottom: 10px;
  }

  .repo p {
      font-size: 18px;
      color: #757575;
      margin-bottom: 20px;
  }

</style>
