<template>
  <div class="top-contributors">
    <h3 class="headline">Contributors</h3>
    <div class="top-list mostly-customized-scrollbar">
      <div v-for="user in topFour" :key="user.id">
        <Contributor class="contributor-view" :user="user"></Contributor>
      </div>
      <div class="fade-out"></div>
    </div>
    <div class="further-information">
      <FroshButton href="#">Find contributors on Github</FroshButton>
      <FroshButton href="#" variant="blank">How to contribute</FroshButton>
    </div>
  </div>
</template>

<script>
import Contributor from "./Contributor";
import FroshButton from "./FroshButton";
import GitHubClient from "./../service/github-client.service";

export default {
  name: "TopContributors",

  components: {
    FroshButton,
    Contributor
  },

  data() {
    return {
      topFour: []
    };
  },

  created() {
    GitHubClient.get("/contributors").then(response => {
      this.topFour = response;
    });
  }
};
</script>

<style scoped lang="scss">
.top-contributors {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  max-width: 100%;
}

.fade-out {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, $background 85%);
}

.headline {
  font-size: 1.75rem;
  font-weight: bold;
  width: 100%;
  height: 36px;
  text-align: center;
}

.top-list {
  width: 70%;
  height: 600px;
  padding-right: calc(#{$default-padding} * 2);
  overflow: scroll;
}

.further-information {
  padding: calc(#{$default-padding} * 2) 0;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.mostly-customized-scrollbar {
  display: block;
  overflow: auto;
}

.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: $highlight-background; /* or add it to the track */
}

.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: $highlight;
}
</style>
