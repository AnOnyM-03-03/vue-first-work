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
        v-model="post.username"
        @input="post.username = $event.target.value"
        type="text" 
        placeholder="username"/>
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
            username:''
            }
            
        }
    },
    methods:{
        createPost(){
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
            name:'',
            username:''
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