<template>
  <!-- Footer -->
  <footer class="bg-primary text-center text-white mt-auto">
    <!-- Grid container -->
    <!-- Section: Social media -->
    <section class="mb-0">
      <div class="home-footer footer container-fluid">
        <div class="row hidden-xs">
          <div class="col-md-3"></div>
          <div class="col-md-6 logo-container">
            <div class="footer-logo-message pb-3">Realização</div>
            <img class="logo-footer pe-1" src="../../public/images/logo-educacional.png" />
            <img class="logo-footer ps-1" src="../../public/images/logo-jc.png" />
          </div>
          <div class="col-md-3 text-end pe-4">
            <div class="row">
              <div class="col-md-12 pt-4">João Coffee</div>
            </div>
            <div class="row">
              <div class="col-md-12"><i class="fa fa-phone"></i> (35)99889-5249</div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <i class="fa fa-envelope"></i>
                <a class="text-white" href="mailto:joao.coffee@outlook.com"
                  >joao.coffee@outlook.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Facebook -->
      <div class="text-end">
        <a
          class="btn text-light text-end btn-floating p-1"
          href="https://www.facebook.com/profile.php?id=100048787341906"
          target="_blank"
          alt="Ícone do Facebook"
          role="button"
        >
          <i class="bi bi-facebook facebook-button"></i
        ></a>

        <!-- Instagram -->
        <a
          class="btn text-light text-end btn-floating p-1"
          href="https://www.instagram.com/joao.coffee/"
          target="_blank"
          alt="Ícone do Instagram"
          role="button"
        >
          <i class="bi bi-instagram instagram-button"></i>
        </a>

        <!-- WhatsApp -->
        <a
          class="btn text-light text-end btn-floating p-1"
          href="https://wa.me/+5535998895249"
          target="_blank"
          alt="Ícone do Whatsapp"
          role="button"
          ><i class="bi bi-whatsapp whatsapp-button"></i
        ></a>

        <!-- Linkedin -->
        <a
          class="btn text-light text-end btn-floating p-1"
          href="https://wa.me/+5535998895249"
          target="_blank"
          alt="Ícone do Whatsapp"
          role="button"
          ><i class="bi bi-linkedin whatsapp-button"></i
        ></a>

        <!-- Email (precisa colocar link) -->
        <a
          class="btn text-light text-end btn-floating p-1 pe-4"
          href="mailto:joao.coffee@outlook.com"
          target="_blank"
          alt="Ícone do email"
          role="button"
          ><i class="bi bi-envelope-fill email-button"></i
        ></a>
      </div>
    </section>
    <!-- Section: Social media -->

    <!-- Copyright -->
    <div class="text-center p-3 credits" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 João Coffee - Todos os direitos reservados | Desenvolvido por
      <a class="dev-link" href="https://www.linkedin.com/in/kelvinflora/" target="_blank">
        Kelvin Flora
      </a>
    </div>
    <!-- Copyright -->
  </footer>
</template>
<script>
export default {
  name: "FooterSite"
};
</script>
<style>
.facebook-button:hover {
  color: #3d604d;
}

.instagram-button:hover {
  color: #3d604d;
}

.whatsapp-button:hover {
  color: #3d604d;
}

.email-button:hover {
  color: #3d604d;
}

.dev-link {
  text-decoration: none;
  color: white;
}

.dev-link:hover {
  color: #3d604d;
}
.footer-container {
  padding: 0px !important;
  margin: 0px !important;
  height: 100%;
}
.text-footer {
  margin-bottom: 0px !important;
  margin-right: 1.5rem !important;
}
.logo-footer {
  width: 20%;
  border-radius: 0.5rem;
}
</style>
