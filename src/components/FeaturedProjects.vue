<template>
  <div class="featured">
    <h3 class="headline">Featured projects</h3>
    <div class="projects-line">
      <project v-for="singleProject in projects" :key="singleProject.name" :project="singleProject" />
    </div>
    <div class="all-projects">
      <frosh-button href="#">All plugins on Shopware store</frosh-button>
      <frosh-button variant="blank" href="#">All projects on GitHub</frosh-button>
    </div>
  </div>
</template>

<script>
import project from "./Project";
import featuredProjects from "./../dataSets/featuredProjects";
import FroshButton from "./FroshButton";

export default {
  name: "FeaturedProjects",

  components: {
    FroshButton,
    project
  },

  data() {
    return { projects: featuredProjects };
  }
};
</script>

<style scoped lang="scss">
.featured {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.headline {
  font-size: 1.75rem;
  font-weight: bold;
  width: 100%;
  height: 36px;
  text-align: center;
}

.projects-line {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);

  @include desktop {
    grid-template-columns: repeat(2, 1fr);
  }

  @include phone {
    grid-template-columns: 1fr;
  }
}

.all-projects {
  padding: calc(#{$default-padding} * 2) 0;

  .frosh-button:not(:last-child) {
    margin-right: $default-margin;
  }
}
</style>
