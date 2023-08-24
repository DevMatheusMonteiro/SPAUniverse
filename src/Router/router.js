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

        document
          .querySelector("header li:nth-child(1) a")
          .classList.add("active");
        document
          .querySelector("header li:nth-child(2) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(3) a")
          .classList.remove("active");
        break;
      case "/universe":
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("exploration");
        document.querySelector(".bg").classList.add("universe");

        document
          .querySelector("header li:nth-child(1) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(2) a")
          .classList.add("active");
        document
          .querySelector("header li:nth-child(3) a")
          .classList.remove("active");
        break;
      case "/exploration":
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("universe");
        document.querySelector(".bg").classList.add("exploration");

        document
          .querySelector("header li:nth-child(1) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(2) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(3) a")
          .classList.add("active");
        break;

      default:
        document.querySelector(".bg").classList.remove("home");
        document.querySelector(".bg").classList.remove("universe");
        document.querySelector(".bg").classList.remove("exploration");

        document
          .querySelector("header li:nth-child(1) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(2) a")
          .classList.remove("active");
        document
          .querySelector("header li:nth-child(3) a")
          .classList.remove("active");
        break;
    }
  }
}
