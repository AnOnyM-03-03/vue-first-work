<template>
     <div class="post">
        <div>
            <div><strong>Name:</strong> {{post.name}}</div>
            <div><strong>username:</strong>{{post.username}}</div>
        </div>
        <div class="post-buttons">
            <my-button
            @click="$emit('remove', post)"
            >
            Удалить
            </my-button>  
        </div>
    </div>
</template>

<script>
export default{
    props:{
        post:{
            type: Object,
            required: true

        }
    },

data(){

return{ }

},

}

</script>

<style>
.post{
    padding: 15px;
    border: 3px solid #c0c00f;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>