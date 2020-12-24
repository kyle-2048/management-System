<template>
    <div >
        <div class="header">
            <i class="el-icon-s-opportunity"></i>
            <span>你的权限页面是:</span>
        </div>
        <div class="opportunityContainer" >
            <div class="opportunityData" v-for="(data,index) in opportunityList" :key="index">
                {{data}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "authority",
        data(){
            return{
                opportunityList:['Home','Dashbord','Driver','Driver-index','Permission','PageUser','PageAdmin','Roles','Table','BaseTable','ComplexTable','Icons','Icons-index','Components','Sldie-yz','Upload','Carousel','Echarts','Sldie-chart','Dynamic-chart','Map-chart','Excel','Excel-out','Excel-in','Mutiheader-out','Error','Page404','Github','Nav','Test','Nav1','Nav2','Nav2-1','Nav2-2','Nav2-2-1','Nav2-2-2','*404']
            }
        }
    }
</script>

<style lang="less" scoped>
    .opportunityContainer{
        /*width: 100%;*/
        /*height: 100%;*/
        display: flex;
        flex-wrap: wrap;
        .opportunityData{
            height: 30px;
            background: rgba(64,158,255,.1);
            text-align: center;
            line-height: 30px;
            color: #409eff;
            border: 1px solid rgba(64,158,255,.2);
            font-size: 12px;
            padding-left: 8px;
            padding-right: 8px;
            margin: 8px;
        }
    }
    .header{
        padding-bottom: 10px;
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
</style>
