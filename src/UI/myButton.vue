<template>
<button>
    <slot>add posts</slot>
</button>

</template>

<script>

export default{

    name:'my-button',

    data(){
        return{ }
          },
    }
</script>

<style>
button{
    align-self: flex-end;
    padding: 10px;
    background-color: aqua;
    cursor: pointer;
}
</style>