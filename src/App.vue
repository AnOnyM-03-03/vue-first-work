<template>
<div class="app">

    <h1>Страница с постами</h1>
    <my-input
        v-model="search"
        placeholder="поиск...."
    />
    <div class="app-btns">
        <my-button
            @click="showDialog"
            >
            Создать пост
        </my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
        />
    </div>
    <my-dialog
         :show="dialogVisible">

         <post-form
         @create="createPost"
         />
    </my-dialog>

    <postList 
    v-bind:posts="searchPosts"
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
        selectedSort:'',
        search:'',
        sortOptions:[
            {value:'name', title:'По названию'},
            {value:'username', title:'По содержанию'},
        ]

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
computed:{
    sortedPost() {
        return [...this.posts].sort((post1,post2) =>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    searchPosts(){
        return this.sortedPost.filter(post => post.name.toLowerCase().includes(this.search.toLowerCase()))
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
.app-btns{
    display: flex;
    justify-content: space-between;
    margin:10px 0

}



</style>