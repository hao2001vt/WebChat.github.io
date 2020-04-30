<template>
    <div class="main-profile">
        <div class="grid wide">
            <div class="row">
                <div class="col pc-6">
                    <div class="img">
                        <img v-bind:src="userCurrent.photoURL" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col pc-6">
                        <div class="form-info-user">
                            <div class="form-name">
                                <label for="nickname">Nickname</label>
                                <input id="nickname" v-model="name" type="text">
                            </div>
                            <div class="form-about">
                                <label for="about">About Me</label>
                                <input id="about" type="text" placeholder="Tell About Yourself">
                            </div>
                            <div class="button-update">
                                <button>UPDATE</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:JSON.parse(window.localStorage.getItem('user')).displayName,
            userCurrent:JSON.parse(window.localStorage.getItem('user'))
        }
    },
}
</script>

<style>
.button-update{
    text-align: center;
}
.button-update button{
    background-color: #f5a623;
    border: none;
    color: #203152;
    padding: 10px;
    width: 200px;
    text-align: center;
    font-size: 20px;
    align-self: center;
    border-radius: 8px;
    font-weight: 700;
    margin-top: 100px;
    cursor: pointer

}
.form-info-user {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
}
.form-info-user label{
    font-weight: 700;
    color: #203152;
    font-style: italic;
    font-size: 20px;
    margin: 10px 0;
    display: block;
    cursor: pointer;
    
}
.form-info-user input{
    border: none;
    background-color: #203152;
    border-radius: 3px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    width: 100%;
    font-size: 18px;
}
.img{
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid deeppink;
}
</style>