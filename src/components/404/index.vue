<template>
    <div>
        <div class="all">
            <div class="notFound_content">
                <span>Oooops! Sorry The Page Not Found :(</span>
                <button @click="turnShouye">返回首页</button>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/style/404/404.css'
    export default {
        name: "index",
        methods:{
            turnShouye(){
                this.$router.push('shouye')
            }
        }
    }
</script>

<style scoped>
    .all{
        position: relative;
        width: 100%;
        height: 100%;
        background: url("../../assets/img-404.png") no-repeat #b5c794 center center !important;
    }
</style>
