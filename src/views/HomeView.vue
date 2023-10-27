<template>
  <main class="bg-primary">
    <!-- Initial text -->
    <div id="home" class="container-fluid ms-0 ps-0 me-0 pe-0">
      <img class="banner" src="../../public/images/banner.jpg" alt="" />
    </div>
    <div class="container">
      <h1 class="jc-title wow text-center">Minha missão é te fazer apaixonar por café!</h1>
    </div>

    <!-- Carousel -->

    <div class="owl-carousel">
      <div class="item"><img src="../../public/images/coffee2.jpg" /></div>
      <div class="item"><img src="../../public/images/barista2.jpg" /></div>
      <div class="item"><img src="../../public/images/roast2.jpg" /></div>
      <!-- Add more slides as needed -->
    </div>

    <!-- Services -->
    <div id="servicos"></div>
    <div class="text1container">
      <div class="container card-container">
        <div class="text-center pt-5 title-section wow">
          <h1 class="text-white">Serviços</h1>
        </div>
        <div class="card mb-3 rounded-start card-1 wow">
          <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="../../public/images/barista.jpg"
                class="img-fluid rounded-center align-items-center card-img"
                alt="Helcio Baroni tocando piano junto ao seu aluno"
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <h5 class="card-title">Consultoria Barista</h5>
                <p class="card-text">
                  Como barista e apaixonado pelo universo do café, dedico-me a compartilhar meu
                  conhecimento através de treinamentos personalizados para cafeterias e eventos
                  especiais. Minhas aulas envolventes exploram desde técnicas de extração até a arte
                  da latte, capacitando equipes a oferecerem experiências únicas e cativantes aos
                  amantes do café. Com cada xícara, meu compromisso é elevar a cultura do café a
                  novos patamares de excelência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container card-container2">
        <div class="card mb-3 rounded-end card-2 wow">
          <div class="row">
            <div class="col-md-6 d-none d-md-flex align-items-center">
              <div class="card-body">
                <h5 class="card-title">Consultoria Torras</h5>
                <p class="card-text">
                  Através do meu serviço de torra de café personalizado para empresas, crio curvas
                  de torras sob medida, ressaltando os perfis de sabor desejados e aprimorando a
                  qualidade final do produto. Minha abordagem meticulosa combina ciência e paixão,
                  garantindo que cada lote atinja sua expressão máxima de sabor e aroma. Como
                  parceiro confiável, estou comprometido em elevar a experiência de café das marcas,
                  deixando uma marca distinta e irresistível.
                </p>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="../../public/images/roast.jpg"
                class="img-fluid card-img"
                alt="Helcio Baroni tocando piano junto ao seu aluno"
              />
            </div>
            <div class="col-md-8 d-md-none">
              <div class="card-body">
                <h5 class="card-title">Eventos</h5>
                <p class="card-text">
                  Apresentações em concertos de piano solo, concertos de música de câmara,
                  casamentos, eventos corporativos e sociais, atividades educacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container card-container">
        <div class="card mb-3 rounded-start card-1 wow">
          <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="../../public/images/coffeetaste5.jpg"
                class="img-fluid rounded-center align-items-center card-img"
                alt="Helcio Baroni tocando piano junto ao seu aluno"
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <h5 class="card-title">Consultoria Provas</h5>
                <p class="card-text">
                  Através da minha consultoria especializada em degustação de café, ofereço aos
                  produtores uma oportunidade única de aprimorar sua percepção sensorial e conhecer
                  a verdadeira qualidade do produto que comercializam. Guiando-os em uma jornada
                  sensorial, ajudo-os a identificar nuances de sabores e aromas, a compreender a
                  complexidade dos diferentes perfis de torra e a reconhecer características
                  distintas que podem elevar seus cafés a um patamar superior. Minha abordagem
                  personalizada capacita os produtores a tomar decisões informadas, aperfeiçoar suas
                  técnicas de produção e, por consequência, oferecer aos consumidores finais uma
                  experiência de café excepcional e memorável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact -->

    <div id="contato"></div>
    <div class="bg-light">
      <div
        class="container wow"
        style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
      >
        <h1 class="text-center pt-4 fw-bold contact-title">Contato</h1>
      </div>
      <div class="container pt-3 contact-info text-center wow">
        <h2 class="contact-info-title">Informações de Contato</h2>
        <p class="pt-3">
          <a href="https://www.linkedin.com/in/joao197/" target="_blank" class="a-contact">
            <i class="bi bi-person-vcard ps-2"></i>
            João Vitor Pereira da Silva
          </a>
        </p>
        <p>
          <a href="https://wa.me/+5535998895249" target="_blank" class="a-contact">
            <i class="bi bi-whatsapp ps-2"></i>
            (35) 99889-5249
          </a>
        </p>
        <p>
          <a href="https://maps.app.goo.gl/V4s35y39iak2aPhLA" target="_blank" class="a-contact">
            <i class="bi bi-geo-alt-fill ps-2"></i>
            Av. Princesa do Sul, Nº 890, Jardim Andere, Varginha, Minas Gerais, Brasil, CEP:
            37026-652.
          </a>
        </p>
        <p>
          <a href="mailto:joao.coffee@outlook.com" target="_blank" class="a-contact">
            <i class="bi bi-envelope-fill ps-2"></i>
            joao.coffee@outlook.com
          </a>
        </p>
      </div>
      <div class="container py-0 mt-4 contact-overlay wow">
        <div class="row">
          <div class="col-12 col-lg-6 mb-4">
            <form @submit="submitForm($event)">
              <div class="row justify-content-center mb-3">
                <div class="col-12">
                  <label for="formGroupExampleInput" class="form-label">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Digite seu nome"
                    v-model="name"
                    :disabled="sendingForm"
                  />
                </div>
              </div>
              <div class="row justify-content-center mb-3">
                <div class="col-12">
                  <label for="phone" class="form-label">Telefone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="(xx) xxxxx-xxxx"
                    v-model="phone"
                    @keypress="phoneMask($event)"
                    :disabled="sendingForm"
                  />
                </div>
              </div>
              <div class="row justify-content-center mb-3">
                <div class="col-12">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    v-model="email"
                    :disabled="sendingForm"
                  />
                </div>
              </div>
              <div class="row justify-content-center mb-3">
                <div class="col-12">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Digite sua mensagem:
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    v-model="msg"
                    :disabled="sendingForm"
                  ></textarea>
                </div>
              </div>
              <div class="row justify-content-center mb-3">
                <div class="col-12">
                  <p v-if="formError" class="text-danger">{{ formError }}</p>
                  <p v-if="formSent" class="text-success">
                    Recebemos a sua mensagem. Responderemos em breve! 😉
                  </p>
                  <div class="sub-button">
                    <button
                      type="submit"
                      class="btn btn-primary submit-button mt-2 btn-lg w-50"
                      :disabled="sendingForm"
                    >
                      <span
                        v-if="sendingForm"
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>

                      <span v-if="sendingForm">Enviando...</span>
                      <span v-if="!sendingForm">Enviar</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-12 col-lg-6 mb-4 badge text-wrap justify-content-center wow">
            <div class="text-center fs-3 pt-3 wpp-contact">
              Entre em contato através do WhatsApp:
            </div>
            <div class="pt-2">
              <a href="https://wa.me/+5535998895249" target="_blank" rel="noopener noreferrer">
                <button type="button" class="btn btn-success wpp-button-contact-page">
                  <i class="bi bi-whatsapp"></i>
                  (35) 99889-5249
                </button>
              </a>
            </div>
            <div class="pt-2 maps-card wow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.237938052798!2d-45.444824588332985!3d-21.576633491609776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca92a48d2dc2fb%3A0x6297baea026cacfa!2sAv.%20Princesa%20do%20Sul%2C%20890%20-%20Jardim%20Andere%2C%20Varginha%20-%20MG%2C%2037026-652!5e0!3m2!1spt-BR!2sbr!4v1697997114605!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style="border: 0; border-radius: 1rem"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.owl-carousel {
  background-color: #49604c;
  padding-top: 200px;
  padding-bottom: 200px;
}
.owl-carousel,
.owl-stage {
  min-height: 60vh;
}

