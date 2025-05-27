<template>
  <div class="container my-5">
    <!-- Header -->
    <div class="row mb-5 pb-4">
      <div class="col text-center">
        <h1 class="display-4">Café e Agricultura Familiar</h1>
        <p class="lead">Conheça a importância da produção de café pelas famílias agricultoras</p>
        <!-- Imagens lado a lado -->
        <div class="row justify-content-center mb-4">
          <div class="col-6 col-md-4 mb-3">
            <img src="/images/familia.jpg" class="img-fluid rounded" alt="Família Agricultora" />
          </div>
          <div class="col-6 col-md-4 mb-3">
            <img src="/images/familia2.jpg" class="img-fluid rounded" alt="Família Agricultora" />
          </div>
        </div>
        <!-- Contexto inicial -->
        <!-- Contexto inicial -->
        <div class="row context-section mb-5">
          <div class="col-12 col-lg-8 mx-auto text-center">
            <h2 class="mb-3">O que é Agricultura Familiar?</h2>
            <p class="text-justify mb-4">
              Agricultura familiar é um modelo de produção em que a gestão, trabalho e decisões são
              conduzidos por um núcleo familiar. Geralmente em propriedades de pequeno a médio
              porte, a mão de obra provém da própria família, promovendo um vínculo direto entre o
              agricultor e a terra cultivada.
            </p>
            <h3 class="mt-4 mb-3">Por que é importante?</h3>
            <ul class="list-unstyled mb-0 text-start">
              <li class="mb-2">
                <strong>Segurança alimentar:</strong> responde por parcela significativa dos
                alimentos consumidos internamente, especialmente hortifrutis, grãos e leite.
              </li>
              <li class="mb-2">
                <strong>Desenvolvimento local:</strong> gera empregos no campo e fortalece cadeias
                de comercialização em feiras e cooperativas.
              </li>
              <li class="mb-2">
                <strong>Sustentabilidade:</strong> práticas como rotação de culturas, adubação
                orgânica e agroflorestas preservam recursos naturais.
              </li>
              <li>
                <strong>Preservação cultural:</strong> mantém saberes tradicionais e a ligação entre
                gerações no meio rural.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Seções informativas com links -->
    <div class="row g-4">
      <!-- Ciclo de produção -->
      <div class="col-md-6">
        <router-link to="/ciclo" class="card h-100 text-decoration-none text-white">
          <div class="card-body">
            <h5 class="card-title">1. Ciclo de Produção do Café</h5>
            <p class="card-text">
              Do plantio ao beneficiamento, entenda cada etapa do ciclo do café cultivado em
              pequenas propriedades.
            </p>
            <ul>
              <li>Semeadura</li>
              <li>Poda e manejo</li>
              <li>Colheita manual</li>
              <li>Peneiragem e secagem</li>
            </ul>
          </div>
        </router-link>
      </div>

      <!-- Sustentabilidade -->
      <div class="col-md-6">
        <router-link to="/sustentavel" class="card h-100 text-decoration-none text-white">
          <div class="card-body">
            <h5 class="card-title">2. Práticas Sustentáveis</h5>
            <p class="card-text">
              Saiba como a agricultura familiar adota técnicas que protegem o solo, a água e
              incentivam a biodiversidade.
            </p>
            <ul>
              <li>Adubação orgânica</li>
              <li>Rotação de culturas</li>
              <li>Uso racional de água</li>
              <li>Agrofloresta</li>
            </ul>
          </div>
        </router-link>
      </div>

      <!-- Impacto social -->
      <div class="col-md-6">
        <router-link to="/impacto" class="card h-100 text-decoration-none text-white">
          <div class="card-body">
            <h5 class="card-title">3. Impacto Social</h5>
            <p class="card-text">
              Veja como a renda do café fortalece famílias, gera empregos e mantém viva a cultura
              local.
            </p>
          </div>
        </router-link>
      </div>

      <!-- Histórias dos Produtores -->
      <div class="col-md-6">
        <router-link to="/historias" class="card h-100 text-decoration-none text-white">
          <div class="card-body">
            <h5 class="card-title">4. Histórias de Produtores</h5>
            <p class="card-text">
              Depoimentos reais de famílias que vivem da agricultura do café e preservam tradições.
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Links e recursos -->
    <div class="row mt-5">
      <div class="col">
        <h3>Recursos Educacionais</h3>
        <ul>
          <li v-for="(item, idx) in resources" :key="idx">
            <a :href="item.url" target="_blank" rel="noopener" class="text-reset">{{
              item.title
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeFamilyPage",
  data() {
    return {
      resources: [
        {
          title: "PRONAF - Agricultura Familiar",
          url: "https://www.gov.br/pt-br/servicos/acessar-o-programa-nacional-de-fortalecimento-da-agricultura-familiar-pronaf"
        },
        { title: "Embrapa Café", url: "https://www.embrapa.br/cafe" },
        { title: "COOPFAM: Cooperativa de Agricultores Familiares", url: "https://coopfam.com.br" }
      ]
    };
  }
};
</script>

<style scoped>
/* Espaçamento extra para a seção de contexto */
.context-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Ajustes simples de estilo */
h1 {
  color: #4b3621;
}
section h2 {
  color: #004d40;
}
.card {
  border-radius: 0.75rem;
}
</style>
