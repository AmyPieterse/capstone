<template>
  <div id="home">
    <div id="main-container" class="d-flex">
      <div id="image-container" class="d-flex align-items-center">
        <img src="https://i.postimg.cc/4x32xYPB/5836-removebg-preview.png" alt="mainImg">
      </div>
      <div class="d-flex justify-content-center align-items-center">
          <div class="w-50 d-flex flex-column">
            <h2>LEARN ANYWHERE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illo quam autem consequuntur minima blanditiis culpa accusamus odit dolor sint, quo commodi, voluptatum adipisci, quis mollitia molestias obcaecati vero quisquam?</p>
            <div class="d-flex justify-content-center">
              <router-link to="/profile"><button class="home-button mx-2">Learner</button></router-link>
              <router-link to="/admin"><button class="home-button mx-2">Administrator</button></router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {

  }
}
</script>

<style scoped>

  .home-button{
    text-decoration: none;
    color: var(--secondary-color-2);
    background-color: var(--accent-color-1);
    border: transparent;
    border-radius: 5px;
    padding: 8px 20px;
}
@media screen and (max-width: 900px){
  #image-container img{
    width: 440px;
    height:350px
  }
}
@media screen and (max-width: 600px){
  #main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 450px){
  #image-container img{
    width: 300px;
    height:250px
  }
}
</style>
