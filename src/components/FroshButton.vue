<template>
  <a v-if="hasHrefAttr" :class="classes" rel="noopener">
    <slot></slot>
  </a>
  <button v-else :class="classes">
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
      },
    },

    /**
     * Use this prop when the slot only contains an icon
     */
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Makes the button a block element with implicit 100% width
     */
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    hasHrefAttr() {
      return this.$attrs.href && this.$attrs.href.length;
    },

    classes() {
      return [
        "frosh-button",
        `frosh-button--${this.variant}`,
        { "frosh-button--icon": this.icon, "frosh-button--block": this.block },
      ];
    },
  },
};
</script>

<style scoped>
.frosh-button {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #1a1a1a;
  font-weight: bold;
  border: 1px solid transparent;
  font-family: var(--font-family-default);
  font-size: 16px;
  color: var(--font);
  height: 42px;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: all ease-in-out 0.15s;

  &.frosh-button--primary {
    background-color: var(--highlight);

    &:hover {
      background-color: lighten(var(--highlight), 5%);
    }

    &:focus {
      box-shadow: 0 0 0 3px darken(var(--highlight), 15%);
    }
  }

  &.frosh-button--blank {
    background-color: transparent;
    font-weight: normal;

    &:hover {
      background-color: var(--highlight-background);
    }

    &:focus {
      box-shadow: 0 0 0 3px lighten(var(--border), 10%);
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

  &.frosh-button--block {
    display: block;
  }

  svg {
    fill: currentColor;
  }
}
</style>
