<template>

</template>

<script>
    export default {
        
    }
</script>

<style>

nav{
    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
}

.navbar-toggler{
    border-color: transparent; 
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
@media (max-width: 768px) {
    .custom-hidden{
        display: none;
    }
}

</style>