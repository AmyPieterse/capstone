<template>
    
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