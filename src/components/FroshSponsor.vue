<template>
  <div class="how-to-sponsors">
    <div class="text">
      <h3>Our sponsors</h3>
      <p>
        Our sponsor
        <a href="https://www.jetbrains.com/?from=FriendsOfShopware" target="_blank" rel="noopener">Jetbrains</a>
        sponsors us since three years their awesome IDEs and <a href="https://namespace.so">Namespace.so</a> providing us with Faster GitHub Actions runners and multi arch docker images.
      </p>
    </div>
    <a href="https://www.jetbrains.com/?from=FriendsOfShopware" target="_blank" rel="noopener">
      <img src="../assets/jetbrains.svg" width="100" height="100" loading="lazy" alt="Jetbrains"/>
    </a>
    <a href="https://namespace.so" target="_blank" rel="noopener">
      <img src="../assets/namespace.png" width="100" height="100" loading="lazy" alt="Namespace.so"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "frosh-sponsors",
};
</script>

<style scoped lang="scss">
.how-to-sponsors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: var(--default-padding) calc(var(--default-padding) * 1.5);
  margin: var(--default-margin) 0;
}

.text {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-basis: 50%;
}

img {
  align-self: center;
  margin: var(--default-margin);
  height: 100px;
}
</style>
