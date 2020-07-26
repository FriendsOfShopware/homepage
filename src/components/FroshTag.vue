<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FroshTag"
};
</script>

<style scoped lang="scss">
.tag {
  border-radius: 20px;
  padding: calc(#{$default-margin} / 2) 0;
  justify-content: center;
  background-color: $highlight;
  align-self: center;
  font-size: $font-size-sm;
  width: 150px;
  text-align: center;
}
</style>
