<template>
    <div class="register-wrapper">
        <div class="login-box">
            <img src="../../static/img/avatar.png" class="avatar">
            <h1>Register</h1>
            <form>
            <p>Username</p>
            <input v-model="name" type="text"  placeholder="Enter Username">
            <p>Email</p>
            <input v-model="email" type="text"  placeholder="Enter Password">
            <p>Password</p>
            <input v-model="password" type="password"  placeholder="Enter Password">
            <p>Confirm Password</p>
            <input v-model="confirmPassword" type="password"  placeholder="Enter Password">
            <input v-if="!isLoadingButton" v-on:click="createNewUser" type="submit" name="submit" value="Create">
            <button v-if="isLoadingButton" class="buttonLoading"><Loading/></button>
            <a href="#">Forget Password</a>
            <router-link class="link" to="/login">Login</router-link> 
            </form>
        </div>
    </div>
</template>
<script>
import Firebase from '../../Firebase'
import Loading from '../loading/LoadingLogin'
import md5 from 'md5'
export default {
    data() {
        return {
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            key:'',
            isLoadingButton:false
        }
    },
    components:{
        Loading
    },
    methods:{
        createNewUser(event){
            event.preventDefault();
            this.isLoadingButton=true
            Firebase.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((user) =>{
                user.user.updateProfile({
                    displayName:this.name,
                    photoURL:`http://gravatar.com/avatar/${md5(user.user.email)}?d=identicon`
                })
            .then(() =>{
                    const key = user.user.uid
                    Firebase.database()
                    .ref('messages')
                    .child(key)
                    .set({name:"1111"})
                    .then(() =>{
                        console.log("Create Message Success...");
                    })
                    .catch((err) =>{
                        console.log(err);
                        
                    })
                    const newUser ={
                        name:user.user.displayName,
                        email:user.user.email,
                        avatar:user.user.photoURL,
                        id:user.user.uid
                    }
                    Firebase.database()
                    .ref('users')
                    .child(key)
                    .set(newUser)
                    .then(() =>{
                        this.name=''
                        this.email=''
                        this.password=''
                        this.confirmPassword=''
                        this.isLoadingButton=false
                        this.$router.push('/login')
                    })
            })
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }
}
</script>

<style>
.buttonLoading{
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
    width: 100%;
    margin-bottom: 20px;
    display: block;
}
.buttonLoading:hover{
    cursor: pointer;
    background: #39dc79;
    color: #000;
}
.link {
    margin-top: 10px;
}
.login-box{
    width: 420px;
    height: 600px;
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
.login-box p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.login-box input{
    width: 100%;
    margin-bottom: 20px;
}
.login-box input[type="text"], input[type="password"],input[type="email"]
{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}
.login-box input[type="submit"]
{
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
}
.login-box input[type="submit"]:hover
{
    cursor: pointer;
    background: #39dc79;
    color: #000;
}

.login-box a{
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    text-align: center;
    display: block;
}
.login-box a:hover
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