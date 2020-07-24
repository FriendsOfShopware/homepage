<template>
  <nav class="navbar" :class="classes">
    <div class="navbar__mobile">
      <a href="/" class="navbar__logo">
        <img class="navbar__logo-image" src="../assets/frosh-logo.png" alt="Friends of Shopware" />
        <span class="logo-text">Friends of Shopware</span>
      </a>
      <button @click="toggleOffCanvas" class="navbar__mobile-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="navbar__default">
      <a href="/" class="navbar__logo">
        <img class="navbar__logo-image" src="../assets/frosh-logo.png" alt="Friends of Shopware" />
        <span class="logo-text">Friends of Shopware</span>
      </a>
      <button @click="toggleOffCanvas" class="navbar__offcanvas-close" aria-label="Close">
        &times;
      </button>
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
$offcanvas-width: 360px;
$offcanvas-transition: right cubic-bezier(0.694, 0.0482, 0.335, 1) 0.3s,
  opacity cubic-bezier(0.694, 0.0482, 0.335, 1) 0.3s;

.navbar__default,
.navbar__mobile {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 70px;
}

.navbar__offcanvas-close {
  display: none;
  width: 36px;
  height: 36px;
  color: $font;
  background: none;
  font-size: 20px;
  border: 1px solid lighten($border, 10%);
  border-radius: 5px;
  outline: none;
  margin-bottom: $default-margin;
  cursor: pointer;

  &:hover {
    color: $highlight;
  }

  @include tablet {
    display: block;
  }
}

.navbar__mobile {
  display: none;

  @include tablet {
    display: flex;
  }
}

.navbar__default {
  @include tablet {
    display: block;
    background: $highlight-background;
    position: fixed;
    top: 0;
    right: -$offcanvas-width;
    bottom: 0;
    width: $offcanvas-width;
    height: 100%;
    padding: 20px;
    transition: $offcanvas-transition;
    opacity: 0;

    .navbar__logo {
      display: none;
    }
  }
}

.navbar--offcanvas-open {
  .navbar__default {
    right: 0;
    opacity: 1;
  }
}

.navbar__mobile-toggle {
  background: none;
  border: none;
  color: $font;
  outline: none;
  width: 50px;
  cursor: pointer;

  svg {
    fill: $font;
  }

  &:hover svg {
    fill: $highlight;
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

.navbar__logo,
.nav-button {
  margin-top: 5px;
}

.logo-text {
  padding: 8px;
  cursor: default;
  font-weight: bold;

  @include desktop {
    display: none;
  }

  @include tablet {
    display: block;
  }
}

.navbar__links {
  display: flex;
  text-transform: uppercase;

  @include tablet {
    display: block;
    margin-bottom: $default-margin;
  }

  .navbar__link {
    padding-top: 5px;
    color: rgba($font, 0.7);

    @include tablet {
      padding: 10px 0;
    }
  }

  .navbar__link:not(:last-child) {
    margin-right: 1.8rem;

    @include tablet {
      margin-right: 0;
    }
  }

  .navbar__link.active,
  .navbar__link:hover {
    padding-top: 0;
    border-top: 5px solid $highlight;
    color: rgba($font, 1);

    @include tablet {
      border-top: none;
      padding: 10px 0;
    }
  }
}
</style>
