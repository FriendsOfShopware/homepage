<template>
  <div id="app">
    <div class="container">
      <frosh-navbar />
      <router-view />
      <frosh-footer />
    </div>
  </div>
</template>

<script>
import FroshNavbar from "./components/FroshNavbar";
import FroshFooter from "./components/FroshFooter";

export default {
  name: "App",

  metaInfo() {
    return {
      title: "Index",
      titleTemplate: "%s | Friends of Shopware",
      meta: [
        {
          name: "author",
          content: "FriendsOfShopware"
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: "Index",
          template: chunk => `${chunk} | Friends of Shopware`,
          vmid: "og:title"
        }
      ]
    };
  },

  components: {
    FroshNavbar,
    FroshFooter
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter-Regular";
  src: url("/Inter-Regular.woff") format("woff"), url("/Inter-Reular.woff2") format("woff2");
  font-display: swap;
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
</style>
