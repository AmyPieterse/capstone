<template>
<div class="container d-flex align-items-center justify-content-center">
    <div class="main-container">
        <div v-if="course" class="d-flex justify-content-center">
            <img class="imageSize" :src="course.courseImg" alt="Course Image">
            <div>
                <h5>{{ course.title }}</h5>
                <div class="d-flex justify-content-between">
                    <h6 class="subheading">Grade {{ course.grade }}</h6>
                    <h6 class="subheading">R{{ course.price }}</h6>
                </div>
                <p>{{ course.description }}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-success" @click="addToCart(course)">Add to cart</button>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComp />
        </div>
    </div>
</div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import axios from 'axios';

export default {
  methods: {
    mounted(){
            this.$store.dispatch('fetchCourse',courseID)
        }
        
  },
  components: {
    SpinnerComp
  }
};
</script>


<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
}
.main-container{
    border: 2px solid rgb(221, 221, 221);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    width:30rem;
    height:35rem;
}
@media screen and (max-width: 650px){
    .main-container{
        width:25rem;
        height:30rem;
    }
}
@media screen and (max-width: 450px){
    .main-container{
        width:18rem;
        height:20rem;
    }
}
</style>