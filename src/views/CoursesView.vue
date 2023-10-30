<template>
  <div class="container">
    <h1 class="curso-title text-center p-5">Cursos</h1>

    <div class="video-curso text-center">
      <iframe
        class="video-curso"
        width="800"
        height="450"
        src="https://www.youtube.com/embed/rJub1bfCNAM?si=fX2K_NGSJk1zFmpt"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="text-center pb-5 pt-4">
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

  <div class="calendar-container text-center p-2 pt-2">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23795548&ctz=America%2FSao_Paulo&title=Jo%C3%A3o%20Coffee%20Educacional&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=am9hb2NvZmZlZWVkdWNhY2lvbmFsQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
      style="border: solid 1px #777"
      width="600"
      height="400"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<style>
.video-curso {
  border-radius: 0.5rem;
}
@media (max-width: 768px) {
  .video-curso {
    width: 100%;
  }
  .calendar-container {
    width: 300px;
    height: 200px;
    margin-bottom: 200px;
  }
}
</style>
