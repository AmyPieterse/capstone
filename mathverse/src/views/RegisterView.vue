<template>
    <div class="container d-flex w-100 mt-2">
        <div class="infoContainer w-50 h-100 d-flex justify-content-center align-items-center">
            <div>
                <h3 class="mb-4">Register</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, quas!</p>
            </div>
        </div>
        <div class="contentContainer d-flex w-50 h-100 justify-content-center align-items-center">
            <div class="formContainer w-50">
                <form class="d-flex flex-column justify-content-center align-items-center w-100" @submit.prevent="register">
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Firstname</span>
                        <input v-model="payload.firstname" type="text" placeholder="Firstname">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Lastname</span>
                        <input v-model="payload.lastname" type="text" placeholder="Lastname">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Username</span>
                        <input v-model="payload.username" type="text" placeholder="username">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Email</span>
                        <input v-model="payload.emailAdd" type="text" placeholder="Email">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Password</span>
                        <input v-model="payload.userPass" type="password" placeholder="Password">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Date of birth</span>
                        <input v-model="payload.userDOB" type="text" placeholder="Date of birth">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Profile Picture URL</span>
                        <input v-model="payload.profileURL" type="text" placeholder="URL">
                    </div>
                    <div class="inputContainer w-70">
                        <button type="submit">Login</button>
                    </div>
                    <div class="inputContainer">
                        <p>Already have an account <a href="./LogInView.vue">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                payload:{
                    firstname:"",
                    lastname:"",
                    username:"",
                    userDOB:"",
                    emailAdd:"",
                    userPass:"",
                    profileURL:""
                }
            }
        },
        methods: {
            register(){
                this.$store.dispatch('register',this.payload)
            }
        }
        // computed{

        // },
    }
</script>

<style scoped>
.container{
    height: 90vh;
    border: 2px solid red; 
    width: 100%;
    align-self: center;
    background-image: url(https://i.postimg.cc/nhyC7K06/pexels-pixabay-255464.jpg);
}
.infoContainer{
    background: var(--background-color-1);
}
.infoContainer p{
    font-size: 20px;
}
.inputContainer{
    margin-bottom: 10px;
}
.inputContainer span{
    color: black;
    font-weight:300;
    font-size: 16px;
    letter-spacing: 1px;
}
.inputContainer input{
    border: 2px solid black;
    height: 1.5rem;
    width:12rem;
}
form{
    background-color: white;
    height: min-content;
    padding: 20px;
}
</style>