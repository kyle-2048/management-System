<template>
    <div class="all">
        <BigContainer>
            <p>图片上传</p>
            <el-divider></el-divider>
            <div class="Upload_title">
                <i class="el-icon-s-opportunity"></i>
                <span>点击上传用户图像 （支持image/jpg,image/jpeg,image/png,image/gif格式图片 且大小不能超过2MB）</span>
            </div>
            <div class="picContainer">
                <el-upload
                        class="avatar-uploader"
                        action="#"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </BigContainer>
    </div>
</template>

<script>
    import '../../style/bufenzujian/uploadPic.css'
    export default {
        name: "uploadPic",
        data(){
            return{
                imageUrl: '',
            }
        },
        //此上传图片功能都是从element ui copy下来的
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>

</style>
