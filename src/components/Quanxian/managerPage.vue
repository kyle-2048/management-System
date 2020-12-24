<template>
    <div>
        <div class="managerPage">
            <div class="container">
                <div class="top">
                    <i class="el-icon-s-opportunity"></i>
                    <span>本页面只有admin权限下显示</span>
                </div>
                <authority></authority>
            </div>
        </div>
    </div>
</template>

<script>
    import authority from "../public/authority";
    export default {
        name: "managerPage",
        components:{
            authority
        }
    }
</script>

<style lang="less" >
    .managerPage{
        position: relative;
        top: 35px;
        left: 30px;
        background: #fff;
        padding: 20px;
        width: calc(100% - 60px);
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
        .container{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .top{
                padding-bottom: 20px;
                i{
                    color: orange;
                    font-size: 18px;
                }
                span{
                    display: inline-block;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }

            .header{
                i{
                    display: none;
                }
            }


        }
    }

</style>
