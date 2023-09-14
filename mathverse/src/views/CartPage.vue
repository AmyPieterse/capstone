<template>
    <div class="d-flex justify-content-center">
        <div class="" id="cartCourses">
            <div class="">
                <h4 class="">
                    <span><h3>Your Cart</h3></span>
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Grade</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course,index) in cartItems" :key="course.courseID">
                            <td>{{course.title}}</td>
                            <td>{{course.description}}</td>
                            <td>{{course.grade}}</td>
                            <td>{{course.price}}</td>
                            <td>
                                <button class="custom-button" @click="deleteCart(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash p-0" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#checkoutModal">
                    Proceed To Checkout
                </button>
                <Checkout/>
            </div>
        </div>
    </div>
</template>

<script>
    import Checkout from '@/components/Checkout.vue'
    export default {
        components:{
            Checkout
        },
        computed:{
            cartItems() {
                return this.$store.state.cart
            },
            fetchUserOrders() {
                if (this.$store.state.userOrders){
                    return this.$store.state.userOrders.filter((order) => order.status === 'pending')
                } 
                else{
                    return []
                }
            },
        },
        methods:{
            deleteCart(index){
                this.$store.commit('deleteCart',index)
            },
        },
};
</script>

<style scoped>
table{
    border: 3px solid #355C7D;
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
thead tr{
    background-color: #355C7D;
    color: #ffffff;
    text-align: left;
}
tbody tr{
    border-bottom: 1px solid #dddddd;
}
th,td{
    padding: 12px 15px;
}
tr,td{
    border: 3px solid #355C7D;
}
</style>