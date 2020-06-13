<template>
    <div class="browse">
        <div class="search-contain">
            <label for="search">搜索：</label><input type="text" id="search" placeholder="上访日记" v-model="search_info">
        </div>
        <div class="article-module" v-for="article in show_articles" :key="article.id">
            <router-link :to="'/article/' + article.id">
                <h3>{{article.title}}</h3>
            </router-link>
            <div>{{article.body}}</div>
        </div>
        <div>
            <span>共{{page_sum_num}}页&nbsp;当前第<input type="text" id="page_num" v-model="page_num">页</span>
        </div>
    </div>
</template>

<script>
    import {getArticles} from "../api/api";

    export default {
        name: "Browse",
        data() {
            return {
                finish_flag: false,
                show_articles: [],
                articles: {},
                search_info: '',
                page_num: 1,
                page_sum_num: 0
            }
        },
        created() {
            getArticles()
                .then((res) => {
                    this.articles = res;
                    this.show_articles = [...this.articles];
                    this.show_articles = this.show_articles.slice((this.page_num - 1) * 4, this.page_num * 4);
                    this.page_sum_num = Math.ceil((this.articles.length) / 4);
                    this.finish_flag = true;
                });
        },
        watch: {
            search_info: function(val) {
                if(val === ''){
                    this.show_articles = [...this.articles];
                }else if(this.finish_flag){
                    this.show_articles = this.articles.filter(value => value.title.indexOf(val) !== -1);
                }
                this.page_sum_num = Math.ceil((this.show_articles.length) / 4);
                this.page_num = 1;
                this.show_articles = this.show_articles.slice((this.page_num - 1) * 4, this.page_num * 4);
            },
            page_num: function (val) {
                if(parseInt(val)){
                    this.page_num = parseInt(val);
                    if(this.page_sum_num < 0) {
                        this.page_sum_num = 1;
                    }
                    this.show_articles = this.articles.filter(value => value.title.indexOf(this.search_info) !== -1).slice((this.page_num - 1) * 4, this.page_num * 4);
                }
            }
        }
    }
</script>

<style scoped>
    .search-contain {
        box-sizing: border-box;
        margin: 5px auto;
        padding: 10px;
        width: 100%;
        max-width: 800px;
        min-height: 80px;
        border: 1px double black;
        background: cornsilk;
        text-align: left;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin: 5px 0 5px 10%;
        font-weight: 700;
    }
    #search {
        margin: 0 auto;
        display: block;
        width: 80%;
        height: 30px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .article-module {
        margin: 5px auto;
        width: 100%;
        min-height: 120px;
        max-width: 800px;
        border: 2px dotted black;
        background: aliceblue;
    }
    #page_num {
        margin-top: 10px;
        width: 30px;
    }
    a {
        text-decoration: none;
    }
</style>