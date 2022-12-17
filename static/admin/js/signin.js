console.log("Hello World");
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navbar-solid-bg").classList.toggle("hidden");
});

// login page
// Path: static/admin/js/signin.js
document.getElementById("submitLogin").addEventListener("click", (e) => {
  e.preventDefault();
  var AdminCode = document.getElementById("AdminCode").value;
  if (AdminCode.length == 0) {
    alert("Please Enter Admin Code");
  } else {
    AdminCodeVerify(AdminCode);
  }
});

//auto login
var Code = localStorage.getItem("AdminCode");
if (Code == null) {
  console.log("Admin Code is not set");
} else if (Code != null) {
  AdminCodeVerify(Code);
}

// Admin Code Verify feature
async function AdminCodeVerify(AdminCode) {
  try {
    let response = await fetch("/CodeVerify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ AdminCode: AdminCode }),
    });
    let data = await response.json();
    if (data.status == "success") {
      localStorage.setItem("AdminCode", AdminCode);
      window.location.href = "/admin/dashboard";
    } else if (data.status == "failed") {
      alert("Admin Code is incorrect");
    }
  } catch (err) {
    if (err) {
      console.log(err);
      alert("Unable to verify Admin Code right now. Please try again later.");
    }
  }
}
// Gtag Configuration
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-2RK9LW9MGR");

// disable right click in whole page
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// logo animaton
let logo = document.getElementById("mainlogo");
logo.classList.toggle("animate-spin");
setInterval(() => {
  logo.classList.toggle("animate-spin");
}, 2000);
