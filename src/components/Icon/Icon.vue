<template>
    <div class="all">
        <BigContainer>
            <div class="title">
                <i class="el-icon-s-opportunity"></i>
                <span>可以使用的图标</span>
            </div>
            <el-tabs type="border-card">
                <el-tab-pane label="Element Icon">
                    <span v-text="word1">
                    </span>
                    <div class="icon_container">
                        <div v-for="data in IconList">
                            <i :class="data"></i>
                            <span>
                                {{data}}
                            </span>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="阿里Icon">
                    <p v-text="word2">
                    </p>
                    <div class="icon_container">
                        <div v-for="data in IconList2">
                            <i class="el-icon-weixin iconfont" ></i>
                            <span>
                                {{data}}
                            </span>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </BigContainer>
    </div>
</template>

<script>
    import '../../style/Icon/icon.css'
    import BigContainer from "../BigContainer";
    export default {
        name: "Icon",
        data(){
            return{
                word1:'直接通过设置类名为 el-icon-iconName 来使用即可，例如：<i class="el-icon-platform-eleme"></i>',
                IconList:['el-icon-platform-eleme','el-icon-eleme','el-icon-delete-solid','el-icon-delete', 'el-icon-s-tools',
                    'el-icon-setting', 'el-icon-user-solid','el-icon-user', 'el-icon-phone','el-icon-more',
                    'el-icon-more-outline', 'el-icon-star-on','el-icon-star-off', 'el-icon-s-goods', 'el-icon-goods',
                    'el-icon-warning'],
                word2:'这里是通过使用阿里iconfont在项目中生成字体图标，直接通过设置类名为 el-icon-iconName iconfont 来使用即可，例如：<i class="el-icon-weixin iconfont"></i>（如果需要添加更多图标就去iconfont官方添加图标，资源很多）',
                IconList2:['el-icon-weixin', 'el-icon-github', 'el-icon-twitter', 'el-icon-table', 'el-icon-weibo',
                    'el-icon-dashang', 'el-icon-guojihua', 'el-icon-huangguan', 'el-icon-lunbo', 'el-icon-excel'],
            }
        }
    }
</script>

<style scoped>

</style>
