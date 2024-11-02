<template>
  <div class="how-to-member">
    <div class="text">
      <h3>How to become a Frosh</h3>
      <p>
        All maintainers of a project are automatically in the Friends of Shopware group. That doesn't mean that you have
        to provide an own plugin. Contributing to our existing plugins is also very important and we are always glad to
        find new developers for our exciting projects.
      </p>
    </div>
    <img src="../assets/frosh-old.svg" width="100" height="100" loading="lazy" alt="Friends of Shopware Logo" />
  </div>
</template>

<script>
export default {
  name: "frosh-how-to-member",
};
</script>

<style scoped>
.how-to-member {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: var(--default-padding) calc(var(--default-padding) * 1.5);
  margin: var(--default-margin) 0;

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
}
</style>
