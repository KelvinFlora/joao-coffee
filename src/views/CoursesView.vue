<template>
  <div class="container">
    <h1 class="curso-title text-center p-5">Cursos</h1>

    <div class="video-curso text-center">
      <iframe
        class="video-curso"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rJub1bfCNAM?si=fX2K_NGSJk1zFmpt"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="text-center pb-5 pt-2">
    <a href="https://www.google.com" target="_blank">
      <button type="button" class="btn btn-primary">Mais detalhes</button></a
    >
  </div>
  <div class="container pt-5 pb-5 text-center">
    <h4>Conteúdo encontrado nesse curso:</h4>
    <p>- Torras</p>
    <p>- Barismo</p>
    <p>- Provas</p>
    <p>- Amostragem</p>
    <p>- Cafés Especiais</p>
  </div>

  <div class="calendar-container text-center p-5">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=jfob4hdnld1cj0m0i72k35aea0%40group.calendar.google.com&ctz=America%2FSao_Paulo"
      style="border: 0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<style>
.video-curso {
  border-radius: 0.5rem;
}
</style>
