<template>
    <div class="content--wrapper">
        <div class="grid">
            <div class="row">
                <div class="col pc-3">
                    <div class="list-message">
                        <ul class="message__list">
                            <li v-on:click="getUser(user)" v v-if="user.id !== userCurrent.uid" v-bind:key="user.id" class="message__item" v-for="user in listUser">
                                <img  v-bind:src="user.avatar">
                                <div class="message-info">
                                    <p>{{user.name}}</p>
                                    <p class="mess">{{user.email}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-if="isMessage" class="col pc-9">
                    <div class="header">
                        <div class="header-info">
                            <img v-bind:src="userMessage.avatar" alt="">
                            <div class="header-text">
                                <h1 v-if="userMessage">{{userMessage.name}}</h1>
                                <p>Hoạt động trên Message</p>
                            </div>
                        </div>
                    </div>
                    <div class="board">
                        <ul class="board__list">
                            <li  class="board__item"  v-for=" (item, index) in listMessage" v-bind:key="index">
                                <div class="item" v-bind:class="{margin:item.id === userCurrent.uid}">
                                    <img v-if="item.id !== userCurrent.uid" v-bind:src="item.avatar" alt="">
                                    <p v-bind:class="{active:item.id === userCurrent.uid}">{{item.mess}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                        <form action="" class="value-message">
                            <input v-model="value" type="text" placeholder="Nhập tin nhắn">
                        <img v-on:click="sendMessage" src="data:image/png;base64,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" alt="">
                        </form>
                </div>
                <div v-if="!isMessage" class="col pc-9">
                    <div class="message-loading">
                        <h1> Xin chào {{userCurrent.displayName}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from '../../Firebase'
import md5 from 'md5'
export default {
    data() {
        return {
            userCurrent:JSON.parse(window.localStorage.getItem('user')),
            listUser:[],
            value:'',
            userMessage:null,
            listMessageGetDatabase:[],
            groupChat:'',
            listMessage:[],
            groupChatId:'',
            isMessage:false
        }
    },
    methods:{
        getListUser(){
            Firebase.database()
            .ref('users')
            .once('value')
            .then((snap) =>{
                this.listUser=[]
                console.log("Ok");
                snap.forEach((item) =>{
                
                    
                    this.listUser.push({...item.val()})
                })
            })
        },
        getUser(user){
            this.isMessage=true
            this.userMessage=user
            this.getRoom()
            this.isMessage=true
        },
        sendMessage(event){
            event.preventDefault();
            if(this.value.length >=1){
                Firebase.database()
                .ref('messages')
                .child(this.groupChat)
                .push()
                .set({
                    mess:this.value,
                    id:this.userCurrent.uid,
                    time:Firebase.database.ServerValue.TIMESTAMP,
                    avatar:this.userCurrent.photoURL
                })
                .then(() =>{
                    this.value=''
                    this.getRoom()
                    const box = document.querySelector('.board');
                    box.scrollTop=box.scrollHeight
                    
                })
                .catch((err) =>{
                    console.log(err);
                })
            }
            else{
                alert("Bạn vui lòng nhập tin nhắn")
            }
        },
        hashString(string){
            return string = md5(string)
        },
        getRoom(){
            if(this.hashString(this.userCurrent.uid ) <= this.hashString(this.userMessage.id)){
                this.groupChat=`${this.userCurrent.uid}+${this.userMessage.id}`
            }
            else{
                this.groupChat = `${this.userMessage.id}+${this.userCurrent.uid}`
            }
            console.log(this.hashString(this.userCurrent.uid ) <= this.hashString(this.userMessage.id));   
            const tpm=[]
            Firebase.database()
            .ref('messages')
            .child(this.groupChat)
            .on('child_added',snap =>{
                    tpm.push(snap.val())
                    this.listMessage=tpm
                })
        }
    },
    created() {
        this.getListUser()
        
    }
}
</script>

<style>
.header{
    padding: 5px 0;
}
.header-info{
    display: flex;
    align-items: center;
}
.header-text {
    margin-left: 16px;
    
}
.header-text h1{
    margin: 0;
    padding: 0;
    text-align: left;
    margin-bottom: 5px;
    font-size: 20px;
}
.header-text p{
    margin: 0;
    padding: 0;
    color: #cccccc;
}
.header-info{
    display: flex;
    padding: 10px 0;
}
.header-info img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.message-loading{
    width: 100%;
    height: calc(100vh - 63px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.message-loading h1{
    font-size: 40px;
}
.margin.item{
    margin-left: 719px;
    display: flex;
    flex-direction: row-reverse;
}
.item{
    display: flex;
}
.board__item .active{
    background-color: red;
}
.board__item{
    display: flex;
    
}
.board__item p{
    width: 400px;
    background: #ffffff;
    box-shadow: 1px 2px 3px #cccccc;
    border-radius: 5px;
    padding: 8px 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    margin-bottom: 2px;
    
}
.board__item img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px 10px;
    margin-top: 20px;
}
.board__list{
    list-style: none;
    margin: 0;
    padding: 0;
}
.value-message{
    display: flex;
    width: 100%;
    height: 40px;
}
.value-message input{
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 25px;
}
.value-message img{
    width: 30px;
    height: 30px;
    padding: 10px 20px;
    display: block;
    cursor: pointer;
}
.value-message img:hover{
    background: blue;
}
.header{
    width: 100%;
    border-bottom: 1px solid #cccccc;
}
.board{
    width: 100%;
    height: 530px;
    border: 1px solid #cccccc;
    overflow-y: scroll;
    overflow-x: hidden;
}
.message__item{
    display: flex;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
}
.message__item:hover{
    background: #cccccc;
}
.message__item p{
    margin: 0;
    padding: 0;
    margin: 4px 10px;
    font-size: 18px;
    font-weight: 800;
}
.message__item .mess{
    font-size: 16px;
    font-weight: 100;
}
.message__item img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
.message__list{
    margin: 0;
    padding: 0;
    height: calc(100vh - 60px);
}
.list-message{
    background-color: white;
    width: 100%;
    height: calc(100vh - 64px);
    box-shadow: 1px 2px 3px rgb(100, 96, 96);
    border-radius: 3px;
}
</style>