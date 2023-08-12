<template>
  <main class="bg-primary">
    <!-- Initial text -->

    <div class="container-fluid p-0 slider-container wow">
      <div id="home-slider" class="carousel carousel-light slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home-slider"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#home-slider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#home-slider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <a href="a-importancia-da-leitura.html">
            <div class="carousel-item active" data-bs-interval="4500">
              <div
                class="d-block w-100 slide-image"
                style="background-image: url('/images/coffee.jpg')"
                alt="..."
              ></div>
              <div class="carousel-caption">
                <h5>A importância do cultivo!</h5>
                <p>
                  Quais são os pontos positivos de se compreender a fundo sobre o cultivo dos cafés.
                </p>
              </div>
            </div>
          </a>
          <div class="carousel-item" data-bs-interval="4500">
            <a href="entre-acordes-e-harmonias.html">
              <div
                class="d-block w-100 slide-image"
                style="
                  background-image: url('images/coffeetaste5.jpg');
                  background-position-y: center;
                "
                alt="..."
              ></div>
              <div class="carousel-caption">
                <h5>Entre acordes e harmonias</h5>
                <p>As maiores dificuldades na identificação de acordes.</p>
              </div>
            </a>
          </div>
          <div class="carousel-item" data-bs-interval="4500">
            <a href="apresentacao-em-casamentos.html">
              <div
                class="d-block w-100 slide-image"
                style="background-image: url('images/piano-carousel-3.jpg')"
                alt="..."
              ></div>
              <div class="carousel-caption">
                <h5>Cafés especiais</h5>
                <p>Tudo sobre a carreira!</p>
              </div>
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#home-slider"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#home-slider"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Quote -->
    <div class="container-fluid text-center pt-5 pb-5 bg-dark quote-bg">
      <h1 class="home-quote text-light wow">
        "A mente é como um jardim. Se não for cultivada, pode se tornar uma selva." - Desmond Tutu
      </h1>
    </div>
    <!-- About Me -->
    <div class="container text-center">
      <img
        class="pt-4 about-photo wow"
        alt="Foto de perfil do Psicólogo Marciran"
        src="../../public/images/marciran-photo-prof.png"
      />
    </div>
    <div class="container text-center pt-3">
      <h2 class="about-title wow">Sobre mim</h2>
    </div>
    <div class="container-fluid text-center pt-4 pb-4">
      <div class="row justify-content-center">
        <h4 class="col-8 align-self-center about-text wow">
          <p>
            Meu nome é <strong>Marciran Eleuterio Brisida</strong>, Sou
            <strong>Psicólogo Clínico</strong>.
            <br />
            Atendo crianças, adolescentes, adultos e idosos.
          </p>

          <p>
            Formado em <strong>Psicologia</strong> pela Universidade José do Rosário Vellano -
            UNIFENAS.
          </p>

          <p>
            Especialista em <strong>Terapia Cognitivo-Comportamental</strong> pela Pontifícia
            Universidade Católica do Paraná - PUCPR.
          </p>

          <p>
            Psicólogo credenciado junto ao Conselho Federal de Psicologia - CFP para
            <strong>atendimento online</strong> segundo a Resolução CFP Nº: 11/2018.
          </p>
        </h4>
      </div>
    </div>

    <!-- Serviços -->
    <div class="container-fluid pt-4 pb-4 text-center bg-dark text-white services">
      <h1 class="pb-3 services-title wow">Serviços</h1>
      <div class="card-group wow">
        <div class="card bg-dark align-items-center wow card-1">
          <img
            src="../../public/images/psychotherapy.jpg"
            class="card-img-top rounded w-50"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Atendimento Psicológico</h5>
            <p class="card-text">
              Atendimentos Psicológicos voltados para todos os públicos (Infantil, Adolescente,
              Adulto e Idoso).
            </p>
          </div>
        </div>
        <div class="card bg-dark align-items-center wow card-2">
          <img
            src="../../public/images/parents-orientation.jpeg"
            class="card-img-top rounded w-50"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Orientação de Pais</h5>
            <p class="card-text">
              Orientações aos pais relacionadas a comportamentos e como lidar com situações adversas
              nos diversos ambientes onde seus filhos estão inseridos.
            </p>
          </div>
        </div>
        <div class="card bg-dark align-items-center wow card-3">
          <img
            src="../../public/images/couple-therapy.jpg"
            class="card-img-top rounded w-50"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Terapia de Casal</h5>
            <p class="card-text">
              A terapia de casal possibilitará a identificação e discussão de questões que estão
              afetando o relacionamento. Como por exemplo, problemas de comunicação, conflitos,
              falta de intimidade, infidelidade ou outras dificuldades.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact -->
    <div
      class="container wow"
      style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    >
      <h1 class="text-center pt-4 fw-bold contact-title">Contato</h1>
    </div>
    <div class="container pt-3 contact-info text-center wow">
      <h2 class="contact-info-title">Informações de Contato</h2>
      <p class="pt-3">
        <a href="https://www.instagram.com/psi.marciranbrisida/" target="_blank" class="a-contact">
          <i class="bi bi-person-vcard ps-2"></i>
          Marciran Eleutério Brisida
        </a>
      </p>
      <p>
        <a href="https://wa.me/+5535988434758" target="_blank" class="a-contact">
          <i class="bi bi-whatsapp ps-2"></i>
          (35) 98843-4758
        </a>
      </p>
      <p>
        <a href="https://goo.gl/maps/jG4pjcxcGKxovvYQ7" target="_blank" class="a-contact">
          <i class="bi bi-geo-alt-fill ps-2"></i>
          Edifício Manhattan - Rua Francisco Garcia de Miranda Junior, Nº 130, Sala 203, Centro,
          Três Pontas - MG
        </a>
      </p>
      <p>
        <a href="mailto:marciranbrisidapsi@gmail.com" target="_blank" class="a-contact">
          <i class="bi bi-envelope-fill ps-2"></i>
          marciranbrisidapsi@gmail.com
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
          <div class="text-center fs-3 pt-3 text-dark wpp-contact">
            Entre em contato através do WhatsApp:
          </div>
          <div class="pt-2">
            <a href="https://wa.me/+5535988434758" target="_blank" rel="noopener noreferrer">
              <button type="button" class="btn btn-success wpp-button-contact-page">
                <i class="bi bi-whatsapp"></i>
                (35) 98843-4758
              </button>
            </a>
          </div>
          <div class="pt-2 maps-card wow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14862.038041234116!2d-45.51967893022461!3d-21.36983379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca83ea1f90ceb5%3A0x25acdb02d6964a9f!2sR.%20Francisco%20Garc%C3%ADa%20Miranda%2C%20130%20-%20Botafogo%2C%20Tr%C3%AAs%20Pontas%20-%20MG%2C%2037190-000!5e0!3m2!1spt-BR!2sbr!4v1680636619303!5m2!1spt-BR!2sbr"
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
  </main>
