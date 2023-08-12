import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "support@example.com" }]
    }
  ],
  from: {
    name: "ACME Support",
    email: "support@example.com"
  },
  respondWith: () => {
    return new Response(
      `Olá! Já recebi seu email e responderei em breve. Muito obrigado por entrar em contato!`
    );
  }
});
