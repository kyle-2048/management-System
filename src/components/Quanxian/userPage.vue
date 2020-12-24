<template>
    <div>
        <div class="userPage">
            <div class="container">
                <authority></authority>
            </div>
        </div>
    </div>
</template>

<script>
    import authority from "../public/authority";
    export default {
        name: "userPage",
        components:{
            authority
        }
    }
</script>

<style lang="less" >
    .userPage {
        position: relative;
        top: 35px;
        left: 30px;
        background: #fff;
        padding: 20px;
        width: calc(100% - 60px);
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
        .container{
            /*background: #19b9e7;*/
            /*height: 160px;*/
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }


</style>
