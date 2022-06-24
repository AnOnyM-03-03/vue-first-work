<template>
<div class="app">
    <h1>Страница с постами</h1>
    <my-button
    style="margin:10px 0"
    @click="showDialog"
    >
     Создать пост
    </my-button>
    <my-dialog
         :show="dialogVisible">
         <post-form
         @create="createPost"
         />
    </my-dialog>
    <postList 
    v-bind:posts="posts"
    @remove="removePost"
    v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
</div>   
</template>

<script>
import postList from './components/postList.vue'
import postForm from './components/postForm.vue'
import axios from 'axios'
export default{
    components:{
        postList,postForm
    },

data(){

    return{
        posts:[],
        dialogVisible:false,
        isPostLoading: false,

    }
},

methods:{
    createPost(post){
        this.posts.push(post)
        this.dialogVisible = false
    },
    removePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
        this.dialogVisible = true
    },
    async fetchPosts(){
        try{
        this.isPostLoading = true
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.posts = resp.data
        }catch(e){
            alert("Ошибка")
        }
        finally{
        this.isPostLoading = false
        }
    }
},
mounted(){
    this.fetchPosts()
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