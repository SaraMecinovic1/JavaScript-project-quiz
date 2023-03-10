document.getElementById("gifDiv").style = "display: none; ";

const spiner = () => {
  document.getElementById("gifDiv").style =
    "display: flex; justify-content: center; align-items:center;";
  document.getElementById("form").style = "display: none;";
};
const stopSpiner = () => {
  document.getElementById("gifDiv").style = "display: none; ";
  document.getElementById("form").style = "display: flex;";
};

////////

document.getElementById("loginButt").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  loginData = {
    email: email,
    password: password,
  };

  if (!email.includes("@") || password.length < 6 || password.length > 20) {
    spiner();

    // alert("Proverite sifru ili email");
  }

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.userId) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspesna!");
        window.location.href = "quiz.html";
      } else {
        // alert("Greska!");
        spiner();
      }
    });
});
