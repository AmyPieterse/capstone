<template>
    <div class="container d-flex w-100 mt-5">
        <div class="infoContainer w-50 h-100 d-flex justify-content-center align-items-center">
            <div>
                <h3 class="mb-4">Login</h3>
                <p>Good to see you again!</p>
                <div>
                    <img class="loginImg" src="https://i.postimg.cc/nLS4TmJQ/giphy-1.gif" alt="gif">
                </div>
            </div>
        </div>
        <div class="contentContainer d-flex w-50 h-100 justify-content-center align-items-center">
            <div class="formContainer w-50">
                <form class="d-flex flex-column justify-content-center align-items-center w-100" @submit.prevent="login">
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Username</span>
                        <input v-model="payload.emailAdd" type="text" placeholder="Email">
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <label for="userRole">User Role:</label>
                        <select id="userRole" v-model="payload.role">
                            <option value="Admin">Admin</option>
                            <option value="Learner">Learner</option>
                        </select>
                    </div>
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Password</span>
                        <input v-model="payload.userPass" type="password" placeholder="Password">
                    </div>
                    <div class="inputContainer w-70">
                        <button class="login" type="submit">Login</button>
                    </div>
                    <div class="inputContainer">
                        <p>Don't have an account <router-link :to="{name:'RegisterView'}">Sign up</router-link></p>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            payload:{
            emailAdd: "",
            role: "",
            userPass: ""
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.payload);
        },
    },
    beforeCreate() {
        this.$store.dispatch("fetchUsers");
    }
}
</script>



<style scoped>
    
    .container{
        height: 80vh;
        width: 100%;
        align-self: center;
        background-image: url(https://i.postimg.cc/MZNSnbPM/Sea-of-Clouds-9-1s-1536px.png);
    }
    .infoContainer{
        background-color: rgb(133, 122, 122);
    }
    .infoContainer p{
        font-size: 20px;
    }
    .inputContainer{
        margin-bottom: 20px;
    }
    .inputContainer span{
        color: black;
        font-weight:300;
        font-size: 16px;
        letter-spacing: 1px;
    }
    .inputContainer input, select{
        border: 2px solid black;
        height: 2rem;
        width:12rem;
        font: 16px;
        padding: 6px 6px;
    }
    form{
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        height: min-content;
        padding: 20px;
    }
    .login{
        padding: 8px 20px;
        width: 8rem;
        border: transparent;
        border-radius: 10px;
        color: var(--secondary-color-2);
        background-color: var(--accent-color-1);
    }
    .loginImg{
        width: 400px;
    }
</style>