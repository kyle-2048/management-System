<template>
    <div ref="all" >
        <div class="guide" ref="guide">
            <div class="gudie_container">
                <div class="top">
                    <i class="el-icon-s-opportunity"></i>
                    <span>点击按钮可查看本管理系统的基本操作</span>
                </div>
                <button @click="YindaoBoolean=true">
                    引导
                </button>
            </div>
        </div>
        <div class="hideYindao" v-show="YindaoBoolean">
            <div class="hideYindao_container">
                <span>菜单导航</span>
                <span>点击菜单可切换右侧菜单内容</span>
                <div class="button_group">
                    <button @click="YindaoBoolean=false">Close</button>
                    <div>
                        <button>← Previous</button>
                        <button>Next →</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import bus from '@/bus.js'
    export default {
        name: "index",
        data(){
            return{
                YindaoBoolean:false,
            }
        },
        methods:{

        },
        watch:{
            YindaoBoolean(boolean){
               if(boolean){
                   this.$refs.all.style.background="#606162";
                   this.$refs.guide.style.opacity="0.2";
               }
               else{
                   this.$refs.all.style.background="#f0f3f4";
                   this.$refs.guide.style.opacity="1";
               }
            }
        }

    }
</script>

<style lang="less" scoped>
    /*.Yindao{*/
    /*    background: #606162!important;*/
    /*}*/
    .guide{
        position: relative;
        top: 35px;
        left: 30px;
        width: calc(100% - 60px);
        height: 120px;
        background: #ffffff;
        /*opacity: 0.2;*/
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
        .gudie_container{
            position: absolute;
            top:18px;
            left: 20px;
            width: 265px;
            height: 85px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top{
                width: 100%;
                height: 20px;
                i{
                    color: orange;
                }
                span{
                    font-size: 14px;
                }
            }
            button{
                width: 70px;
                height: 40px;
                background: #409eff;
                color: #ffffff;
                outline: none;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover{
                opacity: 0.8;
            }
        }
    }
    .hideYindao{
        position: absolute;
        left: 215px;
        top:60px;
        width: 280px;
        height: 120px;
        background: #fff;
        border-radius: 5px;
        border: none;
        .hideYindao_container{
            margin: 10px auto;
            width: 255px;
            height: 98px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span:nth-child(1){
                font-size: 18px;
                font-weight: 600;
            }
            span:nth-child(2){
                font-size: 14px;
                font-weight: 500;
            }
            button{
                font-size: 11px;
                font-weight: 400;
                background-color: #f1f1f1;
                outline: none;
                border: 1px solid #d4d4d4;
            }
            .button_group{
                display: flex;
                justify-content: space-between;
                button:nth-child(1){
                    width: 50px;
                    height: 20px;
                    cursor: pointer;
                }
                div{
                    button:nth-child(1){
                        width: 88px;
                        height: 20px;
                        font-weight: 300;
                        margin-right: 5px;
                    }
                    button:nth-child(2){
                        width: 65px;
                        height: 20px;
                        cursor: pointer;
                    }
                }

            }
        }

    }
    .hideYindao:before{
        position: absolute;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-right-color: #fff;
        left: -16px;
        top:25px;
    }
</style>
