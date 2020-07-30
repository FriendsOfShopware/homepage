<template>
  <div id="app">
    <div class="container">
      <frosh-navbar class="component" />
      <frosh-entry-jumbotron class="component" />
      <frosh-featured-projects class="component" />
      <frosh-top-contributors class="component" />
      <frosh-how-to-member class="component" />
      <frosh-footer class="component" />
    </div>
  </div>
</template>

<script>
import FroshNavbar from "./components/FroshNavbar";
import FroshEntryJumbotron from "./components/FroshEntryJumbotron";
import FroshFeaturedProjects from "./components/FroshFeaturedProjects";
import FroshTopContributors from "./components/FroshTopContributors";
import FroshFooter from "./components/FroshFooter";
import FroshHowToMember from "./components/FroshHowToMember";

export default {
  name: "App",
  components: {
    FroshNavbar,
    FroshEntryJumbotron,
    FroshFeaturedProjects,
    FroshTopContributors,
    FroshFooter,
    FroshHowToMember
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter-Regular";
  src: url("/Inter-Regular.woff") format("woff"), url("/Inter-Reular.woff2") format("woff2");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: $font-family-default;
  background-color: $background;
  color: $font;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

a {
  font-style: normal;
  text-decoration: none;
  color: $font;
}

.container {
  max-width: $desktop-lg-width;
  margin: 0 auto;

  @include desktop-lg {
    padding: 0 20px;
  }

  @include phone {
    padding: 0 10px;
  }
}

.component {
  margin-bottom: $spacer-component;

  @include tablet {
    margin-bottom: $spacer-component-mobile;
  }
}
</style>
