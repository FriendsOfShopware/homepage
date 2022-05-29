<template>
  <div class="how-to-contribute">
    <div class="text">
      <h3>How to contribute</h3>
      <p>
        If you want to contribute your own plugins, please be aware that we won’t guarantee admission before you provide
        at least a functional prototype. The important thing is that you are convinced by your idea and you should be
        developing solely for this occasion. Speak with us on
        <a href="https://slack.shopware.com" target="_blank" rel="noopener">Slack!</a>
      </p>
    </div>
    <img src="../assets/blue_heart.svg" width="100" height="100" loading="lazy" alt="Community <3" />
  </div>
</template>

<script>
export default {
  name: "frosh-how-to-contribute",
};
</script>

<style scoped lang="scss">
.how-to-contribute {
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
