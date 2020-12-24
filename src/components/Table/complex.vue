<template>
     <div class="all">
         <BigContainer>
             <div class="table_container">
                 <span>
                     复杂表格
                 </span>
                 <hr color="#ccc">
                 <div class="table">
                     <el-table
                             :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                             :current-page.sync="currentPage"
                             border
                             style="width: 100%">
                         <el-table-column
                                 prop=""
                                 label="序号"
                                 min-width="3">
                             <template slot-scope="scope">
                                 {{scope.$index+1}}
                             </template>
                         </el-table-column>
                         <el-table-column
                                 prop="id"
                                 label="ID"
                                 min-width="3">
                         </el-table-column>
                         <el-table-column
                                 prop="number"
                                 label="订单号"
                                 min-width="9">
                         </el-table-column>
                         <el-table-column
                                 prop="time"
                                 min-width="9"
                                 label="下单时间">
                         </el-table-column>
                         <el-table-column
                                 prop="address"
                                 min-width="8"
                                 label="配送地址">
                         </el-table-column>
                         <el-table-column
                                 prop="tel"
                                 min-width="8"
                                 label="联系电话">
                         </el-table-column>
                         <el-table-column
                                 prop="sender"
                                 min-width="5"
                                 label="配送员">
                         </el-table-column>
                         <el-table-column
                                 prop="status"
                                 min-width="6"
                                 label="状态">
                             <template slot-scope="scope">
                                 <el-tag :type="tagClass(scope.row.status)" ref="status">{{scope.row.status | tagContent()}}</el-tag>
                             </template>
                         </el-table-column>
                         <el-table-column
                                 prop=""
                                 min-width="15"
                                 label="操作">
                             <template slot-scope="scope">
                                 <div class="buttonGroup">
                                     <button @click="openEdit(scope.$index)">编辑</button>
                                     <button @click="handleCheck(scope.$index)">审核</button>
                                     <button @click="handleCancel(scope.$index)">取消</button>
                                     <button @click="handleDelete(scope.$index)">删除</button>
                                 </div>
                             </template>
                         </el-table-column>
                     </el-table>
                     <el-pagination
                         @current-change="handleCurrentChange"
                         :page-size="pagesize"
                         :total="this.tableData.length"
                         layout="prev,pager,next">
                     </el-pagination>

                 </div>

             </div>
         </BigContainer>
         <div class="editContainer" v-show="editBoolean">
            <div class="header">
                <span>订单修改</span>
                <i class="el-icon-close" @click="closeInputCon" style="cursor: pointer"></i>
            </div>
             <div class="inputContainer">
                <div class="title">
                    <span>订单号</span>
                    <span>订单时间</span>
                    <span>配送地址</span>
                    <span>联系电话</span>
                    <span>配送员</span>
                    <span>状态</span>
                </div>
                 <div class="input">
                     <el-input
                             placeholder="请输入内容"
                             v-model="input1"
                             :disabled="true">
                     </el-input>
                     <div class="block">
                         <el-date-picker
                                 v-model="input2"
                                 type="datetime"
                                 :disabled="true"
                                 placeholder="选择日期时间">
                         </el-date-picker>
                     </div>
                     <el-input v-model="input3" placeholder="请输入地址"></el-input>
                     <el-input v-model="input4" placeholder="请输入电话"></el-input>
                     <el-input v-model="input5" placeholder="请输入姓名"></el-input>
                     <el-select v-model="input6" placeholder="请选择">
                         <el-option
                                 v-for="item in options"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                         </el-option>
                     </el-select>
                     <div class="buttonGroup">
                         <el-button type="primary" @click="changeTableData">确认</el-button>
                         <el-button @click="closeInputCon">取消</el-button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
    import '@/style/Table/complex.css'
    import bus from '../../bus'
    export default {
        name: "complex",
        data(){
            return{
                editBoolean:false, //控制edit框是否显示
                tableData:[], //存储请求的数据
                changeIndex:null, //当点击编辑时，存储要修改的数据行数，为了让changeTableData方法获取index
                input1:'',  //第一个input框绑定的值
                input2:'',
                input3:'',
                input4:'',
                input5:'',
                options: [{  //选择框的选项绑定的值
                    value: '待审核',
                    label: '待审核'
                }, {
                    value: '已审核',
                    label: '已审核'
                }, {
                    value: '已取消',
                    label: '已取消'
                },
                ],
                input6: '',
                currentPage:1,  //现在的页数
                pagesize:8, //每页的行数

            }

        },
        methods:{
            //根据tableData不同的status值使得tag框获取动态的样式
            tagClass(status){
                switch (status) {
                    case 1 : return "warning";
                    case 2 : return "success";
                    case 3 : return "danger"
                }
            },
            //利用index修改tableData数据，实现表格数据修改
            openEdit(index){
                //修改页面背景颜色
                bus.$emit('changeBigBackground',true);
                this.editBoolean=true;
                this.changeIndex=index;
                this.input1=this.tableData[this.changeIndex].number
                this.input2=this.tableData[this.changeIndex].time
                this.input3=this.tableData[this.changeIndex].address
                this.input4=this.tableData[this.changeIndex].tel
                this.input5=this.tableData[this.changeIndex].sender
                //获取编辑框最后一个input对应的值
                if(this.tableData[this.changeIndex].status===1){
                    this.input6="待审核";
                }
                else if(this.tableData[this.changeIndex].status===2){
                    this.input6="已审核";
                }
                else{
                    this.input6="已取消";
                }
            },
            //将状态改为已审核
            handleCheck(index){
                this.tableData[index].status=2;
            },
            //将状态改为已取消
            handleCancel(index){
                this.tableData[index].status=3;
            },
            //删除这一行的数据
            handleDelete(index){
                this.tableData.splice(index,1)
            },
            //关闭编辑框，将input的值重新设为空
            closeInputCon(){
                bus.$emit('changeBigBackground',false);
                this.editBoolean=false;
                this.input1='';
                this.input2='';
                this.input3='';
                this.input4='';
                this.input5='';
                this.input6='';
                this.changeIndex=null;
            },
            //提交数据，修改tableData的数据，将input的值重新设为空
            changeTableData(){
                bus.$emit('changeBigBackground',false)
                this.editBoolean=false;
                this.tableData[this.changeIndex].address=this.input3;
                this.tableData[this.changeIndex].tel=this.input4;
                this.tableData[this.changeIndex].sender=this.input5;
                // console.log(this.input6)
                // 根据input框所选的值修改tableData里的status值
                if(this.input6==="待审核"){
                    this.tableData[this.changeIndex].status=1;
                }else if(this.input6==="已审核") {
                    this.tableData[this.changeIndex].status=2;
                }else{
                    this.tableData[this.changeIndex].status=3;
                }

                this.input1='';
                this.input2='';
                this.input3='';
                this.input4='';
                this.input5='';
                this.input6='';
                this.changeIndex=null;
            },
            // turnTime(time){
            //     // console.log(typeof(time));//对象格式
            //     var str=JSON.stringify(time) //将对象转换为JSON字符串
            //     console.log(str)
            //     time=str.substr(1,10)+" "+str.substr(12,5)
            //     return time
            // }
            handleCurrentChange(val){
                this.currentPage=val;
            }
        },
        mounted() {
            //请求fastmock伪造的数据
            this.axios.get('https://www.fastmock.site/mock/9ad8dd1c1f6525897f9f91f6396cf684/kyle01/complexTable')
            .then(res=>{
                this.tableData=res.data.data.table;
                console.log(this.tableData)
            })
        },
        filters:{
            //根据tableData的status，返回对应的状态
            tagContent(item){
                switch (item) {
                    case 1 : return "待审核";
                    case 2 : return "已审核"
                    case 3 : return "已取消"
                }
            }
        }
    }
</script>

<style scoped>

</style>
