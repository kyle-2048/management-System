<template>
    <div>
        欢迎回来,{{userName}}
    </div>
</template>

<script>
    export default {
        name: "myCenter",
        data(){
            return{
                userName:'',
            }
        },
        mounted() {
            this.userName=JSON.parse(window.localStorage.getItem('user')).val.userName;
        },
        //判断有无localStore，有就进入到center页面，没有就返回登录页面
        beforeRouteEnter(to,from,next){
            // const isLogin=window.sessionStorage.getItem('user');  使用sessionStore，
            // 因为sessionStore不能在不同窗口共享，不符合需求

            var exp=0.5*3600*1000;  //设置localstore过期时长为半小时
            //如果存在名为user的localStore，证明已经登录过，那么需要判断是否超过登录时间
            if(window.localStorage.getItem('user')){
                //获取localstore的产生时间
                let startTime=JSON.parse(window.localStorage.getItem('user')).timer;
                let isTimeout=(new Date().getTime()-startTime)>exp;  //判断是否过期
                if(isTimeout){  //如果已经过期
                    window.localStorage.removeItem('user')   //删除过期的localstore
                    next('/Login');   //跳转到登录页面，让用户重新登录
                }
                else{
                    next();
                }
            }
            //如果没有登录过，那需要跳转回登录页面
            else{
                next('/Login');
            }

        }
    }
</script>

<style scoped>

</style>
