<template>
  <main class="bg-primary">
    <!-- Initial text -->
    <div class="container pt-4 pb-4">
      <div class="row align-self-xl-center">
        <h1 class="jc-title wow">
          Explorando o Mundo dos Cafés Especiais: Uma Jornada Sensorial e Profissional
        </h1>
        <h2 class="col-xl-6 pt-2 jc-text wow">
          <p>
            O universo dos cafés especiais é uma verdadeira ode aos sentidos, onde aromas complexos,
            sabores distintos e origens diversas se entrelaçam para criar uma experiência única e
            memorável. Mais do que uma bebida cotidiana, o café especial transcende as fronteiras do
            comum, cativando paladares e despertando uma paixão que vai além da xícara.
            <br />
          </p>
          <p>
            Neste contexto, a profissão ligada aos cafés especiais assume um papel crucial,
            tornando-se uma atividade enriquecedora e desafiadora. O café especial é fruto de um
            minucioso processo, desde o cultivo da planta até a xícara.
            <br />
          </p>
          <p>
            Começa com a seleção de grãos de qualidade excepcional, provenientes de regiões
            geográficas privilegiadas. Os métodos de colheita e processamento são realizados com
            cuidado, garantindo que a integridade dos grãos seja preservada.
            <br />
          </p>
          Em seguida, o mestre torrador assume a responsabilidade de realçar as características
          únicas de cada lote, transformando os grãos verdes em pequenas obras-primas caramelizadas.
        </h2>
        <div class="col-xl-6 text-center">
          <img
            class="rounded jc-image wow"
            src="../../public/images/coffeetaste5.jpg"
            alt="Pessoa meditando"
          />
        </div>
      </div>
    </div>

    <!-- Contact -->
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
          <a href="https://goo.gl/maps/TdnEHhfS4khSKyy39" target="_blank" class="a-contact">
            <i class="bi bi-geo-alt-fill ps-2"></i>
            Rua José Gonçalves Dias, Nº 382, Apartamento 301-A, Santa Luiza, Varginha, Minas Gerais,
            Brasil, CEP: 37026710.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.283831108484!2d-45.44938848833313!3d-21.574841291549554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca92a1088bd901%3A0x567dcd0f0004c5a2!2sR.%20Jos%C3%A9%20Gon%C3%A7alves%20Dias%2C%20382%20-%20301%20a%20-%20Santa%20Luiza%2C%20Varginha%20-%20MG%2C%2037026-710!5e0!3m2!1spt-BR!2sbr!4v1692025487344!5m2!1spt-BR!2sbr"
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
.jc-title {
  color: white;
  padding-top: 200px;
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
  color: #4f3333;
  margin-top: 50px;
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

@media screen and (max-width: 500px) {
  .jc-title {
    padding-top: 5px;
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
new WOW().init();
</script>
