<template lang="html">
    <a class="button" :href="link" target="_blank"><slot></slot></a>
</template>

<script>
export default {
    props: {
        link: { default: true }
    }
}
</script>

<style lang="css" scoped>
  a.button{
      background: #363636;
      color: #fff;
      display: flex;
      border-radius: 100px;
      width: -moz-fit-content;
      width: fit-content;
      text-decoration: none;
      padding: 10px 20px;
      border: 3px solid #363636;
      font-weight: bolder;
      letter-spacing: 1px;
  }
  a.button:hover{
      background: transparent;
      color: #363636;
  }
</style>
