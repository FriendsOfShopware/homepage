<template>
    <nav>
        <a href="/"><img src="../assets/logo.png" alt="Friends of Shopware"/><span class="logo-text">Friends of Shopware</span></a>
        <div class="subpage-links">
            <a href="/" class="active">about</a>
            <a href="https://packages.friendsofshopware.com/">packages</a>
            <a href="/#tutorials">tutorials</a>
            <a href="/#hall-of-fame">hall of fame</a>
        </div>
        <a class="button" href="https://packages.friendsofshopware.com/login">
            Login
        </a>
    </nav>
</template>

<script>
</script>

<style scoped lang="scss">
nav {
    display: inline-flex;
    padding: 0 12px;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;

}

img {
    height: 36px;
    cursor: default;
}

a {
    display: flex;
    align-items: center;
}

.logo-text {
    padding: 8px;
    cursor: default;
}

.subpage-links {
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
    width: 50%;

    a:not(.active) {
        padding-top: 5px;
    }

    a.active {
        border-top: 5px solid $highlight;
    }
}

.button {
    border-radius: 5px;
    padding: 10px 20px;
    justify-content: center;
    background-color: $highlight;
    height: 1.5rem;
    align-self: center;
}
</style>