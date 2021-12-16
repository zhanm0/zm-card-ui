<template>
<!--  <card v-bind="$attrs"></card>-->


<!--  <m-card imgSrc="/zm-card-ui/logo.png" summary="Vue" />-->

  <card imgSrc="/zm-card-ui/logo.png" summary="Vue"></card>
</template>

<script>
  import card from '../../../components/lib/card/src/main'
  export default {
    name: "ZmCard1",
    components: {
      card
    },
  }
</script>

<style lang="scss">
  @import "./zm-card.scss";
</style>
