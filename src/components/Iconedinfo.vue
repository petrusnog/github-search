<template lang="html">
    <div class="iconed-info">
        <i class="fas" :class="icon"></i>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
      props: {
          icon: { required: true }
      }
    }
</script>

<style lang="css" scoped>

    .iconed-info{
        margin-bottom: 10px;
    }

    .iconed-info:last-child,
    .repo .iconed-info {
        margin-bottom: 0;
    }

    .repo .iconed-info{
        margin-right: 20px;
    }

    .iconed-info i {
        margin-right: 8px;
        font-size: 20px;
        width: 22px;
    }

    .iconed-info span{
        color: #757575;
    }

</style>
