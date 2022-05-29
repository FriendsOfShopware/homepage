<template>
  <div class="project">
    <div class="name">
      <a :href="'https://github.com/FriendsOfShopware/' + project.name" target="_blank" rel="noopener">{{
        project.name
      }}</a>
    </div>
    <div class="description">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "frosh-project",
  props: {
    project: Object,
  },
};
</script>

<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
  background-color: $highlight-background;
  padding: $default-padding;
  margin: $default-margin;
  border-radius: 10px;
  flex: 1 0;
  height: inherit;
}

.name {
  font-weight: bold;
  font-size: 1.2rem;
}

.description {
  color: rgba($font, 0.7);
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin: calc(#{$default-margin} / 2) 0;
  white-space: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
  height: 100%;
}
</style>
