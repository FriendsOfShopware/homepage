<template>
  <div class="featured">
    <h3 class="headline">Featured projects</h3>
    <div class="projects-line">
      <frosh-project v-for="singleProject in topProjects" :key="singleProject.name" :project="singleProject" />
    </div>
    <div class="all-projects">
      <frosh-button href="#">All plugins on Shopware store</frosh-button>
      <frosh-button variant="blank" href="#">All projects on GitHub</frosh-button>
    </div>
  </div>
</template>

<script>
import FroshProject from "./FroshProject";
import FroshButton from "./FroshButton";
import GitHubClient from "@/service/github-client.service";

export default {
  name: "frosh-featured-projects",

  components: {
    FroshButton,
    FroshProject
  },

  data() {
    return {
      topProjects: ""
    };
  },

  async mounted() {
    const response = await GitHubClient.get("/repositories");
    this.topProjects = response.splice(0, 4);
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
