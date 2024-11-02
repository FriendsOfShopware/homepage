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

<style scoped>
:root {
  --highlight-background: rgb(22, 23, 27);
  --default-padding: 12px;
  --default-margin: 12px;
  --font: #fff;
}

.project {
  display: flex;
  flex-direction: column;
  background-color: var(--highlight-background);
  padding: var(--default-padding);
  margin: var(--default-margin);
  border-radius: 10px;
  flex: 1 0;
  height: inherit;
}

.name {
  font-weight: bold;
  font-size: 1.2rem;
}

.description {
  color: rgba(var(--font), 0.7);
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin: calc(var(--default-margin) / 2) 0;
  white-space: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
  height: 100%;
}
</style>
