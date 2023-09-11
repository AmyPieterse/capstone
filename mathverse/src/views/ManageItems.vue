<template>
    <div class="p-4">
        <h2>Administration Page</h2>
    <div class="p-4">
    <div>

        <button type="button" class="btn custom-button" data-bs-toggle="modal" data-bs-target="#addModal">
        Add Course
        </button>


<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New Course</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">
            <form @submit.prevent="addCourse" id="newPost">
                <div class="d-flex">
                    <label for="name">Title:</label>
                    <input v-model="courseData.title" class="custom-background" type="text" id="name" name="name"/>
                </div>
                <div class="d-flex">
                    <label for="description">Description:</label>
                    <textarea v-model="courseData.description" class="custom-background" id="description" name="description" rows="5"></textarea>
                </div>
                <div class="d-flex">
                    <label for="price">Price:</label>
                    <input v-model="courseData.price" class="custom-background" type="text" id="price" name="price" />
                </div>
                <div class="d-flex">
                    <label for="date">Date:</label>
                    <input v-model="courseData.creationDate" class="custom-background" placeholder="" type="text" id="date" name="date"/>
                </div>
                <div class="d-flex">
                    <label for="image">Image(url):</label>
                    <input v-model="courseData.courseImg" class="custom-background" type="url" id="image" name="uploadImage" />
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addCourse">Add new Course</button>
        </div>
    </div>
</div>
</div>

            </div>
            <div class="m-3">
                <table  v-if="courses">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Creation Date</th>
                            <th>Course Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course in courses" :key="course.courseID">
                            <td>{{course.courseID}}</td>
                            <td>{{course.title}}</td>
                            <td>{{course.description}}</td>
                            <td>R{{course.price}}</td>
                            <td>{{course.creationDate}}</td>
                            <td>{{course.courseImg}}</td>
                            <td>
                                <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn custom-button" data-bs-toggle="modal" :data-bs-target="'#editModal'+ course.courseID">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                    </button>
                                    
                                    <!-- Modal -->
                                    <div class="modal fade" :id="'editModal'+ course.courseID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Course</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                            <div class="modal-body">
                                                <form id="newPost">
                                                    <div class="d-flex">
                                                        <label for="name">Title:</label>
                                                        <input v-model="courseData.title" class="custom-background" :placeholder="course.title" type="text" id="name" name="name"/>
                                                    </div>
                                                    <div class="d-flex">
                                                        <label for="description">Description:</label>
                                                        <textarea v-model="courseData.description" class="custom-background" :placeholder="course.description" id="description" name="description" rows="5"></textarea>
                                                    </div>
                                                    <div class="d-flex">
                                                        <label for="price">Price:</label>
                                                        <input v-model="courseData.price" class="custom-background" :placeholder="course.price" type="text" id="price" name="price" />
                                                    </div>
                                                    <div class="d-flex">
                                                        <label for="date">Date:</label>
                                                        <input v-model="courseData.creationDate" class="custom-background" :placeholder="course.creationDate" type="text" id="date" name="date"/>
                                                    </div>
                                                    <div class="d-flex">
                                                        <label for="image">Image(url):</label>
                                                        <input v-model="courseData.courseImg" class="custom-background" :placeholder="course.courseImg" type="url" id="image" name="uploadImage" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="updateCourse(course.courseID)">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                            </td>
                            <td>
                                <button class="custom-button" @click="deleteCourse(course.courseID)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash p-0" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                courseData:{
                        title:"",
                        description:"",
                        price:"",
                        creationDate:"",
                        courseImg:""
                },
                selectedCourseID:null,
            } 
        },
        methods:{
        async addCourse(){
            try {
                await this.$store.dispatch('addCourse', this.courseData)
                this.courseData = {
                    title:"",
                    description:"",
                    price:"",
                    creationDate:"",
                    courseImg: ""
                    };
            }
            catch(error){
                    console.error(error)
            }
        },
        async fetchCourses(){
            try{
            const {data} = await this.$axios.get(`${apiLink}/items`)
                this.courses = data.results
            } 
            catch(error){
                console.error(error)
            }
        },
        updateCourse(courseID){
    
            const courseToUpdate = this.courses.find((course)=>course.courseID === courseID)
    
            if (courseToUpdate) {
                const updatedCourseData = {
                    title: this.courseData.title||courseToUpdate.title,
                    description: this.courseData.description||courseToUpdate.description,
                    price: this.courseData.price||courseToUpdate.price,
                    creationDate: this.courseData.creationDate||courseToUpdate.creationDate,
                    courseImg: this.courseData.courseImg||courseToUpdate.courseImg,
            }
        
            this.$store.dispatch('updateCourse',{courseID,courseData: updatedCourseData})
                this.courseData = {
                    title: "",
                    description: "",
                    price: "",
                    creationDate: "",
                    courseImg: "",
            }
        }
        else{
        console.error("Course not found")
        }
},

deleteCourse(courseID){
            this.$store.dispatch('deleteCourse', courseID)
        }
    },
    created(){
        this.fetchCourses()
    },
    components:{
    },
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
.modal-body{
    height: 25rem;
}
form{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
}

.d-flex{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.d-flex label{
    width: 50%;
}

.d-flex input{
    height: 1.7rem;
    width: 50%;
}
.d-flex textarea{
    width: 55%;
}
.custom-background{
    border: 1px solid black;
}

.button-container{
    display: flex;
    justify-content: flex-end;
}
.custom-button{
    background-color: var(--accent-color-1);
    color: white;
}
.admin-button{
    text-decoration: none;
    color: var(--secondary-color-2);
    background-color: var(--accent-color-1);
    border: transparent;
    border-radius: 5px;
    padding: 8px 20px;
}
</style>