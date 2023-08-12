<template>
  <div class="container text-center pt-4">
    <img
      class="pt-4 wow about-photo-p2 animate__animated animate__fadeIn"
      alt="Foto de perfil do Marciran"
      src="../../public/images/marciran-prof2.png"
    />
  </div>
  <div class="container text-center pt-5">
    <h2 class="about-title-p2">Sobre mim</h2>
  </div>
  <div class="container-fluid text-center pt-5">
    <div class="row justify-content-center">
      <h4 class="col-8 align-self-center text-about pb-5 about-text-p2">
        Meu nome é <strong>Marciran Eleuterio Brisida</strong>, sou
        <strong>Psicólogo Clínico</strong>. Atendo crianças, adolescentes, adultos e idosos.
        <br />
        Atuei profissionalmente por 5 anos no cuidado da Saúde Mental, onde realizei atividades no
        Centro de Referência da Assistência Social (CRAS) e Centro de Atenção Psicossocial (CAPS).
        Realizei também Avaliações Neuropsicológicas e Atendimentos Clínicos.
        <br />
        O foco do meu atendimento está voltado para questões relacionadas ao sofrimento emocional no
        indivíduo. Meu conhecimento e experiência pode auxiliar você a compreender e lidar com suas
        emoções e pensamentos.
        <br />
        <br />
        <br />
        Formado em <strong>Psicologia</strong> pela Universidade José do Rosário Vellano - UNIFENAS.
        <br />
        Especialista em <strong>Terapia Cognitivo-Comportamental</strong> pela Pontifícia
        Universidade Católica do Paraná - PUCPR.
        <br />
        Psicólogo credenciado junto ao Conselho Federal de Psicologia - CFP para
        <strong>atendimento online</strong> segundo a Resolução CFP Nº: 11/2018.
      </h4>
    </div>
  </div>
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
