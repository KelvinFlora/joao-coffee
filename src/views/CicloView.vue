<template>
  <div class="container my-5">
    <h1 class="display-4 mb-4">Ciclo de Produção do Café</h1>
    <!-- Introdução -->
    <p class="lead mb-5">
      O ciclo de produção do café envolve várias etapas fundamentais, desde o preparo do solo até o
      beneficiamento dos grãos. Abaixo, você acompanha cada fase desse processo em uma perspectiva
      de agricultura familiar.
    </p>

    <!-- Etapa 1: Preparo do Solo -->
    <section class="mb-5">
      <h2 class="h4 mb-3">1. Preparo do Solo</h2>
      <p>
        Antes do plantio, a família agricultora faz a análise de solo para identificar nutrientes
        necessários. Em seguida, realiza aração e gradagem para arejar a terra, e aplica adubos
        orgânicos (composto ou esterco) para enriquecer o solo.
      </p>
    </section>

    <!-- Etapa 2: Semeadura e Plantio -->
    <section class="mb-5">
      <h2 class="h4 mb-3">2. Semeadura e Plantio</h2>
      <p>
        As sementes ou mudas são selecionadas de variedades adaptadas à região. O plantio pode ser
        feito em linhas, respeitando espaçamentos que facilitam o manejo e a colheita. Em alguns
        casos, utiliza-se viveiro para produzir mudas antes do transplante ao campo.
      </p>
    </section>

    <!-- Etapa 3: Manejo e Controle -->
    <section class="mb-5">
      <h2 class="h4 mb-3">3. Manejo e Controle</h2>
      <p>Durante o crescimento, realiza-se:</p>
      <ul>
        <li>Podas de formação e manutenção para garantir ventilação e exposição da planta;</li>
        <li>Controle de pragas e doenças com métodos biológicos sempre que possível;</li>
        <li>Irrigação controlada em períodos secos;</li>
        <li>Adubações complementares de cobertura.</li>
      </ul>
    </section>

    <!-- Etapa 4: Colheita -->
    <section class="mb-5">
      <h2 class="h4 mb-3">4. Colheita Manual</h2>
      <p>
        A colheita é feita manualmente para garantir a seleção apenas dos frutos maduros. Essa
        prática, apesar de mais trabalhosa, assegura maior qualidade do café.
      </p>
    </section>

    <!-- Etapa 5: Beneficiamento -->
    <section class="mb-5">
      <h2 class="h4 mb-3">5. Beneficiamento</h2>
      <p>Após a colheita, os grãos passam por:</p>
      <ul>
        <li>Despolpamento para remover a casca externa;</li>
        <li>Lavagem para eliminar resíduos;</li>
        <li>Secagem ao sol ou em estufas até atingir umidade ideal (~12%);</li>
        <li>Classificação por tamanho e densidade;</li>
      </ul>
    </section>

    <!-- Conclusão -->
    <section>
      <h2 class="h4 mb-3">Considerações Finais</h2>
      <p>
        O ciclo completo combina saberes tradicionais e práticas sustentáveis, garantindo que as
        famílias agricultoras obtenham um café de qualidade e preservem o meio ambiente.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "CicloProducaoView"
};
</script>

<style scoped>
h1 {
  color: #4b3621;
}
section h2 {
  color: #004d40;
}
</style>
