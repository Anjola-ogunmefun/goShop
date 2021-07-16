<template>
  <div id="header" class="container-fluid ">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="display-6">Shop at <span>AMAZING</span> discounted rates!</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  background: url("../../utils/image2.jpg") center bottom no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60vh;
  align-items: center;
  margin-bottom: 3.125rem;
  box-shadow: inset 0 0 0 2000px rgba(15, 1, 9, 0.2);
}

#header h1 {
  margin-top: 30rem;
  margin-bottom: auto;
  font-weight: 400;
  color: white;
  font-family: monospace;
  text-shadow: 3px 3px 4px #000000;
}
span{
  color: yellow;
}

@media only screen and (max-width: 600px) {
  #header{
    height: 30vh;
  }
  #header h1{
    margin-top: 10rem;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
   #header{
    height: 50vh;
  }
  #header h1{
    margin-top: 20rem;
  }

}
</style>
