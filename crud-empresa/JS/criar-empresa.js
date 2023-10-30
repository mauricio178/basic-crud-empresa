// Funcionalidade Criar tipo de Curso
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-criar-empresa");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cnpj = form.querySelector("[name='cnpj']").value;
    const phone = form.querySelector("[name='phone']").value;
    const address = form.querySelector("[name='address']").value;
    const email = form.querySelector("[name='email']").value;
    const size = form.querySelector("[name='size']").value;
    const socialReason = form.querySelector("[name='socialReason']").value;
    const cep = form.querySelector("[name='cep']").value;
    const cnae = form.querySelector("[name='cnae']").value;
    const degreeRisk = form.querySelector("[name='degreeRisk']").value;

    const formObj = {
      cnpj,
      phone,
      address,
      email,
      size,
      socialReason,
      cep,
      cnae,
      degreeRisk
    }

    console.log({formObj})
  });
});
