<template>
    <div class="navbar-wrapper">
        <div class="grid wide">
            <div class="row">
                <div class="navbar">
                    <ul class="navbar__list">
                        <li class="navbar__item">
                            
                        </li>
                    </ul>
                    <div class="center">
                        <h3>Message</h3>
                    </div>
                    <div class="right">
                        <img src="data:image/png;base64,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" alt="">

                        <svg v-on:click="logoutUser" height="25px" viewBox="0 0 512.00533 512" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0"/><path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from '../../Firebase'
export default {
    data() {
        return {
            
        }
    },
    methods:{
        logoutUser(){
            Firebase.auth()
            .signOut()
            .then(() =>{
                window.localStorage.removeItem('user')
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style>
.center h3{
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 2;
}
.navbar__item{
    list-style: none;
}
.navbar-wrapper{
    width: 100%;
    height: 60px;
    background-color: #F5A623;
    box-shadow: 0 4px 4px #808888;
    z-index: 100;
}
.navbar{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.right img{
    width: 25px;
    height: 25px;
    margin-right: 50px;
    cursor: pointer;
}
.right  svg{
    cursor: pointer;
}
</style>