<template>
    <div class="home-wrapper">
        <Navbar/>
        <Content/>
    </div>
</template>
<script>
import Navbar from './Navbar'
import Content from './Content'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Navbar,
        Content
    }
}
</script>

<style>
.home-wrapper{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
</style>