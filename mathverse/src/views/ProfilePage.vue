<template>
    <div>
        <div class="profileHeading">
            <div class="user-info">
                <div class="d-flex justify-content-center align-items-center text-center">
                    <img src="" alt="ProfileImg">
                    <h5>Username</h5>
                </div>
                <div>
                    <button>Manage Profile</button>
                </div>
            </div>
        </div>
        <div class="profileContent  justify-content-between w-100">
            <div class="d-flex justify-content-evenly">
                <div class="courseList">
                    <h5>My Courses</h5>
                </div>
                <div class="courseContent">
                    <ul>
                        <li>
                            <h6>Course 1</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <h6>Course 2</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <h6>Course 3</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.user-info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
}
.profileContent{
    display: flex;
}
</style>