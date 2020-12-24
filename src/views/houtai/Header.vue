<template>
    <div class="Header" ref="aaa">
        <div class="Header_top">
            <div class="left">
                <i class="el-icon-s-fold" style="font-size: 18px" @click="handleSideBar"></i>
                <span>{{sideBarTitle}}</span>
            </div>
            <div class="right">
                <div class="smallDot"></div>
                <i class="el-icon-message-solid" @click="handleMessageCon"></i>
                <i class="el-icon-full-screen" @click="screen"></i>
                <div>
                    <span @click="adminBoolean=!adminBoolean">admin</span>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <div class="personIMG">

                </div>
            </div>
        </div>
        <div class="message_container" v-show="messageShow">
            <ul>
                <li>
                    <span>消息中心</span>
                    <i class="el-icon-close" @click="messageShow=false"></i>
                </li>
                <li>
                    <span :class="{'active':activeIndex===1}" @mouseover="activeIndex=1" >优惠券到期提醒</span>
                    <span>2019-06-01</span>
                </li>
                <li>
                    <span :class="{'active':activeIndex===2}" @mouseover="activeIndex=2" >618大促，请查看活动具体信息</span>
                    <span>2019-06-02</span>
                </li>
                <li>
                    <span :class="{'active':activeIndex===3}" @mouseover="activeIndex=3">充值成功</span>
                    <span>2019-07-02</span>
                </li>
                <li>
                    <span :class="{'active':activeIndex===4}" @mouseover="activeIndex=4" >密码充值成功！</span>
                    <span>2019-07-02</span>
                </li>

            </ul>
        </div>
        <div class="admin_nav" v-show="adminBoolean" @click="adminBoolean=!adminBoolean">
            <div class="jiao">
            </div>
            <ul>
                <li>
                    <i class="el-icon-house"></i>
                    <span>首页</span>
                </li>
                <li @click="turnCenter">
                    <i class="el-icon-user"></i>
                    <span>我的主页</span>
                </li>
                <li>
                    <router-link to="/Login">
                        <i class="el-icon-switch-button"></i>
                        <span>登出</span>
                    </router-link>

                </li>

            </ul>
        </div>

        <router-view  style="height: calc(100% - 50px);background: #f0f3f4"></router-view>
    </div>
</template>

<script>
    // import shouye from './shouye/shouye'
    import '@/style/houtai/Header.css'
    import bus from '../../bus'
    export default {
        name: "Header",
        data(){
            return{
                sidBarBoolean:false,
                messageShow:false,
                activeIndex:null,
                fullScreen:false,
                adminBoolean:false,
                sideBarTitle:'首页',
            }
        },
        updated() {

        },
        components:{

        },
        methods:{
            //点击 实现sidebar框宽度缩小功能
            handleSideBar(){
                //操作dom也是可以的
                // var sideBar=document.querySelector(".SideBar")
                // console.log(sideBar)
                // sideBar.style.width="100px";
                this.sidBarBoolean=!this.sidBarBoolean;
                bus.$emit('handleSidBar',this.sidBarBoolean)

            },
            //打开消息框
            handleMessageCon(){
                this.messageShow=!this.messageShow;
            },
            screen(){
                //实现点击全屏显示页面功能，百度有
                let element=document.documentElement;
                if(this.fullScreen){
                    if(document.exitFullscreen){
                        document.exitFullscreen();
                    }else if(document.webkitCancelFullScreen){
                        document.webkitCancelFullScreen();
                    }else if(document.mozCancelFullScreen){
                        document.mozCancelFullScreen();
                    }else if(document.msExitFullscreen){
                        document.msExitFullscreen();
                    }
                }else{
                    if(element.requestFullscreen){
                        element.requestFullscreen();
                    }else if(element.webkitRequestFullScreen){
                        element.webkitRequestFullScreen();
                    }else if(element.mozRequestFullScreen){
                        element.mozRequestFullScreen();
                    }else if(element.msRequestFullscreen){
                        //IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullScreen=!this.fullScreen
            },
            //跳转到个人中心
            turnCenter(){
                this.$router.push('/Center')
            }
        },
        mounted() {
            bus.$on('headerTitle',(title)=>{
                this.sideBarTitle=title;
            })
        }
    }
</script>

<style scoped>

</style>
