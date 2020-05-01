<template>
    <div class="register-wrapper">
        <div class="login">
            <img src="../../static/img/avatar.png" class="avatar">
            <h1>Register</h1>
            <form>
            <p>Email</p>
            <input v-model="email" type="email"  placeholder="Enter Password">
            <p>Password</p>
            <input v-model="password" type="password"  placeholder="Enter Password">
            <input v-if="!isLoadingButtonLogin" v-on:click="loginUser" type="submit" name="submit" value="Login">
            <button  v-if="isLoadingButtonLogin" class="login-button"><LoadingButton/></button>
            <a href="#">Forget Password</a>
            <router-link class="link" to="/register">Register</router-link> 
            </form>
        </div>
    </div>
</template>
<script>
import LoadingButton from '../loading/LoadingLogin'
import Firebase from '../../Firebase'
export default {
    data() {
        return {
            email:'',
            password:'',
            isLoadingButtonLogin:false
        }
    },
    components:{
        LoadingButton
    },
    methods:{
        loginUser(event){
        event.preventDefault();
        this.isLoadingButtonLogin=true
            console.log(this.email);
                Firebase.auth()
                .signInWithEmailAndPassword(this.email,this.password)
                .then((user) =>{
                    this.isLoadingButtonLogin=false
                    window.localStorage.setItem('user',JSON.stringify(user.user))
                    this.$router.push('/')
                })
                .catch((err) =>{
                    console.log(err);
                })
        }
    }
}
</script>
<style>
.login-button{
    width: 100%;
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
    display: block;
    margin-bottom: 20px;
}
.login-button:hover{
    cursor: pointer;
    background: #39dc79;
    color: #000;
}
.link {
    margin-top: 10px;
}
.login{
    width: 320px;
    height: 420px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px 30px;
    border-radius: 5px;
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}
h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
}
.login p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.login input{
    width: 100%;
    margin-bottom: 20px;
}
.login input[type="text"], input[type="password"],input[type="email"]
{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}
.login input[type="submit"]
{
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
}
.login input[type="submit"]:hover
{
    cursor: pointer;
    background: #39dc79;
    color: #000;
}

.login a{
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    text-align: center;
    display: block;
}
.login a:hover
{
    color: #39dc79;
}
.register-wrapper{
    position: relative;
    width: 100vw;
    height: 100vh;
    margin:0;
	padding:0;
	background-size:cover;
	font-family: sans-serif;
    background-image: url('../../static/img/image.jpg');
    background-position: center;
}
</style>