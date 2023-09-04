<template>
    <div>
        <div v-for="course in courses" :key="course.courseID" class="col-lg-3 col-md-6 col-sm-12 mb-md-2 d-flex justify-content-center align-items-center" style="width: 18rem; height: 20rem">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-success">See More</a>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        computed:{
            courses(){
                return this.$store.state.courses
            }
        },
        mounted(){
            
        }
    }
</script>

<style scoped>

</style>