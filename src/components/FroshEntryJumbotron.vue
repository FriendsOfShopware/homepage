<template>
  <div class="jumbotron">
    <div class="text-view">
      <h1 class="headline">Banded developers who build Shopware Plugins</h1>
      <h2 class="more-info">
        Friends of Shopware is a group of passionate developers who have banded together to build Shopware Plugins of
        the highest quality possible, using modern tools, standard and practices.
      </h2>
      <div class="important-links">
        <frosh-button href="https://slack.shopware.com">Join us on Shopware Slack</frosh-button>
        <frosh-button variant="blank" href="https://github.com/FriendsOfShopware">Projects on GitHub</frosh-button>
      </div>
    </div>
    <!-- @todo: Replace with actual image, when all people have approved -->
    <div class="image-view"></div>
    <!--<img src="../assets/jumbotron-image.png" alt="The bonded developers" class="image-view" /> -->
  </div>
</template>

<script>
import FroshButton from "./FroshButton";

export default {
  name: "frosh-entry-jumbotron",

  components: { FroshButton },
};
</script>

<style scoped>
.jumbotron {
  color: var(--font);
  display: grid;
  width: 100%;
  padding: calc(var(--default-padding) * 3) 0;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.text-view {
  margin: var(--default-margin);
  align-self: center;
}

.headline {
  font-size: 2.25rem;
}

.more-info {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: normal;
}

.important-links {
  padding: calc(var(--default-padding) * 2) 0;
}

.frosh-button:not(:last-child) {
  margin-right: var(--default-margin);
}

.image-view {
  max-width: 100%;
}
</style>
