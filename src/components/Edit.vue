<template>
    <div class="edit">
        <div><label for="title">标题</label><input type="text" id="title"></div>
        <div><label for="writer">作者</label><input type="text" id="writer"></div>
        <div>
            <label for="article">正文</label>
            <textarea id="article"></textarea>
        </div>
        <div class="control">
            <button id="submit">提交</button>
            <button id="reset">重置</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        created() {

        }
    }
</script>

<style scoped>
    .edit {
        margin: 5px auto;
        width: 100%;
        max-width: 800px;
        text-align: left;
        background: azure;
    }
    .edit div {
        margin: 5px;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin: 5px 0 5px 10%;
        font-weight: 700;
    }
    input {
        margin-left: 10%;
        display: block;
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
    #title {
        width: 80%;
    }
    #writer {
        width: 50%;
    }
    #article {
        font-weight: 700;
        margin-left: 10%;
        display: block;
        width: 80%;
        height: 300px;
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
    .control {
        width: 100%;
        margin: 5px auto;
        text-align: center;
    }
    button {
        margin: 10px;
        width: 20%;
        height: 30px;
        background: floralwhite;
        font-weight: 700;
    }
</style>