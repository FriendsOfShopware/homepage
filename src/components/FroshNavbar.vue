<template>
  <nav class="navbar" :class="classes">
    <div class="navbar__mobile">
      <router-link to="/" class="navbar__logo">
        <img
          class="navbar__logo-image"
          src="../assets/frosh-old.svg"
          width="36"
          height="36"
          alt="Friends of Shopware"
        />
        <span class="logo-text">Friends of Shopware</span>
      </router-link>
      <frosh-button
        variant="blank"
        icon
        @click="toggleOffCanvas"
        class="navbar__mobile-toggle"
        aria-label="Toggle navbar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </frosh-button>
    </div>
    <div class="navbar__default">
      <router-link to="/" class="navbar__logo">
        <img
          class="navbar__logo-image"
          src="../assets/frosh-old.svg"
          width="36"
          height="36"
          alt="Friends of Shopware"
        />
        <span class="logo-text">Friends of Shopware</span>
      </router-link>
      <frosh-button @click="toggleOffCanvas" variant="blank" icon class="navbar__offcanvas-close" aria-label="Close">
        &times;
      </frosh-button>
    </div>
  </nav>
</template>

<script>
import FroshButton from "./FroshButton";

export default {
  name: "frosh-navbar",

  components: { FroshButton },

  data() {
    return {
      isOffCanvasOpen: false,
    };
  },

  methods: {
    toggleOffCanvas() {
      this.isOffCanvasOpen = !this.isOffCanvasOpen;
    },
  },

  computed: {
    classes() {
      return {
        "navbar--offcanvas-open": this.isOffCanvasOpen,
      };
    },
  },
};
</script>

<style scoped>
.navbar__default,
.navbar__mobile {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
}

.frosh-button.navbar__offcanvas-close {
  display: none;
  background: none;
  border: 1px solid lighten(var(--border), 10%);
  margin-bottom: var(--default-margin);
}

@media screen and (max-width: 768px) {
  .frosh-button.navbar__offcanvas-close {
    display: inline-flex;
  }
}

.navbar__mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .navbar__mobile {
    display: flex;
  }
}

.navbar__default {
  @media screen and (max-width: 768px) {
    display: block;
    background: var(--highlight-background);
    position: fixed;
    top: 0;
    right: -360px;
    bottom: 0;
    width: 360px;
    height: 100%;
    padding: 20px;
    transition: right cubic-bezier(0.694, 0.0482, 0.335, 1) 0.3s,
      opacity cubic-bezier(0.694, 0.0482, 0.335, 1) 0.3s;
    opacity: 0;
  }

  .navbar__logo {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.navbar--offcanvas-open .navbar__default {
  right: 0;
  opacity: 1;
}

.navbar__logo-image {
  height: 36px;
  cursor: default;
}

a {
  display: flex;
  align-items: center;
}

.navbar__logo,
.nav-button {
  margin-top: 5px;
}

.logo-text {
  padding: 8px;
  cursor: default;
  font-weight: bold;

  @media screen and (max-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
}

.navbar__links {
  display: flex;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: var(--default-margin);
  }
}

.navbar__link {
  padding-top: 5px;
  color: rgba(var(--font), 0.7);
  height: 70px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    height: auto;
  }

  &:not(:last-child) {
    margin-right: 1.8rem;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  &.active,
  &:hover {
    padding-top: 0;
    border-top: 5px solid var(--highlight);
    color: rgba(var(--font), 1);

    @media screen and (max-width: 768px) {
      border-top: none;
      padding: 10px 0;
    }
  }
}
</style>
