<template>
  <div class="jumbotron">
    <div class="text-view">
      <h1 class="headline">
        Banded developers who build Shopware Plugins
      </h1>
      <h2 class="more-info">
        Friends of Shopware is a group of passionate developers who have banded together to build Shopware Plugins of
        the highest quality possible, using modern tools, standard and practices.
      </h2>
      <div class="important-links">
        <a class="button" href="https://gitter.im/FriendsOfShopware/Lobby">Join us on Gitter</a>
        <a class="button no-background" href="https://github.com/FriendsOfShopware">Projects on GitHub</a>
      </div>
    </div>
    <img src="../assets/jumbotron-image.png" alt="The bonded developers" class="image-view" />
  </div>
</template>

<script>
export default {
  name: "entry-jumbotron"
};
</script>

<style scoped lang="scss">
.jumbotron {
  color: $font;
  display: inline-flex;
  width: 100%;
  padding: calc(#{$default-padding} * 3) 0;
}

.text-view {
  width: 50%;
  margin: $default-margin;
  align-self: center;

  .headline {
    font-size: 2.25rem;
  }

  .more-info {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: normal;
  }

  .important-links {
    padding: calc(#{$default-padding} * 2) 0;
  }
}

.image-view {
  width: 50%;
}
</style>
