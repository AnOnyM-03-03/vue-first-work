<template>
    <div class="post" v-for="post in posts" :key="post.id">

    <div><strong>Name:</strong> {{post.name}}</div>

    <div><strong>Age:</strong>{{post.age}}</div>

    </div>
</template>

<script>
export default{
    props:{
        posts:{
            type:Array,
            required:true
        }
    }




}


</script>

<style scoped>
.post{
    padding: 15px;
    border: 3px solid #c0c00f;
    margin-top: 15px;

}
</style>