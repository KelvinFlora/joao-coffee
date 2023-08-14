<template>
  <h1></h1>
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
