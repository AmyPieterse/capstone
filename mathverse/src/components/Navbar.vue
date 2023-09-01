<template>
    <nav class="navbar navbar-expand-md px-4" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <div>
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/">Courses</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div>
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
            <div>
                <img src="" alt="">
                <h2>Mathverse</h2>
            </div>
            <div>

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
    display: flex;
    justify-content: space-between;
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
    color: #42b983!important;
}
nav a.router-link-exact-active{
    text-decoration: underline;
    color: #42b983!important;
}

input {
    all: unset;
    font: 16px system-ui;
    color: var(--primary-color);
    height: 100%;
    width: 100%;
    padding: 6px 10px;
}
#form .btn{
    display: flex;
    align-items: flex-start;
    background-color: transparent;
}

</style>