<template>
    <div>
        <div class="SideBar" ref="handleBar">
            <div class="SideBar_title" ref="title">
                Vue Project
            </div>
            <div class="SideBar_List" @click="handleActive($event)">
                <div class="SideBar_menu" @click="sendTitle($event)">
                    <div class="Menu_top" v-bind:class="{'clickActive':index===0}">
                        <i class="el-icon-s-data"></i>
                        <span>首页</span>
                    </div>
                </div>
                <div class="SideBar_menu">
                    <div class="Menu_top" v-bind:class="{'clickActive':index===1}" @click="sendTitle($event)">
                        <i class="el-icon-s-flag"></i>
                        <span>引导指南</span>
                    </div>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===2}" @click="handleShow(0)">
                        <i class="el-icon-lock"></i>
                        <span>权限许可</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(0)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[0]" >
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===11}" @click="sendTitle($event)">
                            <i class="el-icon-user"></i>
                            <span>用户页面</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===12}" @click="sendTitle($event)">
                            <i class="el-icon-user-solid"></i>
                            <span>管理员页面</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===13}" @click="sendTitle($event)">
                            <i class="el-icon-s-tools"></i>
                            <span>权限设置</span>
                        </li>
                    </ul>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===3}" @click="handleShow(1)">
                        <i class="el-icon-menu"></i>
                        <span>Table</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(1)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[1]">
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===14}" @click="sendTitle($event)">
                            <span>普通表格</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===15}" @click="sendTitle($event)">
                            <span>复杂表格</span>
                        </li>
                    </ul>
                </div>
                <div class="SideBar_menu">
                    <div class="Menu_top" v-bind:class="{'clickActive':index===4}" @click="sendTitle($event)">
                        <i class="el-icon-picture"></i>
                        <span>Icons图标</span>
                    </div>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===5}" @click="handleShow(2)">
                        <i class="el-icon-coin"></i>
                        <span>部分组件</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(2)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[2]">
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===16}" @click="sendTitle($event)">
                            <i class="el-icon-s-claim"></i>
                            <span>滑动验证</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===17}" @click="sendTitle($event)">
                            <i class="el-icon-upload"></i>
                            <span>上传图片</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===18}" @click="sendTitle($event)">
                            <i class="el-icon-link"></i>
                            <span>轮播</span>
                        </li>
                    </ul>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===6}" @click="handleShow(3)">
                        <i class="el-icon-s-marketing"></i>
                        <span>Echarts</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(3)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[3]">
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===19}" @click="sendTitle($event)">
                            <span>滑动charts</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===20}" @click="sendTitle($event)">
                            <span>切换charts</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===21}" @click="sendTitle($event)">
                            <span>map</span>
                        </li>
                    </ul>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===7}" @click="handleShow(4)">
                        <i class="el-icon-reading"></i>
                        <span>Excel</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(4)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[4]">
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===22}" @click="sendTitle($event)">
                            <span>Excel导出</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===23}" @click="sendTitle($event)">
                            <span>Excel导入</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===24}" @click="sendTitle($event)">
                            <span>多级表头导出</span>
                        </li>
                    </ul>
                </div>
                <div class="SideBar_menu">
                    <div class="Menu_top" v-bind:class="{'clickActive':index===8}" @click="sendTitle($event)">
                        <i class="el-icon-s-release"></i>
                        <span>404</span>
                    </div>
                </div>
                <div class="SideBar_menu">
                    <div class="Menu_top" v-bind:class="{'clickActive':index===9}" @click="sendTitle($event)">
                        <i class="el-icon-link"></i>
                        <span>项目链接</span>
                    </div>
                </div>
                <div class="SideBar_menu" >
                    <div class="Menu_top" v-bind:class="{'clickActive':index===10}" @click="handleShow(5)">
                        <i class="el-icon-s-grid"></i>
                        <span>导航菜单测试</span>
                    </div>
                    <i class="el-icon-arrow-down" @click="handleShow(5)"></i>
                    <ul class="Menu_Ul" v-show="ShowIndex[5]">
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===25}" @click="sendTitle($event)">
                            <i class="el-icon-coffee"></i>
                            <span>菜单一</span>
                        </li>
                        <li class="Menu_Li" v-bind:class="{'clickActive':index===26}" @click="sendTitle($event)">
                            <i class="el-icon-cherry"></i>
                            <span>菜单二</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/houtai/SideBar.css'
    import bus from '../../bus'
    export default {
        name: "SideBar",
        data(){
            return{
                index:0,
                ShowIndex:[false,false,false,false,false,false],
                isSuoXiao:false,  //sidebar是否缩小，用于控制二级菜单的显示功能
            }
        },
        updated() {

        },
        mounted() {
            //获取sidebar中所有下拉小箭头
            var Icon_arrow=document.documentElement.querySelectorAll(".el-icon-arrow-down")
            //获取sidebar中所有二级菜单
            var erjiMenu=document.documentElement.querySelectorAll(".Menu_Ul")
            //通过bus中央事件实现点击header按钮改变sideBar宽度
            bus.$on('handleSidBar',(sidBarBoolean)=>{
                if(sidBarBoolean){
                    //缩小sidebar的宽度
                    this.$refs.handleBar.style.width="28px";
                    //隐藏小箭头
                    Icon_arrow.forEach((item)=>{
                        item.style.display="none";
                    })
                    //隐藏sidebar头
                    this.$refs.title.innerHTML='';
                    //让二级菜单显示到sidebar的右侧外面
                    erjiMenu.forEach((item)=>{
                        item.classList.add("OutsideMenu_Ul")
                    })
                    this.isSuoXiao=true;
                }
                else{
                    this.$refs.handleBar.style.width="200px";
                    this.$refs.title.innerHTML='Vue Project';
                    Icon_arrow.forEach((item)=>{
                        item.style.display="block";
                    })
                    erjiMenu.forEach(item=>{
                        item.classList.remove("OutsideMenu_Ul")
                    })
                    this.isSuoXiao=false;
                }
            })
        },
        methods:{
            //打开侧边栏每一项的下拉框
            handleActive(e){
               var Menu=document.querySelectorAll(".SideBar_menu");
               var parent;
               var Index;
               var liList=document.querySelectorAll(".Menu_Li");
               //获取当前点击的是第几个一级菜单，也就是index
               if(e.target.className==="el-icon-arrow-down" || e.target.className==="Menu_top"){
                   parent=e.target.parentElement;
                   Menu.forEach((item,index)=>{
                       if(Menu[index]==parent){
                           Index=index;
                       }
                   })
                   this.index=Index;
               }
               // else if(e.target.className.indexOf('el')>-1 || e.target.constructor===HTMLSpanElement){
               else if(e.target.parentElement.className==='Menu_top'){
                   parent=e.target.parentElement.parentElement;
                   Menu.forEach((item,index)=>{
                       if(Menu[index]==parent){
                           Index=index;
                       }
                   })
                   this.index=Index;
               }
               else if(e.target.className.indexOf('Menu_Li')>-1){
                    liList.forEach((item,index)=>{
                        if(liList[index]===e.target){
                            Index=index+11
                        }
                    })
                   this.index=Index;

               }
               else if(e.target.parentElement.className.indexOf('Menu_Li')>-1){
                   parent=e.target.parentElement;
                   liList.forEach((item,index)=>{
                       if(liList[index]===parent){
                           Index=index+11
                       }
                   })
                   this.index=Index;
               }
               //  else{
               //      console.log(233)
               // }
            },
            //控制二级菜单的隐藏和显示
            handleShow(index){
                //如果当前sidebar是正常状态
                if(!this.isSuoXiao){
                    this.ShowIndex[index]=!this.ShowIndex[index];
                    this.ShowIndex.push(1);
                    this.ShowIndex.pop(1);
                    console.log(this.ShowIndex)
                }
                //如果当前sidebar是缩小状态
                else{
                    //其余二级菜单隐藏，显示当前点击的二级菜单
                    this.ShowIndex.forEach((item,num)=>{
                        if(num==index){
                            this.ShowIndex[num]=!this.ShowIndex[num];
                            this.ShowIndex.push(1);
                            this.ShowIndex.pop(1);
                        }else{
                            this.ShowIndex[num]=false;
                        }
                    });
                }
            },
            sendTitle(e){
                let title;
                //当点击div时，获取span的内容并发给header组件
                if(e.target.constructor===HTMLDivElement || e.target.constructor===HTMLLIElement) {
                    let span = e.target.getElementsByTagName("span")[0];
                    title = span.innerHTML;
                    bus.$emit('headerTitle',title)
                    var routerName=this.getRouter(title)
                    this.$router.push('/yemian/'+routerName)
                    //当点击span元素时
                }else if(e.target.constructor===HTMLSpanElement){
                    title=e.target.innerHTML;
                    bus.$emit('headerTitle',title)
                    var routerName=this.getRouter(title)
                    this.$router.push('/yemian/'+routerName)
                    //当点击i元素时
                }else{
                    let span=e.target.nextSibling;
                    title=span.innerHTML;
                    bus.$emit('headerTitle',title)
                    var routerName=this.getRouter(title)
                    this.$router.push('/yemian/'+routerName)
                }
                // console.log(title)
            },
            getRouter(title){
                switch (title) {
                    case '首页' :  return 'shouye';
                    case '引导指南' : return 'yindao';
                    case '用户页面' : return 'quanxian/userPage';
                    case '管理员页面' : return 'quanxian/managerPage';
                    case '权限设置' : return 'quanxian/accessSet';
                    case '普通表格' : return 'Table/normal';
                    case '复杂表格' : return 'Table/complex';
                    case '滑动验证' : return 'quanxian';
                    case '上传图片' : return 'bufenzujian/uploadPic';
                    case '轮播' : return 'quanxian';
                    case '滑动charts' : return 'quanxian';
                    case '切换charts' : return 'quanxian';
                    case 'map' : return 'quanxian';
                    case 'Excel导出' : return 'quanxian';
                    case 'Excel导入' : return 'quanxian';
                    case '多级表头导出' : return 'quanxian';
                    case '菜单一' : return 'quanxian';
                    case '菜单二' : return 'quanxian';
                    case 'Icons图标' : return 'Icon';
                    case '404' : return '404';
                    case '项目链接' : return 'quanxian';
                }
            }
        }
    }
</script>

<style scoped>
    /*.active{*/
    /*    color: rgb(79, 148, 212)!important;*/
    /*}*/
</style>
