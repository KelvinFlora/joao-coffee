<template>
  <div class="container text-center pt-4 contact-info-p4">
    <h2>Informações de Contato</h2>
    <p class="pt-3">
      <a href="https://www.instagram.com/psi.marciranbrisida/" target="_blank" class="a-contact">
        <i class="bi bi-person-vcard ps-2"></i>
        Marciran Eleutério Brisida
      </a>
    </p>
    <p>
      <a href="https://wa.me/+5535988434758" target="_blank" class="a-contact">
        <i class="bi bi-whatsapp ps-2"></i> (35) 98843-4758
      </a>
    </p>
    <p>
      <a href="https://goo.gl/maps/jG4pjcxcGKxovvYQ7" target="_blank" class="a-contact">
        <i class="bi bi-geo-alt ps-2"></i>
        Edifício Manhattan - Rua Francisco Garcia de Miranda Junior, Nº 130, Sala 203, Centro, Três
        Pontas - MG
      </a>
    </p>
    <p>
      <a href="mailto:marciranbrisidapsi@gmail.com" target="_blank" class="a-contact">
        <i class="bi bi-envelope ps-2"></i>
        marciranbrisidapsi@gmail.com
      </a>
    </p>
  </div>
  <div class="container py-0 mt-4 contact-overlay">
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
              <div class="sub-button-p4">
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
      <div class="col-12 col-lg-6 mb-4 badge text-wrap justify-content-center">
        <div class="text-center fs-3 pt-3 text-dark">Entre em contato através do WhatsApp:</div>
        <div class="pt-2">
          <a href="https://wa.me/+5535988434758" target="_blank" rel="noopener noreferrer">
            <button type="button" class="btn btn-success wpp-button-contact-page">
              <i class="bi bi-whatsapp"></i> (35) 98843-4758
            </button></a
          >
        </div>
        <div class="pt-2 maps-card-p4">
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
</template>
<style>
.contact-info-p4 {
  animation: fadeIn;
  animation-duration: 3s;
}
.maps-card-p4 {
  margin-left: 5%;
  margin-right: 5%;
}
@media screen and (max-width: 500px) {
  .sub-button-p4 {
    text-align: center;
  }
  .maps-card-p4 {
    margin-left: 0%;
    margin-right: 0%;
  }
  .contact-info-p4 {
    text-align: center;
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
</script>
