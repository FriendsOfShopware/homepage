<template>
  <div class="how-to-sponsors">
    <div class="text">
      <h3>Our sponsors</h3>
      <p>
        Our sponsor <a href="https://www.jetbrains.com/?from=FriendsOfShopware" target="_blank" rel="noopener">Jetbrains</a> sponsors us since two years their awesome IDEs. PhpStorm with the <a href="https://plugins.jetbrains.com/plugin/7219-symfony-support" target="_blank" rel="noopener">Symfony Plugin</a> is an must have for any Shopware developers. Checkout their IDEs to make your life easier.
      </p>
    </div>
    <a href="https://www.jetbrains.com/?from=FriendsOfShopware" target="_blank" rel="noopener"><img src="../assets/jetbrains.svg" width="100" height="100" loading="lazy" alt="Jetbrains" /></a>
  </div>
</template>

<script>
export default {
  name: "frosh-sponsors"
};
</script>

<style scoped lang="scss">
.how-to-sponsors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 1px solid $border;
  border-radius: $border-radius;
  padding: $default-padding calc(#{$default-padding} * 1.5);
  margin: $default-margin 0;
}

.text {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-basis: 50%;
}

img {
  align-self: center;
  margin: $default-margin;
  height: 100px;
}
</style>
