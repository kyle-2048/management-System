<template>
    <div class="BigContainer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BigContainer"
    }
</script>

<style >
    .BigContainer{
        position: relative;
        top: 35px;
        left: 30px;
        width: calc(100% - 60px);
        background: #fff;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
        padding: 20px;
    }
</style>
