<template>
  <div id="home">
    <div id="main-container" class="d-flex justify-content-center align-items-center gap-3">
      <div id="image-container" class="w-50 d-flex align-items-center">
        <img src="https://i.ibb.co/88kWf22/pexels-photo-8923566.webp" alt="mainImg">
      </div>
      <div class="w-50 info-container d-flex justify-content-center align-items-center">
          <div class="d-flex flex-column">
            <h2>LEARN ANYWHERE</h2>
            <br> 
            <p><span class="heading">Welcome to Mathverse!</span><br>We provide interactive courses for learners of all ages that are personalized to your specific goals and pace of learning. Unleash your full potential with professional material, progress tracking, and a smooth learning experience. Begin your journey with Mathverse today!</p>
            <div class="button-hover d-flex">
              <router-link to="/login" @click="goProfile" class="home-button mx-2">Learner</router-link>
              <router-link to="/login" @click="goAdmin" class="home-button mx-2">Administrator</router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
import router from '@/router'
const {cookies} = useCookies()

export default {
  name: 'HomePage',
  methods:{
    goProfile(){
      const {cookies}=useCookies()
        if (cookies.get("ValidUser")){
          router.push({name:'profile'})
        }
        else{
          router.push({name:'login'})
        }
    },
    goAdmin(){
      const {cookies}=useCookies()
        if (cookies.get("ValidUser")){
          router.push({name:'admin'})
        }
        else{
          router.push({name:'login'})
        }
    }
  }
}
</script>

<style scoped>
.heading{
  font-size: 20px;
  font-weight: bold;
}

  .home-button{
    text-decoration: none;
    color: var(--secondary-color-2);
    background-color: var(--accent-color-1);
    border-radius: 5px;
    padding: 8px 20px;
}
.home-button:hover{
  color: black;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}
p {
    margin-top: 0;
    margin-bottom: 2rem;
}

main {
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
}

@media screen and (max-width: 900px){
  .main-container{
    display: flex;
    flex-direction: column;
  }
  #image-container img{
    width: 440px;
    height:auto;
  }
}
@media screen and (max-width: 1000px){
  #main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 450px){
  #image-container{
  display:flex;
  justify-content:center;
  }
  #image-container img{
    width: 300px;
    height:auto;
  }
}
</style>
