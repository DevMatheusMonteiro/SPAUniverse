export default class Element {
  element;
  getElement(selector) {
    this.element = document.querySelector(selector);
  }
}
