<template>
    <div class="d-flex flex-row">
        <div v-for="course in courses" :key="course.courseID" class="col-lg-3 col-md-4 col-sm-6 mb-md-2 d-flex justify-content-center align-items-center">
            <div class="card d-flex justify-content-center">
                <img class="card-img-top imageSize" :src="course.courseImg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{course.title}}</h5>
                <p class="card-text">{{course.description}}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-success">See More</a>
                    <a href="#" class="btn btn-success">Buy</a>
                </div>
                </div>
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
            this.$store.dispatch('fetchCourses')
        }
    }
</script>

<style scoped>

.card {
    width: 18.5rem;
    border: 2px solid rgb(221, 221, 221);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 1.25rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-text {
    margin-bottom: 1rem;
}

</style>