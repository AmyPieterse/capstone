<template>
    <div>
        <div class="profileHeading">
            <div class="user-info">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <img src="" alt="ProfileImg">
                    <h5 class="m-0">Username</h5>
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
                        <li>
                            <h6>Course 1</h6>
                            <ul>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, placeat!</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, repellendus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nisi.</li>
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