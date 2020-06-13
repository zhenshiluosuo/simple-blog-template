<template>
    <div class="article">
        <h3>{{article.title}}</h3>
        <div>{{article.body}}</div>
    </div>
</template>

<script>
    import {getArticle} from "../api/api";

    export default {
        name: "Article",
        data() {
            return {
                id: this.$route.params.id,
                article: {}
            }
        },
        created() {
            getArticle(this.id)
                .then((res) => {this.article = res});
        },
    }
</script>

<style scoped>
    .article {
        margin: 5px auto;
        width: 100%;
        min-height: 300px;
        max-width: 800px;
        border: 2px dotted black;
        background: aliceblue;
    }
</style>