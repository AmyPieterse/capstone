<template>
    <footer>
        <div id="footerContainer">
            <div id="footerMainRow">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ratione voluptatibus iste commodi rerum ipsa perferendis magni sed, nam dignissimos?
                </p>
            </div>
            <div id="footerLine">
                <div>
                    <p class="text-center">&copy;{{ new Date().getFullYear()}} My Website. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    #footerContainer{
        height: 30vh;
        background-color: var(--tertiary-color-2);
    }
    #footerLine{
        padding-top: 20px;
        margin: 50px;
        border-top: 2px solid var(--secondary-color-2);
    }
</style>