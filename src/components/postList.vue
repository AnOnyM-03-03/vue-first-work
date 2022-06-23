<template>
        <div v-if="posts.length > 0">

          <h3>Список пользователей:</h3>

          <transition-group name="user-list">
            <post-item class="post" 
                v-for="post in posts" 
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)"

            />
          </transition-group>
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
.user-list-item{
    display: inline-block;
    margin-right: 10px;
} 
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease-in-out;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>