<template>
    <div>

        <div id="searchBar">
            <div>
                <label for="sortByPrice">Sort by Price:</label>
                <select id="sortByPrice" v-model="sortOrder">
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>
            
            <div>
                <label for="filterByGrade">Filter by grade:</label>
                <select id="filterByGrade" v-model="selectedGrade">
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                </select>
            </div>

            <form id="form" role="search">
                <div>
                    <input type="search" id="query" name="q"
                    placeholder="Search for course"
                    aria-label="Search through courses" v-model="titleWord">
                    <button class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-dark" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
            </form>

        </div>
            <div v-if="courses">
                <div class="row">
                    <div v-for="course in sortedCourses" :key="course.courseID" class="col-lg-3 col-md-4 col-sm-6 mb-md-2 d-flex justify-content-center align-items-center">
                        <div class="card d-flex justify-content-center">
                            <img class="card-img-top imageSize" :src="course.courseImg" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">{{course.title}}</h5>
                            <h6>{{course.grade}}</h6>
                            <p class="card-text">{{course.description}}</p>
                            <div class="d-flex justify-content-between">
                                <a href="#" class="btn btn-success">See More</a>
                                <a href="#" class="btn btn-success">R{{course.price}}</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <SpinnerComp/>
            </div>
        </div>
</template>

<script>
    import SpinnerComp from '@/components/SpinnerComp.vue'
    export default {
        components:{
            SpinnerComp
        },
        data(){
            return {
                titleWord:"",
                sortOrder:"lowToHigh",
                selectedGrade:"",
            }
        },
        computed:{
            courses(){
                return this.$store.state.courses
            },
            searchCourses(){
                return this.courses.filter((course)=>
                course.title.toLowerCase().includes(this.titleWord.toLowerCase())
                )
            },
            filterGrade() {
                if(this.selectedGrade){
                    return this.searchCourses.filter(
                        (course)=>course.grade ===this.selectedGrade
                    )
                }
                return this.searchCourses
            },
            sortedCourses(){
                if(this.sortOrder ==="lowToHigh"){
                    return this.filterGrade.sort((a,b)=>a.price-b.price)
                } 
                else{
                    return this.filterGrade.sort((a,b)=> b.price-a.price)
                }
            },
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

input {
    all: unset;
    font: 16px;
    border: 2px solid black;
    border-radius: 10px;
    color: var(--button-color-1);
    height: 100%;
    width: 100%;
    padding: 4px 8px;
}
#form .btn{
    display: flex;
    align-items: flex-start;
    background-color: transparent;
    height: min-content;
}
#form div{
    display: flex;
    align-items: center;
}
#query{
    width:15rem
}
#form{
    display: flex;
    width: min-content;
    padding: 1rem;
}
#searchBar{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

::placeholder{
    color: var(--button-color-1);
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