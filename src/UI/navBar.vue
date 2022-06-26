<template>

<div class="navBar">
    <div class="home" @click="$router.push('/')">Home</div>
    <div class="nav-bar__btn">
        <my-button @click="$router.push('/post')">posts</my-button>
    </div>
</div>

</template>

<script>

export default{

data(){

return{ }

},

}

</script>

<style scoped>
.navBar{
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px black;
    display: flex;
    align-items: center;
    padding: 0 10px;

}
.nav-bar__btn{
    margin-left: auto;
}
.home{
    cursor: pointer;
    font-size: 20px;
    color: #fff;
}
</style>