<template>
  <div class="contributor">
    <div class="avatar column">
      <img class="avatar-image" :src="user.AvatarURL" loading="lazy" height="80" width="80" :alt="user.User" />
    </div>
    <div class="name column">
      <span class="nickname">{{ user.User }}</span>
      <span v-if="user.Name" class="fullname">{{ user.Name }}</span>
    </div>
    <frosh-tag class="column"> {{ user.Contributions }} contributions </frosh-tag>
    <frosh-tag class="column"> {{ user.Commits }} commits </frosh-tag>
    <frosh-tag class="column"> {{ user.PullRequests }} Pull Requests </frosh-tag>
  </div>
</template>

<script>
import FroshTag from "./FroshTag";

export default {
  name: "frosh-contributor",

  components: {
    FroshTag
  },

  props: {
    user: Object
  }
};
</script>

<style scoped lang="scss">
.contributor {
  display: flex;
  border-radius: 10px;
  border: 1px solid $border;
  padding: $default-margin;
  margin: $default-margin;
  height: inherit;
  width: 100%;

  @include tablet {
    display: block;
  }
}

.column {
  margin: $default-margin;

  @include tablet {
    margin: $default-margin auto;
  }
}

.name {
  display: flex;
  flex-direction: column;
  flex: 1 0;
  height: inherit;
  margin: auto 0;

  @include tablet {
    text-align: center;
  }

  .nickname {
    font-weight: bold;
    font-size: $font-size-default;
  }

  .fullname {
    color: rgba($font, 0.7);
    font-size: $font-size-sm;
    line-height: 1.3rem;
    margin: calc(#{$default-margin} / 2) 0;
    white-space: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
    height: 100%;
  }
}

.avatar {
  margin: 0 calc(#{$default-margin} * 2);

  @include tablet {
    display: flex;
    justify-content: center;
    margin-bottom: $default-margin;
  }

  .avatar-image {
    border-radius: 50%;
    width: 5em;
  }
}
</style>
