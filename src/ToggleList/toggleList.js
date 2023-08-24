import Element from "./element.js";

const listButton = new Element();
listButton.getElement(".ph-list");

const buttonDescription = new Element();
buttonDescription.getElement(".ph-list span");

const listNav = new Element();
listNav.getElement("nav");

listButton.element.addEventListener("click", () => {
  let isOpen = listNav.element.classList.toggle("hide");

  let description = isOpen
    ? "Abrir menu de navegação"
    : "Fechar menu de navegação";

  buttonDescription.element.textContent = description;
});
