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

    <div class="page-wrapper">
        <div 
        v-for="pageNum in totalPage" 
        :key="pageNum"
        class="page"
        :class="{
            'active-page':page === pageNum
        }"
        @click="changePage(pageNum)"
        > {{pageNum}}
        </div>
    </div>

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
        page:1,
        limit:3,
        totalPage:0,
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
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users',{
            params:{
                _page:this.page,
                _limit:this.limit
            }
        })
        this.totalPage = Math.ceil(resp.headers['x-total-count'] / this.limit)
        this.posts = resp.data
        }catch(e){
            alert("Ошибка")
        }
        finally{
        this.isPostLoading = false
        }
    },
    changePage(pageNum){
        this.page = pageNum
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
watch:{
    page(){
        this.fetchPosts()
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
.page-wrapper{
    display: flex;
    margin-top: 15px;
}
.page{
    border: 1px solid #000;
    padding: 10px;
}
.active-page{
    background-color: aquamarine;
}



</style>