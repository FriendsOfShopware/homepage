<template>
  <div id="app">
    <div class="container">
      <navbar/>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style lang="scss">
body {
  color: var(--font);
  font-size: 1.25rem;
  line-height: 1.25rem;
  background-color: $background;
  margin: 0;
  padding: 0;
}

a {
  font-style: normal;
  text-decoration: none;
  color: $font;
}

.container {
  padding: 0 15%;
}
</style>
