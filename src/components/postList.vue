<template>
        <div v-if="posts.length > 0">

          <h3>Список пользователей:</h3>

          <post-item class="post" 
          v-for="post in posts" 
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"

          /> 

        </div>

        <h2 v-else style="color:red">Список пуст</h2>
        
</template>

<script>
import  postItem  from "@/components/postItem";
export default{
    components:{postItem},
    props:{
        posts:{
            type:Array,
            required:true
        }
    }
}


</script>

<style scoped>

</style>