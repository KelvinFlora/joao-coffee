<template>
  <h1></h1>
</template>

<style about-page>
.about-photo-p2 {
  width: 30%;
  animation-duration: 5s;
}
.about-title-p2 {
  animation: fadeIn;
  animation-duration: 5s;
}
.about-text-p2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: large;
  animation: fadeInRight;
  animation-duration: 3s;
}
@media screen and (max-width: 500px) {
  .about-photo-p2 {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 50%;
    animation: fadeInDown;
    animation-duration: 3s;
  }
  .about-title-p2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 35px;
    animation: fadeIn;
    animation-duration: 5s;
  }
  .about-text-p2 {
    width: 100%;
    animation: fadeInUp;
    animation-duration: 3s;
  }
}
</style>
