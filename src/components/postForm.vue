<template>
    <form @submit.prevent>
        <input
        class="input" 
        v-model="post.name" 
        @input="post.name = $event.target.value"
        type="text" 
        placeholder="name">
        <input
        class="input" 
        v-model="post.age"
        @input="post.age = $event.target.value"
        type="text" 
        placeholder="age">
        <button @click="createPost">add posts</button>
    </form>
</template>

<script>
export default{
    data(){
        return{
            post:{
            name:'',
            age:''
            }
            
        }
    },
    methods:{
        createPost(){
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
            name:'',
            age:''
        }
    }
        }
}


</script>
<style scoped>

form{
    display: flex;
    flex-direction: column;

}
button{
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px;
    background-color: aqua;
}
.input{
    width: 100%;
    border: 3px solid #03c292;
    padding: 10px;
    margin-top: 10px;
}
</style>