<template>
  <nav class="navbar" :class="classes">
    <div class="navbar__mobile">
      <a href="/" class="logo">
        <img class="navbar__logo-image" src="../assets/frosh-logo.png" alt="Friends of Shopware" />
        <span class="logo-text">Friends of Shopware</span>
      </a>
      <button @click="toggleOffCanvas" class="navbar__mobile-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="navbar__default">
      <a href="/" class="logo">
        <img class="navbar__logo-image" src="../assets/frosh-logo.png" alt="Friends of Shopware" />
        <span class="logo-text">Friends of Shopware</span>
      </a>
      <div class="navbar__links">
        <a class="navbar__link active" href="/">about</a>
        <a class="navbar__link" href="https://packages.friendsofshopware.com/">packages</a>
        <a class="navbar__link" href="/#tutorials">tutorials</a>
        <a class="navbar__link" href="/#hall-of-fame">hall of fame</a>
      </div>
      <a class="button nav-button" href="https://packages.friendsofshopware.com/login">
        Login
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      isOffCanvasOpen: false
    };
  },

  methods: {
    toggleOffCanvas() {
      this.isOffCanvasOpen = !this.isOffCanvasOpen;
    }
  },

  computed: {
    classes() {
      return {
        "navbar--offcanvas-open": this.isOffCanvasOpen
      };
    }
  }
};
</script>

<style scoped lang="scss">
.navbar__default,
.navbar__mobile {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 70px;
}

.navbar__mobile {
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
  }
}

.navbar__default {
  @media screen and (max-width: 800px) {
    display: block;
    background: $highlight-background;
    position: fixed;
    top: 0;
    right: -360px;
    bottom: 0;
    width: 360px;
    height: 100%;
    padding: 20px;
    transition: 0.3s cubic-bezier(0.694, 0.0482, 0.335, 1) right, opacity;
  }
}

.navbar--offcanvas-open {
  .navbar__default {
    right: 0;

    .logo {
      display: none;
    }
  }
}

.navbar__mobile-toggle {
  background: none;
  border: none;
  color: $font;

  svg {
    fill: $font;
  }
}

.navbar__logo-image {
  height: 36px;
  cursor: default;
}

a {
  display: flex;
  align-items: center;
}

.logo,
.nav-button {
  margin-top: 5px;
}

.logo-text {
  padding: 8px;
  cursor: default;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
}

.navbar__links {
  display: flex;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    display: block;
  }

  .navbar__link {
    padding-top: 5px;
    color: rgba($font, 0.7);

    @media screen and (max-width: 800px) {
      padding: 10px 0;
    }
  }

  .navbar__link:not(:last-child) {
    margin-right: 1.8rem;

    @media screen and (max-width: 800px) {
      margin-right: 0;
    }
  }

  .navbar__link.active,
  .navbar__link:hover {
    padding-top: 0;
    border-top: 5px solid $highlight;
    color: rgba($font, 1);

    @media screen and (max-width: 800px) {
      border-top: none;
      padding: 10px 0;
    }
  }
}
</style>
