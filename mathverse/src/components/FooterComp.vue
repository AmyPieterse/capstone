<template>
    <footer>
        <div id="footerContainer">
            <div id="footerMainRow">
                <p>

                </p>
            </div>
            <div id="footerLine">
                <div>
                    <p class="text-center">&copy; 2023 My Website. All rights reserved.</p>
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
        border-top: 2px solid var(--secondary-color-2);
        margin-top:50px;
        padding-top:20px;
    }
</style>