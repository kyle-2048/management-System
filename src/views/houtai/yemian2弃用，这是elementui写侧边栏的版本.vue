<template>
    <div>
        <div class="Loading" v-if="LoadingBoolean">
            <div class="loading3">
                <div class="circle circle1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="circle circle2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="circle circle3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div >
            <el-container style="border: 1px solid #eee;">
                <div>
                    <el-aside  width="200px" >
                        <el-menu :default-openeds="['1', '1']"  >
                            <el-submenu index="1" >
                                <template slot="title"><i class="el-icon-message"></i>首页</template>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-message"></i>引导指南</template>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-menu"></i>权限许可</template>
                                <el-menu-item index="3-1">用户页面</el-menu-item>
                                <el-menu-item index="3-2">管理员页面</el-menu-item>
                                <el-menu-item index="3-3">权限设置</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">Table</template>
                                <el-menu-item index="4-1">普通表格</el-menu-item>
                                <el-menu-item index="4-2">复杂表格</el-menu-item>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">Icons图标</template>
                            </el-submenu>
                            <el-submenu index="6">
                                <template slot="title">部分组件</template>
                                <el-menu-item index="6-1">滑动验证</el-menu-item>
                                <el-menu-item index="6-2">上传图片</el-menu-item>
                                <el-menu-item index="6-3">轮播</el-menu-item>
                            </el-submenu>
                            <el-submenu index="7">
                                <template slot="title">Echarts</template>
                                <el-menu-item index="7-1">滑动charts</el-menu-item>
                                <el-menu-item index="7-2">切换charts</el-menu-item>
                                <el-menu-item index="7-3">map</el-menu-item>
                            </el-submenu>
                            <el-submenu index="8">
                                <template slot="title">Excel</template>
                                <el-menu-item index="8-1">Excel导出</el-menu-item>
                                <el-menu-item index="8-2">Excel导入</el-menu-item>
                                <el-menu-item index="8-3">多记表头导出</el-menu-item>
                            </el-submenu>
                            <el-submenu index="9">
                                <template slot="title">404</template>
                            </el-submenu>
                            <el-submenu index="10">
                                <template slot="title">项目链接</template>
                            </el-submenu>
                            <el-submenu index="11">
                                <template slot="title">导航菜单测试</template>
                                <el-menu-item index="11-1">菜单1</el-menu-item>
                                <el-menu-item index="11-2">菜单2</el-menu-item>
                            </el-submenu>
                            <!--                        <el-submenu index="3">-->
                            <!--                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
                            <!--                            <el-menu-item-group>-->
                            <!--                                <el-menu-item index="3-1">选项1</el-menu-item>-->
                            <!--                                <el-menu-item index="3-2">选项2</el-menu-item>-->
                            <!--                            </el-menu-item-group>-->
                            <!--                            <el-menu-item-group title="分组2">-->
                            <!--                                <el-menu-item index="3-3">选项3</el-menu-item>-->
                            <!--                            </el-menu-item-group>-->
                            <!--                            <el-submenu index="3-4">-->
                            <!--                                <template slot="title">选项4</template>-->
                            <!--                                <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
                            <!--                            </el-submenu>-->
                            <!--                        </el-submenu>-->
                        </el-menu>
                    </el-aside>
                </div>
                <el-container>
                    <el-header style="text-align: right; font-size: 12px">
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>王小虎</span>
                    </el-header>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>

    </div>
</template>

<script>
    import shouye from './shouye/shouye'
    export default {
        name: "yemian",
        data(){
            return{
                LoadingBoolean:true,
            }
        },
        mounted() {
            this.LoadingBoolean=false;

        },
        methods:{
            handleMenu(e){

            }
        },
        components:{
            shouye,
        }
    }
</script>

<style scoped>
    .Loading{
       margin: 400px auto;
    }
    .loading3{
        width:50px;
        height:50px;
        margin:50px auto;
        position:relative;
    }
    .circle{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    .circle span{
        width:8px;
        height:8px;
        display:inline-block;
        background:indianred;
        border-radius: 100%;
        position:absolute;
        -webkit-animation: mycircle 1.2s infinite ease-in-out;
        animation: mycircle 1.2s infinite ease-in-out;
        -webkit-animation-fill-mode:both;
        animation-fill-mode:both;
    }
    .circle2{
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    }
    .circle3{
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    .circle>span:nth-child(1){
        top:0;
        left:0;
    }
    .circle>span:nth-child(2){
        top:0;
        right:0;
    }
    .circle>span:nth-child(3){
        right:0;
        bottom:0;
    }
    .circle>span:nth-child(4){
        left:0;
        bottom:0;
    }
    .circle2 >span:nth-child(1){
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
    .circle3 >span:nth-child(1){
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }
    .circle1 >span:nth-child(2){
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }
    .circle2 >span:nth-child(2){
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }
    .circle3 >span:nth-child(2){
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }
    .circle1 >span:nth-child(3){
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
    }
    .circle2 >span:nth-child(3){
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }
    .circle3 >span:nth-child(3){
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
    }
    .circle1 >span:nth-child(4){
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
    }
    .circle2 >span:nth-child(4){
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
    }
    .circle3 >span:nth-child(4){
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
    }
    @-webkit-keyframes mycircle{
        0%{transform:scale(0.0);}
        40%{transform:scale(1.0);}
        80%{transform:scale(0.0);}
        100%{transform:scale(0.0);}
    }
    @keyframes mycircle{
        0%{transform:scale(0.0);}
        40%{transform:scale(1.0);}
        80%{transform:scale(0.0);}
        100%{transform:scale(0.0);}
    }
    /*布局样式*/
    .el-header {
        background-color: #999999;
        line-height: 60px;
    }

    .el-aside {
        color: #19b9e7;
        margin-left: 2px;
    }
    .el-submenu__title{

    }
    .el-menu {
        height: 100%;
        background: rgb(95, 100, 119);
        color: #19b9e7;
    }
    .el-menu .el-submenu {
        /*background: rgb(95, 100, 119);*/
        background-color: #19b9e7;
    }
    .el-submenu:hover{
        background-color: #19b9e7;
    }
    .el-submenu__title{
        color:yellow!important;
        background: yellow!important;
    }
    .el-submenu__title:hover{
        background: yellow!important;
    }

</style>
