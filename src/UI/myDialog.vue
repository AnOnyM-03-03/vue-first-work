<template>

<div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
        <slot></slot>
    </div>
</div>

</template>

<script>
export default{
    name:'my-dialog',
    props:{
        show:{
            type:Boolean,
            default:false,

        }
    },
methods:{
    hideDialog(){
        this.$emit('update:show', false)
    }
},

}

</script>

<style scoped>

.dialog{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0, .8);
    position: fixed;
    display: flex;
}

.dialog__content{
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    min-height: 100px;
    min-width: 300px;
    padding: 20px;
}

</style>