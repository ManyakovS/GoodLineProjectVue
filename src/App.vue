<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
@import "@/styles/variables";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
    
  }
  *:focus {
    outline: 0 !important;
  }
  
  html, body {
    max-width: 100%;
    overflow-x: hidden;
}

body {
    margin: 0;
    font-family: 'Raleway', sans-serif;

    background: $background-color;
}

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
      background: rgba(255, 255, 255, 0.2) !important;
      color: rgb(190, 190, 190);
      transition: all 5000s ease-in-out 0s;
  }

  input{
    background: rgba(255, 255, 255, 0.2) !important;
    border: none;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: center;
    
    color: rgb(190, 190, 190);
    
}
button {
    background-color: rgb(212, 193, 127);
    cursor: pointer;
    border: none;
    padding: 0.5vh 3.15vw;
    font-weight: 700;
    font-size: .8rem;
    line-height: 1.6rem;
    text-align: center;
    color: #FFFFFF;
    transition: color 0.3s linear;
}
button:hover {
    color: #e5dbdb;
}
label {
    text-align: center;

    max-width: 15vw;
    padding: 0.25rem;
    font-weight: 400;
    font-size: 0.7125rem;
    line-height: 1rem;

    color: rgb(231, 231, 231);

    display: flex;
    align-items: center;
}
</style>