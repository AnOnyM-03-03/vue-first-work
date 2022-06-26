<template>
<nav-bar></nav-bar>
<div  class="app">
    <router-view></router-view>
    
</div>

</template>

<script>
import navBar from "@/UI/navBar";
export default{
    components:{
        navBar
    },
data(){

return{ }

},

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