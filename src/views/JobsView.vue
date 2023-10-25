<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <div>
          <h1 class="text-center pt-5">Central de Empregos</h1>
        </div>
        <div class="image-container">
          <img class="contratado pe-5" src="../../public/images/contratado.jpg" alt="" />
          <img class="contratar ps-5" src="../../public/images/contratar.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 150px;
}

.contratado,
.contratar {
  width: 50%;
  height: 50%;
  transition: 0.3s; /* Adiciona uma transição suave para o efeito hover */
}

.contratado:hover,
.contratar:hover {
  opacity: 0.7; /* Reduz a opacidade quando o mouse está sobre a imagem */
  cursor: pointer; /* Muda o cursor para indicar que é um link clicável */
  transform: scale(1.1);
}
</style>
