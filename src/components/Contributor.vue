<template>
  <div class="contributor">
    <div class="avatar column">
      <img class="avatar-image" src="../assets/frosh-logo.png" alt="Friends of Shopware Logo" />
    </div>
    <div class="name column">
      <span class="fullname">{{ user.name }}</span>
      <span class="nickname">{{ user.user }}</span>
    </div>
    <div class="tag column">
      {{ user.contributionCount }} contributions
    </div>
    <div class="tag column">
      {{ user.commitCount }} commits
    </div>
    <div class="tag column">
      {{ user.prCount }} pull requests
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contributor",
    props: {
      user: Object
    },

    computed: {
      imgSource() {
        return `../${this.user.image}`
      }
    },

    created() {
      console.log(this.user);
    }
  };
</script>

<style scoped lang="scss">
  .contributor {
    display: inline-flex;
    border-radius: 10px;
    border: 1px solid $border;
    padding: $default-margin;
    margin: $default-margin;
    height: inherit;
    width: 100%;
  }

  .column {
    margin: $default-margin;
  }

  .name {
    display: flex;
    flex-direction: column;
    flex: 1 0;
    height: inherit;
    margin: auto 0;

    .fullname {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .nickname {
      color: rgba($font, 0.7);
      font-size: 0.9rem;
      line-height: 1.3rem;
      margin: calc(#{$default-margin} / 2) 0;
      white-space: initial;
      overflow: hidden;
      text-overflow: ellipsis;
      justify-content: center;
      height: 100%;
    }
  }

  .avatar-image {
    border-radius: 50%;
    width: 5em;
  }

</style>
