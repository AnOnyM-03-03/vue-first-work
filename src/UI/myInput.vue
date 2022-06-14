<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>

export default{
    name:'my-input',
    props:{
        modelValue:[String, Number]
    },

data(){

return{ }

},
methods:{
    updateInput(e){
        this.$emit('update:modelValue', e.target.value)
    }
}

}

</script>

<style>
.input{
    width: 100%;
    border: 3px solid #03c292;
    padding: 10px;
    margin-top: 10px;
}
</style>