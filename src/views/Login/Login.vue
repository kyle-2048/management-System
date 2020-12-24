    <template>
    <div class="all">
        <div class="Login">
            <div class="Login_title">Vue 后台管理系统</div>
            <div class="Login_container">
                <div class="Login_top">
                    <span>Sign up now</span>
                    <span>Enter your username and password to log on:</span>
                    <div class="el-icon-key"></div>
                </div>
                <div class="Login_bottom">
                    <div class=text_container>
                        <input type="text" class="el-icon-user" v-model="user">
                        <i class="el-icon-user"></i>
                    </div>
                    <div class="password_container">
                        <input type="password" class="el-icon-user" v-model="password" @keyup.13="handleButton">
                        <i class="el-icon-lock"></i>
                        <i class="el-icon-view"></i>
                    </div>
                    <input type="button" value="登录" @click="handleButton" >
                </div>
            </div>
        </div>
        <div class="Login_tips">
            <div class="header">
                <i class="el-icon-s-opportunity"></i>
                <span>提示</span>
                <i class="el-icon-close"></i>
            </div>
            <div class="main">
                目前有两个登陆角色，管理员和普通用户，账号分别为：admin、kyle,密码都为：123456
            </div>
        </div>
    </div>



</template>

<script>
    import '@/style/Login/Login.css'
    export default {
        name: "index",
        data() {
            return {
                user:'',
                password:'',
            };
        },
        methods: {
            handleButton(){
                if((this.user==='admin' || this.user==='kyle') && this.password==='123456'){
                    //用Sessionstore存储进行登录验证
                    // let data={
                    //     userName:this.user,
                    //     password:this.password,
                    // }
                    // let d=JSON.stringify(data)
                    // window.sessionStorage.setItem("user",d)

                    //用localstore存储进行登录验证
                    this.setToken('user',{userName:this.user,password:this.password});
                    this.$router.push('/yemian')
                }else{
                    alert("你输入的账号密码有误")
                }
            },
            //封装一个存储登录信息localStore的方法，可以当做Token
            setToken(key,value){
                let curtime=new Date().getTime();  //存储现在的时间，用于判断token是否过期
                let valueDate=JSON.stringify({
                    val:value,
                    timer:curtime
                });
                window.localStorage.setItem(key,valueDate)
            }
        },
        //每次回到登录页面，删除localstore
        mounted() {
            window.localStorage.removeItem("user")
        }

    }
</script>

<style  scoped>



</style>
