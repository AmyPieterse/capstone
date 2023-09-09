<template>
    <nav class="navbar navbar-expand-md" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
            </button>
            <div class="collapse navbar-collapse d-flex px-4" id="navbarNav">
                <div class="d-flex mr-5">
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/courses">Courses</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                    <div class="custom-hidden">
                        <form id="form" role="search">
                            <input type="search" id="query" name="q"
                                placeholder="Search for course"
                                aria-label="Search through courses">
                            <button class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-dark" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div class="w-100 d-md-flex justify-content-between custom-hidden">
                    <div class="main-heading">
                        <router-link class="nav-link d-md-flex" to="/">
                            <img src="https://i.postimg.cc/ZR0fsFSN/icon.png" alt="icon">
                            <h2>Mathverse</h2>
                        </router-link>
                    </div>
                    <div id="button-container" class="d-md-flex justify-content-center align-items-center">
                        <div>
                            <router-link class="nav-button m-2" to="/login">Log In</router-link>
                            <router-link class="nav-button m-2" to="/register">Sign Up</router-link>
                        </div>
                        <div class="mx-3">
                            <router-link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style>

form {
    background-color: var(--secondary-color-2);
    width: 300px;
    height: 44px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

nav{
    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
    height: 10vh;
    width: 100%;
}
.navbar-toggler{
    border-color: transparent; 
}
.navContainer{
    width: 100%;
    display: flex;
}
.navbar-nav .nav-link{
    color: var(--primary-color);
    font-size: 18px;
}
nav .nav-link:hover{
    color: var(--button-color-1)!important;
}
nav a.router-link-exact-active{
    text-decoration: underline;
    color: var(--button-color-1)!important;
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
input {
    all: unset;
    font: 16px;
    color: var(--button-color-1);
    height: 100%;
    width: 100%;
    padding: 6px 10px;
}
::placeholder{
    color: var(--button-color-1);
}
#form .btn{
    display: flex;
    align-items: flex-start;
    background-color: transparent;
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
@media (max-width: 768px) {
    .custom-hidden{
        display: none;
    }
}

</style>