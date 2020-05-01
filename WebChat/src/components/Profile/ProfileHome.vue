<template>
    <div class="profile">
        <NavbarProfile/>
        <MainProfile/>
    </div>
</template>

<script>
import NavbarProfile from './ProfileNavbar'
import MainProfile from './ProfileMain'
export default {
    data() {
        return {
            
        }
    },
    components:{
        NavbarProfile,
        MainProfile
    }
}
</script>

<style>

</style>