export default class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(e) {
    e = e || window.event;
    e.preventDefault();

    window.history.pushState({}, "", e.target.href);

    this.handle();
  }

  clickEvent(selector) {
    const elements = document.querySelectorAll(selector);

    for (const element of elements) {
      element.addEventListener("click", (e) => {
        this.route(e);
      });
    }
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });

    switch (pathname) {
      case "/":
        document.querySelector(".bg").classList.remove("exploration");
        document.querySelector(".bg").classList.remove("universe");
        document.querySelector(".bg").classList.add("home");
        break;
      case "/universe":
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("exploration");
        document.querySelector(".bg").classList.add("universe");
        break;
      case "/exploration":
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("universe");
        document.querySelector(".bg").classList.add("exploration");
        break;

      default:
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("universe");
        document.querySelector(".bg").classList.remove("exploration");
        break;
    }
  }
}
