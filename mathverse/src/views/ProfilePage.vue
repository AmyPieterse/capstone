<template>
    <div>
        <!-- <div class="profileHeading">
            <div class="user-info">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <img v-if="user && user.profileImg" :src="user.profileImg" alt="ProfileImg">
                    <h3 v-if="user" class="m-0">{{user.username}}</h3>
                </div>
                <div>
                    <button>Manage Profile</button>
                </div>
            </div>
        </div>
        <div class="profileContent justify-content-evenly w-100">
            <div class="d-flex justify-content-evenly pt-3">
                <div class="courseList w-25">
                    <h5>My Courses</h5>
                </div>
                <div class="courseContent w-75">
                    <ul>
                        <li v-for="order in completedOrders" :key="order.orderID">
                            <h6>{{order.courseTitle}}</h6>
                            <ul>
                                <li v-for="lesson in order.lessons" :key="lesson.lessonID">
                                    <h6>{{ lesson.title }}</h6>
                                    <p>{{ lesson.content }}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    // import { useCookies } from 'vue3-cookies'
    // import {useRouter} from 'vue-router'
    // const { cookies } = useCookies()
    // const router = useRouter()

    // export default {
    //     computed: {
    //         user(){
    //             return this.$store.state.user || cookies.get("ValidUser")
    //         },
    //         result(){
    //             return this.user?.result
    //         },
    //         userOrders(){
    //             return this.$store.state.userOrders
    //         },
    //     methods: {
    //         async fetchUserOrders(){

    //             const loggedIn = this.$store.state.user || cookies.get('ValidUser')

    //             if (!loggedIn) {
    //                 router.push({ name: 'login' })
    //                 return
    //             }
                
    //             const userID = this.$store.state.user ? this.$store.state.user.userID : cookies.get('ValidUser').result.userID
                    
    //             await this.$store.dispatch('fetchUser', userID)
    //             await this.$store.dispatch('fetchUserOrders', userID)
    //         },
    //         },
    //     },
    //     mounted(){
    //         this.$store.dispatch('fetchUserOrders')
    //     },
    // }
</script>

<style scoped>
.user-info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
}
.user-info button{
    padding: 8px 20px;
    border: transparent;
    border-radius: 10px;
    color: var(--secondary-color-2);
    background-color: var(--accent-color-1);
}
.profileContent{
    display: flex;
    margin-left: auto;
}
.courseList{
    border-right: 2px solid rgb(138, 133, 133);
}
</style>