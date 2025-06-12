<template lang="html">
    <div class="backbutton">
        <div class="icon" @click="onBackButtonClicked()">
        <Iconedinfo icon="fa-arrow-circle-left" size="40px">
            <slot name="arrow-circle-left"></slot>
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
        link: { default: true }
    },
    methods: {
        onBackButtonClicked() {
            Event.fire('back-button-clicked');
        }
    }
}
</script>

<style lang="css" scoped>
  .backbutton div{
    font-weight: bolder;
    color: #363636;
    font-size: 48px;
    margin-bottom: 10px;
    display: block;
    cursor: pointer;
  }
</style>