.owl-nav {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  min-height: 100px;
  font-size: 5rem !important;
  margin-top: -30vh;
}

.owl-carousel .owl-nav button.owl-next,
.owl-carousel .owl-nav button.owl-prev {
  padding: 0 2rem !important;
  opacity: 0.75;
  color: #222;
}

.owl-carousel .item {
  /* margin: 8px; */
  transition: all 0.8s;
}

.owl-carousel .item img {
  min-height: 50vh;
  border-radius: 36px;
}

.current img {
  box-shadow: 0px 0px 0 #222;
}

.current {
  margin-top: 100px !important;
}

.text-title {
  color: white;
}

.slider-container {
  animation: fadeIn;
  animation-duration: 4s;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 4rem !important;
  height: 4rem !important;
}

#home-slider .slide-image {
  min-height: 80vh;
  background-size: cover;
  background-position: center;
}

#home-slider .carousel-item .carousel-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  color: #fff;
}
.banner {
  width: 100%;
}
.text2bg {
  background-color: #49604c;
}
.jc-title {
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 10px;
  animation: fadeInDown;
  animation-duration: 2s;
}
.jc-text {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
  margin-bottom: 250px;
  animation: fadeIn;
  animation-duration: 4s;
}
.jc-image {
  animation: fadeInRight;
  animation-duration: 2s;
  width: 60%;
}

