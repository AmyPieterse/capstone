<template>
    <footer>
        <div id="footerContainer">
            <div id="footerMainRow">
                <div>
                    <h4>Follow us on social media</h4>
                    <div class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>

                    </div>
                </div>
                <div>
                    <h3>Links</h3>
                    <div class="d-flex flex-column">
                    </div>
                </div>
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