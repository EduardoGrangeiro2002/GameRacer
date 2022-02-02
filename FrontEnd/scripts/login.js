/* eslint-disable no-undef */

const sessions = {
  URL: {
    sessions: "http://192.168.1.8:3333/sessions",
  },

  login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginSession = {
      username,
      password,
    };

    const options = {
      method: "POST",
      headers: new Headers({ "Content-type": "application/json" }),
      body: JSON.stringify(loginSession),
    };

    fetch(this.URL.sessions, options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.error(json);
        return json;
      });
  },
  checkLogin(object) {
    if (!object.token) {
      throw new Error("Usuário não logado");
    }

    window.location.href =
      "http://127.0.0.1:5500/FrontEnd/pages/interface.html";
  },

  error(object) {
    const messageError = document.getElementById("error");

    if (!object.message) {
      messageError.innerHTML = "";

      this.checkLogin(object);

      return;
    }
    messageError.innerHTML = object.message;
  },
};

module.exports = { sessions };
