<template>
  <a v-if="hasHrefAttr" :class="classes" v-on="$listeners">
    <slot></slot>
  </a>
  <button v-else :class="classes" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "frosh-button",

  props: {
    variant: {
      type: String,
      default: "primary",
      required: false,
      validator(value) {
        return ["primary", "blank"].includes(value);
      }
    },

    /**
     * Use this prop when the slot only contains an icon
     */
    icon: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    hasHrefAttr() {
      return this.$attrs.href && this.$attrs.href.length;
    },

    classes() {
      return ["frosh-button", `frosh-button--${this.variant}`, { "frosh-button--icon": this.icon }];
    }
  }
};
</script>

<style lang="scss" scoped>
.frosh-button {
  display: inline-block;
  border-radius: $border-radius;
  padding: 10px 20px;
  background-color: lighten($highlight-background, 5%);
  font-weight: bold;
  border: 1px solid transparent;
  font-family: $font-family-default;
  font-size: 16px;
  color: $font;
  height: 42px;
  cursor: pointer;
  outline: none;
  transition: all ease-in-out 0.15s;

  &.frosh-button--primary {
    background-color: $highlight;

    &:hover {
      background-color: lighten($highlight, 5%);
    }

    &:focus {
      box-shadow: 0 0 0 3px darken($highlight, 15%);
    }
  }

  &.frosh-button--blank {
    background-color: transparent;
    font-weight: normal;

    &:hover {
      background-color: $highlight-background;
    }

    &:focus {
      box-shadow: 0 0 0 3px lighten($border, 10%);
    }
  }

  &.frosh-button--icon {
    width: 42px;
    padding: 5px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  svg {
    fill: currentColor;
  }
}
</style>
