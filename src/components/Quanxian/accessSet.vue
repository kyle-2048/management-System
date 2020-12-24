<template>
    <div class="all">
        <BigContainer>
            <div class="access_container" >
                <el-row>
                    <el-button type="primary" @click="AddConShow">添加权限</el-button>
                </el-row>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%; margin-top: 30px;">
<!--                    这里的prop值对应的是data里面的id和detail状态，相当于v-model-->
                    <el-table-column
                            fixed
                            prop="id"
                            label="身份"
                            min-width="30%">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="detail"
                            label="姓名"
                            min-width="30%">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            align="center"
                            min-width="40%">
                        <template slot-scope="scope">
                            <el-button @click="editClick(scope.row,scope.$index)" type="primary" size="small">编辑</el-button>
                            <el-button type="warning" size="small" @click="showDelCon(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </BigContainer>
        <div class="addCon" v-show="addConBoolean">
            <div class="top">
                <span>权限编辑</span>
                <i class="el-icon-close" @click=cancelCon></i>
            </div>
           <div class="inputContainer">
                <span>身份</span>
               <input type="text" placeholder="请输入要添加的身份类别" v-model="id">
           </div>
            <div class="inputContainer">
                <span>说明</span>
                <input type="text" placeholder="请输入相关说明" v-model="detail">
            </div>
            <div class="CheckBoxContainer">
                <div class="title">菜单</div>
                <div class="CheckBoxGroup">
                    <!--            勾选的label值绑定到数组中-->
                    <el-checkbox-group v-model="checkBoxList">
                        <el-checkbox label="首页"></el-checkbox>
                        <el-checkbox label="引导指南"></el-checkbox>
                        <el-checkbox label="权限许可"></el-checkbox>
                        <el-checkbox label="Table" ></el-checkbox>
                        <el-checkbox label="Icons图标"></el-checkbox>
                        <el-checkbox label="部分组件"></el-checkbox>
                        <el-checkbox label="Echarts"></el-checkbox>
                        <el-checkbox label="Excel"></el-checkbox>
                        <el-checkbox label="404"></el-checkbox>
                        <el-checkbox label="项目链接"></el-checkbox>
                        <el-checkbox label="导航菜单测试"></el-checkbox>
                    </el-checkbox-group>
                    <!--            确认取消框-->
                </div>
            </div>
            <el-row class="buttonGroup">
                <el-button type="primary" @click="submitIfo">确认</el-button>
                <el-button type="primary" @click="cancelCon">取消</el-button>
            </el-row>
        </div>
        <div class="DelCon" v-show="DelConBoolean">
            <div>
                <span>提示</span>
                <i class="el-icon-close" @click="CloseDelCon"></i>
            </div>
            <div>
                <i class="el-icon-warning"></i>
                <span>此操作将永久删除相关数据, 是否继续?</span>
            </div>
            <el-row class="buttonGroup2">
                <el-button type="primary" @click="CloseDelCon" size="mini" style="background: #ffffff;color:black;border-color: #ccc">取消</el-button>
                <el-button type="primary" @click="handleDel" size="mini">确认</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    import bus from '../../bus';
    import '@/style/Quanxian/accessSet.css'
    export default {
        name: "accessPermissions",
        updated() {
            // console.log(this.checkBoxList)
        },
        methods:{
            ////Table
            //点击编辑
            editClick(row,index) {
                console.log(row);
                bus.$emit('changeBigBackground',true);
                this.submitForm=2;
                this.addConBoolean=true;
                this.id=row.id;
                this.detail=row.detail;
                this.checkBoxList=row.TickList;
                this.editIndex=index;
            },
            ////添加框
            // 显示添加框
            AddConShow(){
                //这个按钮点一次后，大div显示出来，阻碍了再次点击这个按钮，所以要通过其他的按钮来实现关闭大div
                bus.$emit('changeBigBackground',true)
                this.addConBoolean=true;
                this.submitForm=1;
            },
            //关闭添加框
            cancelCon(){
                bus.$emit('changeBigBackground',false);
                this.id='';
                this.detail='';
                this.checkBoxList=[];
                this.addConBoolean=false;
                this.editIndex=null;
            },
            //添加框点击确认提交内容
            submitIfo(){
                //当要添加一条数据
                if(this.submitForm===1){
                    if(this.id.length>0 && this.detail.length>0){
                        this.tableData.push({id:this.id,detail:this.detail,TickList:this.checkBoxList})
                        this.id='';
                        this.detail='';
                        this.checkBoxList=[];
                        this.addConBoolean=false;
                        bus.$emit('changeBigBackground',false);
                    }
                    else{
                        alert('请先输入你要添加的内容');
                    }
                }
                //当要编辑一条数据
                else{
                    if(this.id.length>0 && this.detail.length>0){
                        this.tableData[this.editIndex].id=this.id;
                        this.tableData[this.editIndex].detail=this.detail;
                        this.tableData[this.editIndex].TickList=this.checkBoxList;
                        this.id='';
                        this.detail='';
                        this.checkBoxList=[];
                        this.editIndex=null;
                        this.addConBoolean=false;
                        bus.$emit('changeBigBackground',false);
                    }
                    else{
                        alert('请先输入你要添加的内容');
                    }
                }


            },
            ////删除确认框
            //显示删除确认框
            showDelCon(index){
                bus.$emit('changeBigBackground',true);
                this.DelConBoolean=true;
                this.DelIndex=index;
            },
            //点击删除
            handleDel(){
                this.tableData.splice(this.DelIndex,1);
                this.DelIndex=null;
                bus.$emit('changeBigBackground',false);
                this.DelConBoolean=false;
            },
            //关闭删除确认框
            CloseDelCon(){
                bus.$emit('changeBigBackground',false);
                this.DelConBoolean=false;
            }
        },
        data(){
          return{
              name:"",
              addConBoolean:false, //显示添加框
              id:'',
              detail:'',
              DelConBoolean:false,  //显示删除确认框
              DelIndex:null,
              submitForm:1,
              editIndex:null,  //存储要编辑的那条数据
              tableData: [{
                  id: 'admin',
                  detail: 'I am Admin',
                  TickList:[],  //存储每行table勾选的值
              }, {
                  id: 'user',
                  detail: 'user',
                  TickList:[],
              }, {
                  id: 'example',
                  detail: 'I am Example',
                  TickList:[],
              },
              ],
              checkBoxList:[]  //和添加框实时勾选的值绑定一起
          }
        },
    }
</script>

<style >

</style>
