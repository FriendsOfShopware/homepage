<template>
  <div id="app">
    <div class="container">
      <navbar />
      <entry-jumbotron />
      <featured-projects />
      <how-to-member />
      <footer-element />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import EntryJumbotron from "./components/EntryJumbotron";
import FeaturedProjects from "./components/FeaturedProjects";
import FooterElement from "./components/Footer";
import HowToMember from "./components/HowToMember";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    "entry-jumbotron": EntryJumbotron,
    "featured-projects": FeaturedProjects,
    "footer-element": FooterElement,
    "how-to-member": HowToMember
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter-Regular";
  src: url("/Inter-Regular.woff") format("woff"), url("/Inter-Reular.woff2") format("woff2");
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Inter-Regular", Arial, sans-serif;
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
  padding: 0 50px;
}
</style>
