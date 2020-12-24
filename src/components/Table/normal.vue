<template>
    <div>
        <BigContainer>
        <div class="table_container">
            <span>
                带分页表格
            </span>
            <hr color="#ccc">
            <div class="table">
                <el-table
                        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        :current-page.sync="currentPage"
                        style="width: 100%"

                >
                    <el-table-column
                            prop="id"
                            label="ID#"
                            sortable
                            min-width="15%">
                    </el-table-column>
                    <el-table-column
                            prop="产品名称"
                            label="产品名称"
                            sortable
                            min-width="22%">
                    </el-table-column>
                    <el-table-column
                            prop="price"
                            label="价格"
                            sortable
                            min-width="22%">
                    </el-table-column>
                    <el-table-column
                            prop="数量"
                            label="数量"
                            sortable
                            min-width="22%">
                    </el-table-column>
                    <el-table-column
                            prop="status "
                            label="运营状态"
                            min-width="23%">
<!--                            :formatter="formatter">-->
                        <template slot-scope="scope">
<!--                            这个设置了tag样式随着status的值变化而变化，还用了vue.filter对status的值进行了转换-->
                            <el-tag :type="tagClass(scope.row.status)" size="small" >{{scope.row.status | turnStatus() }}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :page-size="pagesize"
                        layout="total, prev, pager, next, jumper"
                        :total="this.tableData.length">
                </el-pagination>
            </div>
        </div>


        </BigContainer>
    </div>
</template>

<script>
    import '@/style/Table/normal.css'
    export default {
        name: "normal",
        data(){
            return{
                tableData:[],
                currentPage:1,
                pagesize:8,
            }
        },
        methods:{
            //实现tag的动态样式
            tagClass(status){
              switch (status) {
                  case 1 : return 'success';
                  case 2 : return 'warning';
                  case 3 : return 'danger'
              }
            },
            //val应该就是点击的值
            handleCurrentChange(val){
                this.currentPage=val;
            }

        },
        mounted() {
            //请求fastmock伪造的数据
            this.axios.post('https://www.fastmock.site/mock/9ad8dd1c1f6525897f9f91f6396cf684/kyle01/normalTable')
            .then((res)=>{
                this.tableData=res.data.data.table
                console.log(res.data.data.table)
                console.log(this.tableData)
            })
        },
        filters:{
            //对请求回来的status值进行处理
            turnStatus(item){
                switch (item) {
                    case 1 : return '已完成';
                    case 2 : return '进行中';
                    case 3 : return '已取消'
                }
            }
        }

    }
</script>

<style scoped>

</style>
