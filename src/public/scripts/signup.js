const form = document.querySelector("#loginForm");
const username_d = document.querySelector("#username");
const password_d = document.querySelector("#password");
const repeatpassword_d = document.querySelector("#repeatpassword");
const email_d = document.querySelector("#email");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (
    username_d.value == "" ||
    password_d.value == "" ||
    repeatpassword_d.value == "" ||
    email_d.value == ""
  ) {
    alert("Empty fields");
    return;
  } else if (password_d.value !== repeatpassword_d.value) {
    alert("Don't match password");
    return;
  } else {
    const user = {
      username: username_d.value,
      email: email_d.value,
      password: password_d.value,
    };

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        console.log("Error");
      }
      alert("Susccessfully registered");
      window.location.href = "/signin";
    } catch (error) {
      console.error(error);
      alert("Error al enviar la solicitud");
    }
  }
});
