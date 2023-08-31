<template>
  <div>
    <Navbar/>
    <main>
      <router-view/>
    </main>
    <FooterComp/>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import FooterComp from '@/components/FooterComp.vue'
  export default{
      components:{
        Navbar,
        FooterComp
      }
  }
</script>
<style src="@/assets/css/style.css">

</style>
