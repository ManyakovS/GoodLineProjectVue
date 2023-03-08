<template>
    <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" />

            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>  

            <div class="menu-items"  
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent>
                <li><a href="#">О комплексе</a></li>
                <li><a href="#">Район</a></li>
                <li><a href="#">Каталог квартир</a></li>
                <li><a href="#">Ипотека</a></li>
                <li><router-link to="/contacts">Контакты</router-link></li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.navbar {
    left: 0;
    top: 0;
    position: absolute;
    width: 100vw;
    z-index: 1;

    .menu-items {
        display: flex;
        flex-direction: column;
        padding-top: 18vh;
        background: #242B33;
        height: 108vh;
        transform: translate(-150%);
        
        margin-left: -40px;
        padding-left: 50px;
        transition: transform 0.5s ease-in-out;
        
        align-items: center;
      }
      
      a {
        text-decoration: none;
        color: #ffffff;
      }
      
      li {
        list-style: none;
        margin-bottom: 1.2rem;
        font-size: 1.9rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
  }
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;

     a:hover{
        color: #D4C17F;
     }
}
  .nav-container {
    display: block;
    position: relative;
    height: 60px;

    .checkbox {
        position: absolute;
        height: 32px;
        width: 32px;
        top: 4.5vh;
        right: 5vw;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
      }

      .hamburger-lines {
        position: absolute; 
        height: 26px;
        width: 32px;
        top: 4.5vh;
        right: 5vw;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }


      .hamburger-lines{ 
        .line {
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #D4C17F;
      }

      .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }

      .line2 {
        transition: transform 0.2s ease-in-out;
      }
      .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }

    }

    input[type="checkbox"]:checked ~ .menu-items {
        transform: translateX(0);
      }

      input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
        transform: rotate(45deg);
      }

      input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
        transform: scaleY(0);
      }

      input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
        transform: rotate(-45deg);
      }
  }

</style>