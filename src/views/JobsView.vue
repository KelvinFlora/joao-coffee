<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <div>
          <h1 class="text-center pt-5">Central de Empregos</h1>
        </div>
        <div class="image-container">
          <img class="contratado" src="../../public/images/contratado.jpg" alt="" />
          <img class="contratar" src="../../public/images/contratar.jpg" alt="" />
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
  padding: 20px;
}

.contratado:hover,
.contratar:hover {
  opacity: 0.7; /* Reduz a opacidade quando o mouse está sobre a imagem */
  cursor: pointer; /* Muda o cursor para indicar que é um link clicável */
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .image-container {
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Adicione esta linha para alinhar horizontalmente no centro */
  }

  .contratado,
  .contratar {
    width: 100%;
    height: auto; /* Remova a altura fixa para evitar distorção */
    padding: 15px;
  }
  .image-container {
    padding-top: 10px;
  }
}
</style>
