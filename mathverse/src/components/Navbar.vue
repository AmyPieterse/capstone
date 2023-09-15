<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
        <div class="logo-heading">
            <router-link class="nav-link main-heading d-flex" to="/">
                <img src="https://i.postimg.cc/ZR0fsFSN/icon.png" class="customImg" alt="icon">
                <h2>Mathverse</h2>
            </router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
                <li class="nav-item home active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/courses">Courses</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="isLearner" class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li class="nav-item" v-if="isAdmin">
                    <router-link class="nav-link" to="/admin">Admin</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>
            <div class="d-flex flex-md-row flex-column gap-2 justify-content-center align-items-center">
                <div class="d-flex align-items-center gap-2">
                    <router-link to="/manageProfile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style="color: black" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </router-link>
                    <router-link to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style="color: black" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </router-link>
                </div>
                <div class="d-flex my-2 my-lg-0">
                    <router-link class="nav-button m-2" to="/login" v-if="!result">Log In</router-link>
                    <button class="nav-button m-2" @click="logout" v-if="result">Log out</button>
                    <router-link class="nav-button m-2" to="/register">Sign Up</router-link>
                </div>
            </div>
        </div>
        
    </nav>
</template>

<script>
import { useCookies } from 'vue3-cookies';
import router from '@/router';
const {cookies} = useCookies()

    export default {
        computed: {
            user(){
                return this.$store.state.user || cookies.get("ValidUser")
            },
            result(){
                return this.user?.result
            },
            isAdmin(){
                return this.result?.role.toLowerCase() ==="admin"
            },
            isLearner(){
                return this.result?.role.toLowerCase()==="learner"
            }
        },
        methods: {
            logout(){
                router.push({name: 'login'})
                cookies.remove("ValidUser")
            }
        },
    }
</script>

<style>

nav{
    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
}

.navbar-toggler{
    border: none!important; 
}

.navbar-nav .nav-link{
    color: var(--primary-color);
    font-size: 18px;
}

nav .nav-item .nav-link:hover{
    color: var(--accent-color-1)!important;
}

nav a.router-link-exact-active{
    text-decoration: underline;
    color: var(--button-color-1);
}
nav a.router-link-exact-active{
    color: var(--primary-color);
}
.logo-heading{
    margin-right: 5rem;
}

.main-heading{
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-heading img{
    width:40px;
    height: 40px;
}
.main-heading h2{
    margin-bottom: 0;
}

.button-container{
    display: flex;
    justify-content: space-between;
}
.nav-button{
    text-decoration: none;
    color: var(--secondary-color-2);
    background-color: var(--accent-color-1);
    border-radius: 5px;
    padding: 8px 20px;
}

@media screen and (max-width: 450px){
    
    .navbar-toggler{
        width: min-content;
        height: min-content;
    }
    .navbar-toggler-icon{
        width: 1.3rem!important;
        height:1.3rem!important;
    }
    .main-heading h2{
        font-size: 18px;
    }
}
</style>