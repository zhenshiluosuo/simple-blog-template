<template>
    <div id="header-nav">
        <router-link to="/">博客</router-link> |
        <router-link to="/edit">写博客</router-link>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped>
    #header-nav {
        padding: 30px;
        border-bottom: 5px solid black;
        margin-bottom: 10px;
    }

    #header-nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #header-nav a.router-link-exact-active {
        color: #42b983;
    }
</style>