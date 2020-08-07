<template>
  <div class="view">
    <frosh-entry-jumbotron class="component" />
    <frosh-featured-projects class="component" />
    <frosh-top-contributors class="component" />
    <frosh-how-to-member class="component" />
  </div>
</template>

<script>
import FroshEntryJumbotron from "@/components/FroshEntryJumbotron";
import FroshFeaturedProjects from "@/components/FroshFeaturedProjects";
import FroshTopContributors from "@/components/FroshTopContributors";
import FroshHowToMember from "@/components/FroshHowToMember";

export default {
  name: "Index",
  components: {
    FroshEntryJumbotron,
    FroshFeaturedProjects,
    FroshTopContributors,
    FroshHowToMember
  }
};
</script>

<style scoped lang="scss">
.component {
  margin-bottom: $spacer-component;

  @include tablet {
    margin-bottom: $spacer-component-mobile;
  }
}
</style>
