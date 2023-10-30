// Funcionalidade do dropdown que fecha e depois abre o dropdown
function openDropdown(dropdownId) {
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");
  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    }
  }
  document.getElementById(dropdownId).classList.toggle("show");
}

// Funcionalidade para identificar se existe algum dropdown selecionado
// Caso exista algum dropdown selecionado, ele fecha todos os outros
window.onclick = function (event) {
  if (!event.target.matches(".btn-do-dropdown") && !event.target.matches(".fas")) {
    const dropdowns = document.getElementsByClassName("conteudo-dropdown");
    for (let openDropdown of dropdowns) {
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Captura os valores de cada link dentro do dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".conteudo-dropdown");
  dropdowns.forEach(function (dropdown) {
    const links = dropdown.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(link.textContent);
      });
    });
  });
});

let modal = document.getElementById("modal-exclusao");
let empresaExcluir = document.getElementById("empresa-para-excluir");
let modalClose = document.getElementsByClassName("modal-close")[0];
let cancelarExclusao = document.getElementById("cancelar-exclusao");
let confirmarExclusao = document.getElementById("confirmar-exclusao");

// Abre a modal quando clicar em Excluir
document.querySelectorAll('.conteudo-dropdown a[href="#excluir"]').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    empresaExcluir.textContent = e.target.closest('tr').querySelector('.nome-da-empresa').textContent;
    modal.style.display = "block";
  });
});

if (modalClose) {
  modalClose.onclick = function () {
    modal.style.display = "none";
  }
}

if (cancelarExclusao) {
  cancelarExclusao.onclick = function () {
    modal.style.display = "none";
  }
}

if (confirmarExclusao) {
  confirmarExclusao.onclick = function () {
    modal.style.display = "none";
  }
}
