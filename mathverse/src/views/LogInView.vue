<template>
    <div class="container d-flex w-100 mt-5">
        <div class="infoContainer w-50 h-100 d-flex justify-content-center align-items-center">
            <div>
                <h3 class="mb-4">Login</h3>
                <p>Good to see you again!</p>
            </div>
        </div>
        <div class="contentContainer d-flex w-50 h-100 justify-content-center align-items-center">
            <div class="formContainer w-50">
                <form class="d-flex flex-column justify-content-center align-items-center w-100" @submit.prevent="login">
                    <div class="inputContainer d-flex flex-column w-70">
                        <span>Username</span>
                        <input v-model="payload.emailAdd" type="text" placeholder="Email">
                    </div>
                    <div>
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
                        <button type="submit">Login</button>
                    </div>
                    <div class="inputContainer">
                        <p>Don't have an account<router-link :to="{name:'RegisterView'}">Sign up</router-link></p>
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
            payload: {
            emailAdd: "",
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
        background-image: url(https://i.postimg.cc/nhyC7K06/pexels-pixabay-255464.jpg);
    }
    .infoContainer{
        background: var(--tertiary-color-2);
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