<template>
  <div class="container">
    <div class="text-center pb-5 pt-4">
      <h1>Cursos</h1>
    </div>

    <!-- Introdução aos cafés especiais -->
    <div class="row">
      <div class="col-md-12">
        <a href="/curso2" class="card-link">
          <div class="bg-white card rounded shadow mb-4 zoom custom-card">
            <div class="d-md-flex flex-md-row align-items-md-center">
              <img
                src="../../public/images/coffeetaste6.jpg"
                class="card-img-top fixed-image-size mb-3 mb-md-0 mr-md-3"
                alt="Curso de Comercialização de Cafés"
              />
              <div class="card-body text-dark text-center text-md-left">
                <h5 class="card-title mb-0">
                  Introdução à Classificação e Degustação de Cafés Especiais
                </h5>
                <p class="card-text">
                  Este curso abrange a classificação de cafés especiais, torra, treino de percepção
                  sensorial e degustação prática, fornecendo uma compreensão abrangente da qualidade
                  e avaliação de cafés.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Drinks Caseiros -->
      <div class="row">
        <div class="col-md-12">
          <a href="/curso1" class="card-link">
            <div class="bg-white card rounded shadow mb-4 zoom custom-card">
              <div class="d-md-flex flex-md-row align-items-md-center">
                <img
                  src="../../public/images/baristacurso.jpg"
                  class="card-img-top fixed-image-size mb-3 mb-md-0 mr-md-3"
                  alt="Curso de Comercialização de Cafés"
                />
                <div class="card-body text-dark text-center text-md-left">
                  <h5 class="card-title mb-0">
                    Curso de Barista - Drinks Caseiros (Especial de Dia das Mães)
                  </h5>
                  <p class="card-text">
                    Vamos aprender como fazer um bom café em casa, criar drinks caseiros e o que
                    comprar na hora de presentear sua mãe que ama café.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Curso de Comercialização de Cafés -->
        <!--
      <div class="col-md-12">
        <a href="/cursocomercializacao" class="card-link">
          <div class="bg-white card rounded shadow mb-4 zoom custom-card">
            <div class="d-md-flex flex-md-row align-items-md-center">
              <img
                src="../../public/images/comercializacao.jpg"
                class="card-img-top fixed-image-size mb-3 mb-md-0 mr-md-3"
                alt="Curso de Comercialização de Cafés"
              />
              <div class="card-body text-dark text-center text-md-left">
                <h5 class="card-title mb-0">Curso de Introdução à Comercialização de Cafés</h5>
                <p class="card-text">
                  Aprenda sobre os processos de comercialização de café, desde a produção até a
                  distribuição. Este curso aborda estratégias de marketing, logística e gestão de
                  negócios relacionados ao mercado de café.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      -->

        <!-- Curso de Introdução à Torra de Cafés -->
        <!--
      <div class="col-md-12">
        <a href="/cursotorra" class="card-link">
          <div class="card rounded shadow mb-4 zoom bg-white custom-card">
            <div class="d-md-flex flex-md-row align-items-md-center">
              <img
                src="../../public/images/torra.jpg"
                class="card-img-top fixed-image-size mb-3 mb-md-0 mr-md-3"
                alt="Curso de Introdução à Torra de Cafés"
              />
              <div class="card-body text-dark text-center text-md-left">
                <h5 class="card-title mb-0">Curso de Introdução à Torra de Cafés</h5>
                <p class="card-text">
                  Este curso oferece uma introdução ao processo de torra de café, cobrindo os
                  fundamentos da ciência por trás da torra, diferentes métodos e técnicas para obter
                  o melhor sabor e aroma do café.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      --></div>
    </div>
  </div>
</template>

<style>
.card-link {
  text-decoration: none; /* Remover sublinhado do link */
  color: inherit; /* Herdar a cor do texto do pai */
}

.zoom {
  transition: transform 0.3s ease;
}

.zoom:hover {
  transform: scale(1.05);
}

.fixed-image-size {
  width: 200px; /* Largura fixa */
  height: 200px; /* Altura fixa */
  margin-left: 50px;
  object-fit: cover; /* Redimensionar a imagem mantendo a proporção */
}

.custom-card {
  border: 3px solid #b5b5b5 !important; /* Adiciona uma borda cinza fraca */
}

