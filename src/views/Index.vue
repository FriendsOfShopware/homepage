<template>
  <div class="view">
    <frosh-entry-jumbotron class="component" />
    <frosh-featured-projects class="component" />
    <frosh-top-contributors class="component" />
    <frosh-how-to-member class="component" />
    <frosh-how-to-contribute class="component" />
    <frosh-sponsor class="component" />
  </div>
</template>

<script>
import FroshEntryJumbotron from "@/components/FroshEntryJumbotron";
import FroshFeaturedProjects from "@/components/FroshFeaturedProjects";
import FroshTopContributors from "@/components/FroshTopContributors";
import FroshHowToMember from "@/components/FroshHowToMember";
import FroshHowToContribute from "@/components/FroshHowToContribute";
import FroshSponsor from "@/components/FroshSponsor";

export default {
  name: "IndexPage",

  metaInfo() {
    return {
      title: this.metaTitle,
      meta: [
        {
          name: "description",
          content: this.metaDescription,
        },
        {
          name: "og:title",
          content: this.metaTitle,
          vmid: "og:title",
        },
        {
          name: "og:description",
          content: this.metaDescription,
          vmid: "og:title",
        },
      ],
    };
  },

  components: {
    FroshEntryJumbotron,
    FroshFeaturedProjects,
    FroshTopContributors,
    FroshHowToMember,
    FroshHowToContribute,
    FroshSponsor,
  },

  computed: {
    metaTitle() {
      return "Home";
    },

    metaDescription() {
      return "Friends of Shopware is a group of passionate developers who have banded together to build Shopware Plugins of the highest quality possible, using modern tools, standard and practices.";
    },
  },
};
</script>

<style scoped lang="scss">
.component {
  margin-bottom: var(--spacer-component);

  @include tablet {
    margin-bottom: var(--spacer-component-mobile);
  }
}
</style>