.contact-title {
  color: rgb(79, 51, 51);

  margin-bottom: 50px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-info {
  color: #4f3333;
  margin-bottom: 50px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-info-title {
  color: #4f3333;
  margin-bottom: 30px;
  animation: fadeIn;
  animation-duration: 3s;
}

.wpp-contact {
  color: #4f3333;
}

.wpp-button-contact-page {
  margin-top: 30px;
  margin-bottom: 30px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-overlay {
  color: #4f3333;
  animation: fadeIn;
  animation-duration: 3s;
}
.home-quote {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 150%;
  animation: fadeIn;
  animation-duration: 3s;
}
.h3 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.a-contact {
  text-decoration: none;
  color: #4f3333;
}

.maps-card {
  margin-left: 5%;
  margin-right: 5%;
}

.card {
  max-width: 1440px;
  background-color: #4f3333 !important;
  color: white;
  border: none !important;
  padding-top: 90px;
  padding-bottom: 90px;
}

.card-1 {
  animation: fadeInLeft;
  animation-duration: 3s;
}

.card-2 {
  animation: fadeInRight;
  animation-duration: 1.5s;
}

.card-img {
  width: 50% !important;
}

.card-title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
  font-size: x-large;
}

.card-text {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
  font-size: larger;
}

.card-container {
  margin-top: 100px;
}

.card-container2 {
  margin-top: 50px;
}

@media screen and (max-width: 500px) {
  .jc-title {
    padding-top: 50px;
    margin-bottom: 10px;
  }
  .jc-text {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .jc-image {
    margin-top: 10px;
    margin-bottom: 10px;
    animation: fadeIn;
    animation-duration: 3s;
  }
  .about-photo {
    width: 40%;
    margin-top: 75px;
    animation: fadeIn;
    animation-duration: 3s;
  }
  .about-title {
    margin-top: 0px;
    margin-bottom: 0px;
    animation: fadeIn;
    animation-duration: 3s;
  }
  .about-text {
    margin-top: 10px;
    width: 100%;
    margin-bottom: 75px;
    animation: fadeIn;
    animation-duration: 3s;
  }
  .services-title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .card {
    border-top: 0 !important;
    border-right: 0 !important;
    border-left: 0 !important;
    border-width: 3px !important;
    border-color: rgba(0, 0, 0, 0.336) !important;
    border-radius: 0rem !important;
    margin-top: 50px;
    margin-bottom: 50px;
    animation: fadeIn;
    animation-duration: 3s;
  }
  .card-group {
    margin-bottom: 20px;
  }
  .contact-title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .contact-info {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  .sub-button {
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  .wpp-contact {
    padding-top: 0px;
    margin-top: 0px;
  }
  .wpp-button-contact-page {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .maps-card {
    margin-left: 0%;
    margin-right: 0%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      msg: "",
      formError: "",
      sendingForm: false,
      formSent: false
    };
  },

  methods: {
    phoneMask(event) {
      event.preventDefault();

      const key = event.key;
      if (!key || isNaN(Number(key))) {
        return;
      }

      this.phone = this.phone + key;

      let phoneNumber = this.phone.replace(/\D/g, "");
      let formattedPhone = "";

      if (phoneNumber.length < 1) {
        formattedPhone = "";
      } else if (phoneNumber.length < 3) {
        formattedPhone = "(" + phoneNumber;
      } else if (phoneNumber.length < 7) {
        formattedPhone = "(" + phoneNumber.substring(0, 2) + ") " + phoneNumber.substring(2);
      } else if (phoneNumber.length < 11) {
        formattedPhone =
          "(" +
          phoneNumber.substring(0, 2) +
          ") " +
          phoneNumber.substring(2, 6) +
          "-" +
          phoneNumber.substring(6);
      } else {
        formattedPhone =
          "(" +
          phoneNumber.substring(0, 2) +
          ") " +
          phoneNumber.substring(2, 7) +
          "-" +
          phoneNumber.substring(7);
      }

      this.phone = formattedPhone.substring(0, 15);
    },

    submitForm(event) {
      event.preventDefault();

      if (this.sendingForm) return;

      this.formError = "";
      this.formSent = false;

      if (this.name.length <= 0) {
        this.formError = "O nome é obrigatório";
        return;
      }

      if (this.phone.length <= 0) {
        this.formError = "O telefone é obrigatório";
        return;
      }

      if (this.email.length <= 0) {
        this.formError = "O email é obrigatório";
        return;
      }

      if (this.msg.length <= 0) {
        this.formError = "A mensagem é obrigatória";
        return;
      }

      this.sendingForm = true;

      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.msg
      };

      const whatsText =
        `*Olá! Gostaria de entrar em contato com você.*\n` +
        `\n` +
        `🪪 *Nome:* ${formData.name}\n` +
        `✉️ *Email:* ${formData.email}\n` +
        `\n` +
        `💬 *Telefone:* ${formData.phone}\n` +
        `\n` +
        `📄 *Mensagem:*\n` +
        `${formData.message}`;

      window.open(
        `https://api.whatsapp.com/send/?phone=5535998895249&text=${encodeURI(
          whatsText
        )}&type=phone_number&app_absent=0`,
        "_blank"
      );

      setTimeout(() => {
        console.log("Form submitted", formData);

        this.formSent = true;

        this.name = "";
        this.phone = "";
        this.email = "";
        this.msg = "";

        this.sendingForm = false;
      }, 0);
    }
  }
};

// css animation //

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3, // Number of visible items
    loop: true, // Enable loop
    nav: true,
    center: true,
    //  autoplay: true,
    // autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: "easein",
    animateOut: "easeout",
    margin: 24,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3,
        onChanged: updateCurrentSlide // Callback function when slide changes
      }
    }
  });

  // Function to add a class to the currently selected item
  function updateCurrentSlide(event) {
    var currentItem = event.item.index; // Get the current item index
    $(".item").removeClass("current"); // Remove the class from all items
    $(".item").eq(currentItem).addClass("current"); // Add the class to the current item
  }
});

new WOW().init();
</script>
