<template>
    <div class="All" >
<!--        用于实现点击按钮后，整个页面背景色变灰色的功能-->
        <div class="backgroundShow" v-show="backgroundBoolean">
        </div>
        <SideBar></SideBar>
        <Header>
        </Header>
    </div>
</template>

<script>
    import bus from '../../bus'
    import SideBar from "./SideBar";
    import Header from './Header'
    export default {
        name: "yemian",
        components:{
            SideBar,
            Header,
        },
        data(){
            return{
                backgroundBoolean:false
            }
        },
        mounted() {
            bus.$on('changeBigBackground',(boolean)=>{
                this.backgroundBoolean=boolean;
            })
        },

    }
</script>

<style scoped>
    .All{
        position: relative;
        width: 100%;
        /*height: 100%;*/
        min-height: 100%;
        display: flex;
    }
    .backgroundShow{
        position: absolute;
        width: 100%;
        height: 100%;
        /*min-height: 100%;*/
        background: #606162;
        z-index: 500;
        opacity: 0.6;
    }
</style>
