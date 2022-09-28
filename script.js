let form = document.getElementById("form");
let form2 = document.getElementById("form2");
let email = document.getElementById("email");
let email2 = document.getElementById("email2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var emailVal = email.value.trim();
  var emailPattern =
    /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
  if (emailVal === "") {
    errorFunc(email, "Please check your email");
  } else if (!emailVal.match(emailPattern)) {
    errorFunc(email, "Please check your email");
  } else {
    successFunc(email, "");
  }
});

/* SECOND FORM */

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  var emailVal = email2.value.trim();
  var emailPattern =
    /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
  if (emailVal === "") {
    errorFunc(email2, "Please check your email");
  } else if (!emailVal.match(emailPattern)) {
    errorFunc(email2, "Please check your email");
  } else {
    successFunc(email2, "");
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerHTML = message;
  req.className = "error";
  span.className = "error-text";
  if (req !== email && req !== email2) {
    req.value = "";
  } else {
    req.value = "johnappleseed#@mail.com";
  }
}

function successFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerHTML = message;
  req.className = "success";
  span.className = "success-text";
}
