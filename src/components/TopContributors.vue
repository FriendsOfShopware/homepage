<template>
  <div class="top-contributors">
    <h3 class="headline">Top Contributors</h3>
    <div class="top-list">
      <div v-for="user in contributors" :key="user.id">
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
import topContributors from "./../dataSets/topContributors";
import Contributor from "./Contributor";
import FroshButton from "./FroshButton";

export default {
  name: "TopContributors",
  components: {
    FroshButton,
    Contributor
  },
  data() {
    return {
      contributors: topContributors
    };
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

  background: linear-gradient(to bottom,
    rgba(0,0,0, 0) 10%,
    $background 85%
  );
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
  height: 100%;
}

.further-information {
  padding: calc(#{$default-padding} * 2) 0;
  width:70%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
</style>
