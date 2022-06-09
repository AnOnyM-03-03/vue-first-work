<template>
<div class="app">
    <post-form
    @create="createPost"
     />
    <postList 
    v-bind:posts="posts"
    
    />
</div>   
</template>

<script>
import postList from './components/postList.vue'
import postForm from './components/postForm.vue'
export default{
    components:{
        postList,postForm
    },

data(){

    return{
        posts:[
        {name:'dima',id:1,age:23},
        {name:'alex',id:2,age:23},
        
    ],
    name:'',
    age:''

    }
},

methods:{
    createPost(post){
        this.posts.push(post)
    }
}

}
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}   

.app{
    padding: 30px;
}



</style>