<template>
    <form @submit.prevent>
        <my-input
        class="input" 
        v-model="post.name" 
        @input="post.name = $event.target.value"
        type="text" 
        placeholder="name"/>
        <my-input
        class="input" 
        v-model="post.age"
        @input="post.age = $event.target.value"
        type="text" 
        placeholder="age"/>
        <my-button
         @click="createPost"
         style="margin-top:15px"
         />
    </form>
</template>

<script>
export default{
    data(){
        return{
            post:{
            id:'',
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


</style>