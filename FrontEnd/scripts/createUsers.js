/* eslint-disable default-case */
/* eslint-disable no-undef */

const CreateUsers = {
  URL: "http://192.168.1.8:3333/users",

  checkPassword() {
    this.checkInputs();

    const Password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;

    if (Password === rePassword) {
      this.getValueInputs(Password);
      return;
    }
    this.messageInputs("Senhas nao se coincidem", "password-msg");
  },

  getValueInputs(Password) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = Password;
    this.createAcccount(username, email, password);
  },

  createAcccount(username, email, password) {
    const dataUser = { username, email, password };
    const options = {
      method: "POST",
      headers: new Headers({ "Content-type": "application/json" }),
      body: JSON.stringify(dataUser),
    };

    fetch(this.URL, options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.messageError(json);

        return json;
      });
  },

  messageError(object) {
    const messageError = document.getElementById("error");

    if (!object.message) {
      messageError.innerHTML = "";
    }
    messageError.innerHTML = object.message;
  },

  messageInputs(message, local) {
    const localMessage = document.getElementById(local);

    const msgError = Array.from(document.getElementsByClassName("msg-error"));

    for (let i = 0; i < msgError.length; i += 1) {
      msgError[i].innerHTML = "";
    }

    localMessage.innerHTML = message;

    throw new Error("Formulário nao preenchido!");
  },

  checkInputs() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;

    const expr = "";

    switch (expr) {
      case email:
        this.messageInputs("Digite seu email!", "email-msg");
        break;

      case username:
        this.messageInputs("Digite seu usuário!", "username-msg");
        break;

      case password:
        this.messageInputs("Digite sua senha!", "password-msg");
        break;

      case rePassword:
        this.messageInputs("Digite sua re-password!", "re-password-msg");
        break;
    }
  },
};
