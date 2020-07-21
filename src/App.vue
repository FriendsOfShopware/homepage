<template>
  <div id="app">
    <div class="container">
      <navbar />
      <entry-jumbotron />
      <featured-projects />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import EntryJumbotron from "./components/EntryJumbotron";
import FeaturedProjects from "./components/FeaturedProjects";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    "entry-jumbotron": EntryJumbotron,
    "featured-projects": FeaturedProjects
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter-Regular";
  src: url("/Inter-Regular.woff") format("woff"), url("/Inter-Reular.woff2") format("woff2");
}

body {
  font-family: "Inter-Regular";
  background-color: $background;
  color: $font;
  margin: 0;
  padding: 0;
}

a {
  font-style: normal;
  text-decoration: none;
  color: $font;
}

.container {
  padding: 0 10%;
}
</style>
