<template>
  <div id="app">
<!--    <img alt="Vue logo" examples="./assets/logo.png">-->
    <Demo />
    <zm-card img-src="1.png" summary="Vite零基础快速入门" />
    <br />
    <zm-card img-src="2.png" summary="玩转组件库搭建全流程">
      <template v-slot:zm-card-footer>
        <div class="footer">
          <div class="level">中级 · 555人报名</div>
          <div class="price">¥199.00</div>
        </div>
      </template>
    </zm-card>
    <br />
    <zm-card img-src="3.png" :width="370" :img-height="90">
      2小时极速入门 TypeScript
      <template v-slot:zm-card-footer>
        <div class="footer-spring">
          <div class="level">免费</div>
          <div class="level">10898收藏</div>
        </div>
      </template>
    </zm-card>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .level {
    color: #9199a1;
    margin-bottom: 8px;
  }
  .price {
    color: #f01414;
  }
  .footer,
  .footer-spring {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    font-size: 12px;
  }
}
</style>