@media (max-width: 767.98px) {
  .fixed-image-size {
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 0px !important;
  }

  .card-body {
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
      cpf: "",
      street: "",
      neighborhood: "",
      number: "",
      complement: "",
      city: "",
      zipcode: "",
      paymentMethod: "pix",
      installments: 1,
      showInstallments: false,
      total: 599,
      formError: "",
      sendingForm: false,
      formSent: false
    };
  },

  watch: {
    paymentMethod(newVal) {
      if (newVal === "credito") {
        this.showInstallments = true;
      } else {
        this.showInstallments = false;
      }
    }
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

    cpfMask(event) {
      event.preventDefault();

      const key = event.key;
      if (!key || isNaN(Number(key))) {
        return;
      }

      // Limitar o comprimento máximo do CPF
      if (this.cpf.length >= 14) {
        return;
      }

      // Aceitar apenas números
      if (isNaN(Number(key))) {
        return;
      }

      // Concatenar o valor da tecla digitada ao CPF
      this.cpf += key;
    },

    openTermsModal() {
      $("#termsModal").modal("show");
    },

    openPrivacyModal() {
      $("#lgpdModal").modal("show");
    },

    closePrivacyModal() {
      $("#lgpdModal").modal("hide");
    },

    closeTermsModal() {
      $("#termsModal").modal("hide");
    },

    submitForm(event) {
      event.preventDefault();

      if (this.sendingForm) return;

      this.formError = "";
      this.formSent = false;

      const fullName = this.name.trim();
      const nameParts = fullName.split(" ");
      if (nameParts.length < 2) {
        this.formError = "Por favor, insira seu nome completo.";
        return;
      }

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

      if (this.cpf.length <= 0) {
        this.formError = "O CPF/CNPJ é obrigatório";
        return;
      }

      if (this.street.length <= 0) {
        this.formError = "O nome da rua é obrigatório";
        return;
      }

      if (this.neighborhood.length <= 0) {
        this.formError = "O nome do bairro é obrigatório";
        return;
      }

      if (this.number.length <= 0) {
        this.formError = "O número da residência é obrigatório";
        return;
      }

      if (this.complement.length <= 0) {
        this.formError = "O complemento de sua moradia é obrigatório";
        return;
      }

      if (this.city.length <= 0) {
        this.formError = "O nome da cidade é obrigatório";
        return;
      }

      if (this.zipcode.length <= 0) {
        this.formError = "O CEP é obrigatório";
        return;
      }

      this.sendingForm = true;

      const total = 599; // Valor total do curso
      const installmentValue = total / this.installments;
      const totalWithDiscount = this.paymentMethod === "pix" ? total * 0.9 : total;

      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        cpf: this.cpf,
        street: this.street,
        neighborhood: this.neighborhood,
        number: this.number,
        complement: this.complement,
        city: this.city,
        zipcode: this.zipcode,
        paymentMethod: this.paymentMethod,
        installments: this.installments,
        installmentValue: installmentValue.toFixed(2),
        total: totalWithDiscount.toFixed(2)
      };

      let whatsText =
        `*Olá! Gostaria de me inscrever no seu curso.*\n` +
        `\n` +
        `🪪 *Nome:* ${formData.name}\n` +
        `✉️ *Email:* ${formData.email}\n` +
        `\n` +
        `📱 *CPF:* ${formData.cpf}\n` +
        `\n` +
        `📱 *Telefone:* ${formData.phone}\n` +
        `\n` +
        `🏠 *Rua:* ${formData.street}\n` +
        `\n` +
        `🏠 *Bairro:* ${formData.neighborhood}\n` +
        `\n` +
        `🏠 *Número:* ${formData.number}\n` +
        `\n` +
        `🏠 *Complemento:* ${formData.complement}\n` +
        `\n` +
        `🏠 *Cidade:* ${formData.city}\n` +
        `\n` +
        `🏠 *CEP:* ${formData.zipcode}`;

      if (formData.paymentMethod === "pix") {
        whatsText +=
          `\n` +
          `🏠 *Método de Pagamento:* ${formData.paymentMethod}\n` +
          `\n` +
          `Valor com desconto: R$ ${formData.total}`;
      } else {
        whatsText +=
          `\n` +
          `🏠 *Método de Pagamento:* ${formData.paymentMethod}\n` +
          `\n` +
          `📄 *Parcelamento:*\n` +
          `${this.installments}x de R$ ${installmentValue.toFixed(2)}`;
      }

      window.open(
        `https://api.whatsapp.com/send/?phone=5535998895249&text=${encodeURI(
          whatsText
        )}&type=phone_number&app_absent=0`,
        "_blank"
      );

      setTimeout(() => {
        console.log("Form submitted", formData);

        this.formSent = true;

        this.sendingForm = false;
      }, 0);
    }
  }
};
</script>
