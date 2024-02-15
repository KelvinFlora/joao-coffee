<template>
  <div class="container">
    <h1 class="curso-title text-center p-5 pt-2">Cursos</h1>
    <div>
      <div class="text-center">
        <h2>Introdução à classificação e degustação de cafés especiais</h2>
      </div>
      <div class="container">
        <div class="card mb-3 rounded-start wow">
          <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="../../public/images/coffeetaste5.jpg"
                class="img-fluid rounded-center align-items-center card-img"
                alt="Helcio Baroni tocando piano junto ao seu aluno"
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="">
                <h4 class="card-title">Conteúdo encontrado nesse curso:</h4>
                <h5>Classificação:</h5>
                <h6>- Classificação de cafés especiais</h6>
                <h6>- Categorização de tipos e defeitos</h6>
                <h6>- Parâmetros físicos para definição de qualidade</h6>
                <h6>- Padrões de cafés comerciais/exportações</h6>
                <h5>Torra de Cafés:</h5>
                <h6>- Conceitos teóricos de uma torra de café</h6>
                <h6>- Variáveis da torra de café</h6>
                <h6>- Torra especial/Torra comercial</h6>
                <h6>- Perfil sensorial de níveis de torra</h6>
                <h5>Treino de percepção sensorial</h5>
                <h6>- Identificação de aromas do "Le Nez du Café"</h6>
                <h6>- Calibração sensorial de níveis e sabores</h6>
                <h6>- Detecção de diferenças sensoriais</h6>
                <h6>- Conceituação teórica do sabor</h6>
                <h5>Degustação prática/teórica</h5>
                <h6>- Utilização do formulário COE/SCA</h6>
                <h6>- Definição de atributos avaliados no café</h6>
                <h6>- Degustação de cafés especiais</h6>
                <h6>- Triangulação sensorial</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center pb-5">
    <a
      href="https://www.canva.com/design/DAF8thb5AUQ/fR0FaGMm2n5BRF1ypat16g/edit?utm_content=DAF8thb5AUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      target="_blank"
    >
      <button type="button" class="btn btn-primary">Mais detalhes</button></a
    >
  </div>

  <div class="container py-0 mt-4 contact-overlay wow">
    <h2 class="pb-4 text-center">Inscreva-se no curso:</h2>
    <div class="col-12 col-lg-6 mb-4">
      <form @submit="submitForm($event)">
        <div class="row mb-3">
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
        <div class="row mb-3">
          <div class="col-12">
            <label class="form-label">CPF/CNPJ</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite seu CPF ou CNPJ (Apenas Números)"
              v-model="cpf"
              @keypress="cpfMask($event)"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">Rua</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite o nome da sua rua (Endereço)"
              v-model="street"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">Número</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite o número da sua residência"
              v-model="number"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">Bairro</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite seu bairro"
              v-model="neighborhood"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">Complemento</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Ex: Apartamento 71"
              v-model="complement"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">Cidade</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite sua cidade"
              v-model="city"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="formGroupExampleInput" class="form-label">CEP</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite seu CEP"
              v-model="zipcode"
              :disabled="sendingForm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label class="form-label">Método de Pagamento</label>
            <select class="form-select" v-model="paymentMethod">
              <option value="pix">Pix (10% de Desconto)</option>
              <option value="credito">Crédito</option>
            </select>
            <p v-if="paymentMethod === 'pix'">
              Valor com desconto: R$ {{ (total * 0.9).toFixed(2) }}
            </p>
          </div>
        </div>
        <div v-if="paymentMethod === 'credito' || showInstallments" class="row mb-3">
          <div class="col-12">
            <label class="form-label">Parcelas</label>
            <select class="form-select" v-model="installments">
              <option v-for="n in 10" :value="n" :key="n">
                {{ n }}x de R$ {{ (599 / n).toFixed(2) }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <input type="checkbox" id="acceptTerms" v-model="acceptTerms" required />
            <label for="acceptTerms">Aceito os Termos de Serviço e Privacidade.</label>
            <br />
            <p>
              Ao clicar em "Enviar", você concorda com nossos
              <a href="#" @click.prevent="openTermsModal">Termos de Serviço</a> e
              <a href="#" @click.prevent="openPrivacyModal">Política de Privacidade</a>.
            </p>
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
    <div
      class="modal fade"
      id="lgpdModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="lgpdModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="lgpdModalLabel">
              Termos de Privacidade e Compartilhamento de Dados
            </h5>
            <button type="button" class="close" @click="closePrivacyModal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Ao preencher este formulário, você está consentindo com o compartilhamento de suas
              informações pessoais com João Coffee e concorda com os termos descritos abaixo:
            </p>

            <ol>
              <li>
                <strong>Informações Pessoais Coletadas:</strong> Nós coletamos informações pessoais
                fornecidas voluntariamente por você neste formulário. Isso pode incluir, mas não
                está limitado a, seu nome, endereço de e-mail, número de telefone e qualquer outra
                informação relevante para os serviços que oferecemos.
              </li>
              <li>
                <strong>Uso das Informações:</strong> As informações pessoais coletadas serão
                utilizadas exclusivamente para os fins especificados neste formulário, incluindo,
                mas não se limitando a, comunicação sobre produtos ou serviços, processamento de
                transações e qualquer outro propósito para o qual você nos forneceu suas
                informações.
              </li>
              <li>
                <strong>Compartilhamento de Dados:</strong> Nós podemos compartilhar suas
                informações pessoais com terceiros apenas quando necessário para fornecer os
                serviços solicitados por você. Isso pode incluir processadores de pagamento,
                prestadores de serviços de entrega, entre outros parceiros comerciais essenciais
                para a execução dos serviços contratados.
              </li>
              <li>
                <strong>Proteção de Dados:</strong> Nós nos comprometemos a proteger suas
                informações pessoais contra acesso não autorizado, uso indevido ou divulgação.
                Adotamos medidas de segurança adequadas para garantir a segurança e
                confidencialidade de seus dados.
              </li>
              <li>
                <strong>Cookies e Tecnologias de Rastreamento:</strong> Podemos utilizar cookies e
                outras tecnologias de rastreamento para melhorar a experiência do usuário em nosso
                site e para coletar informações sobre como você interage conosco. Você pode
                controlar o uso de cookies através das configurações do seu navegador.
              </li>
              <li>
                <strong>Direitos do Titular dos Dados:</strong> Você tem o direito de acessar,
                corrigir ou excluir suas informações pessoais a qualquer momento. Você também pode
                optar por não fornecer determinadas informações, embora isso possa afetar nossa
                capacidade de fornecer alguns serviços.
              </li>
              <li>
                <strong>Consentimento:</strong> Ao enviar este formulário, você está consentindo com
                a coleta, uso e compartilhamento de suas informações pessoais de acordo com os
                termos descritos nesta política de privacidade.
              </li>
            </ol>

            <p>
              Ao assinalar a caixa de seleção abaixo, você confirma que leu, compreendeu e concorda
              com os termos desta política de privacidade e compartilhamento de dados.
            </p>

            <p>
              Se você tiver alguma dúvida ou preocupação sobre nossa política de privacidade ou o
              uso de suas informações pessoais, entre em contato conosco através dos canais
              fornecidos em nosso site.
            </p>

            <p>Data da última atualização: 14/02/2024</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="termsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="termsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="termsModalLabel">Termos de Serviço</h5>
            <button type="button" class="close" @click="closeTermsModal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Prezado(a) aluno(a),</p>
            <p>
              Seja bem-vindo(a) ao curso "Introdução à Classificação e Degustação de Cafés
              Especiais". Agradecemos sinceramente por sua inscrição e por fazer parte desta
              experiência enriquecedora.
            </p>
            <p>
              Entendemos que situações imprevistas podem surgir, e para garantir transparência e
              eficiência em nossos serviços, estabelecemos a seguinte política de cancelamento:
            </p>
            <h2>Cancelamento até 29/02:</h2>
            <p>
              Até o dia 29 de fevereiro de 2024, caso opte por cancelar sua participação, você terá
              direito a um reembolso integral do valor pago. Nesse período, o cancelamento é 100%
              gratuito. Para solicitar o reembolso, por favor, entre em contato conosco através dos
              canais de atendimento disponibilizados abaixo.
            </p>
            <h2>Cancelamento após 29/02:</h2>
            <p>
              Após a data mencionada, o reembolso será concedido com algumas considerações. Será
              reembolsado 90% do valor pago, devido a taxas administrativas e questões logísticas
              que impactam as vagas disponíveis. Agradecemos sua compreensão, pois essa medida visa
              garantir a oportunidade de participação a outros interessados.
            </p>
            <p>
              Lembramos que qualquer solicitação de cancelamento ou alteração deve ser formalizada
              por escrito. Estamos à disposição para esclarecer quaisquer dúvidas que possam surgir
              durante esse processo.
            </p>
            <p>Atenciosamente,</p>
            <p>João Coffee</p>
            <p>
              Para dúvidas ou esclarecimentos adicionais, entre em contato pelo Whatsapp: (35)
              99889-4259.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
  <div class="calendar-container text-center ps-2 pe-2">
    <iframe
      class="calendar text-center"
      src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23795548&ctz=America%2FSao_Paulo&title=Jo%C3%A3o%20Coffee%20Educacional&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=am9hb2NvZmZlZWVkdWNhY2lvbmFsQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
      style="border: solid 1px #777"
      width="600"
      height="400"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
  -->
</template>

<style>
.contact-overlay {
  color: black;
}
.video-curso {
  border-radius: 0.5rem;
}
.btn-primary {
  font-size: 20px; /* Altere o tamanho conforme necessário */
  padding: 10px 20px; /* Altere o preenchimento conforme necessário */
}
.card {
  background-color: #fff !important;
  color: black;
}
.card-img {
  width: 65% !important;
  border-radius: 2rem !important;
  align-items: center !important;
  text-align: center !important;
}
@media (max-width: 768px) {
  .video-curso {
    width: 100%;
  }
  .calendar-container {
    width: 50px !important;
    height: 100px !important;
    margin-bottom: 200px;
  }
  .calendar {
    width: 400px;
    height: 300px;
    margin-bottom: 50px;
  }
  .card-img {
    width: 70% !important;
    border-radius: 2rem !important;
    align-items: center !important;
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