</template>
<style>
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
  min-height: 90vh;
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
.about-title {
  margin-top: 50px;
  margin-bottom: 50px;
  animation: fadeInDown;
  animation-duration: 2s;
}
.about-photo {
  align-items: center;
  width: 30%;
  margin-top: 100px;
  animation: fadeInDown;
  animation-duration: 2s;
}
.about-text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
  margin-bottom: 200px;
  animation: fadeInUp;
  animation-duration: 2s;
}
.services-title {
  margin-top: 50px;
  margin-bottom: 50px;
  animation: fadeIn;
  animation-duration: 3s;
}
.card {
  border: 0;
  border-width: 0 !important;
}
.card-1 {
  animation: fadeInLeft;
  animation-duration: 2s;
}
.card-2 {
  animation: fadeInUp;
  animation-duration: 2s;
}
.card-3 {
  animation: fadeInRight;
  animation-duration: 2s;
}
.card-group {
  margin-bottom: 150px;
}

.contact-title {
  margin-top: 50px;
  margin-bottom: 50px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-info {
  margin-bottom: 50px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-info-title {
  margin-bottom: 30px;
  animation: fadeIn;
  animation-duration: 3s;
}
.wpp-button-contact-page {
  margin-top: 30px;
  margin-bottom: 30px;
  animation: fadeIn;
  animation-duration: 3s;
}
.contact-overlay {
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
  color: black;
}

.maps-card {
  margin-left: 5%;
  margin-right: 5%;
}

@media screen and (max-width: 500px) {
  .psycho-title {
    padding-top: 5px;
    margin-bottom: 10px;
  }
  .psycho-text {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .psycho-image {
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
        `https://api.whatsapp.com/send/?phone=5535988434758&text=${encodeURI(
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
new WOW().init();
</script>
