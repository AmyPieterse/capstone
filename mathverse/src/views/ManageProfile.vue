<template>
    <div>
        <h4>Manage Profile</h4>
        <div>
            <div class="d-flex">
                <h5>Your Profile</h5>
                <button>Delete Profile</button>
            </div>
            <div>
                <div class="inputContainer d-flex flex-column w-70">
                    <span>Username</span>
                    <input v-model="userData.emailAdd" type="text" placeholder="Email">
                </div>
                <div class="inputContainer d-flex flex-column w-70">
                    <span>Change Password</span>
                    <input v-model="userData.userPass" type="password" placeholder="Password">
                </div>
                <div class="inputContainer w-70">
                    <button type="submit">Update Profile</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                userData:{
                    firstname:"",
                    lastname:"",
                    username:"",
                    userDOB:"", 
                    emailAdd:"",
                    userPass:"",
                    profileURL:""
                },
            } 
        },
    }
</script>

<style scoped>

</style>