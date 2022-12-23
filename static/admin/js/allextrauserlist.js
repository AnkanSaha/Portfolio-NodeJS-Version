//logout feature
document.getElementById("logout").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("AdminCode");
    window.location.href = "/admin";
  });

  // check code
let Code = localStorage.getItem("AdminCode");
if (Code == null) {
  window.location.href = "/admin";
}

  const hamburger = document.getElementById("hamburger");
const collapse = document.getElementById("navbar-default");
hamburger.addEventListener("click", function () {
  collapse.classList.toggle("hidden");
});

// add extra user to post
document.getElementById("AddUser").addEventListener("click", () => {
    let username;
    let Password;
    let Email;
do{
     username= prompt("Enter username To add :");
     Password= prompt("Enter Password To add :");
     Email= prompt("Enter Email To add :");
}while(username == null || username == "" || username.length <= 5 || Password == null || Password == "" || Password.length <= 5 || Email == null || Email == "" || Email.length <= 5)
      fetch("/admin/post/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: Password, email: Email }),
      }).then((response) => {
        response.json().then((data) => {
          alert(data.status);
          getusers()
        });
      });
  });
  
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

async function getusers(){
    let token = localStorage.getItem("AdminCode");
    let response = await fetch("/admin/post/getusers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    let data = await response.json();
    console.log(data)
    if (data.status == "success") {
      let users = data.data;
      let html = ``;
      users.forEach((user) => {
        html +=`<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row my-1">
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Username</span>${user.username}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">assword</span>${user.password}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>${user.email}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Delete</span>
            <button username=${user.username} password=${user.password} email=${user.email} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded deletebtn">Delete</button>
        </td>
    </tr>`
})
// delete user
document.getElementById("userlist").innerHTML = html
      document.querySelectorAll(".deletebtn").forEach((btn) => {
          btn.addEventListener('click', (e)=>{
            e.preventDefault()
            let confirm = window.confirm("Are you sure you want to delete this user?")
            if(!confirm){
                alert("Operation Cancelled")
                return
            }
            let username = btn.getAttribute("username")
            let password = btn.getAttribute("password")
            let email = btn.getAttribute("email")
            fetch("/admin/post/deleteuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username, password: password, email: email }),
                }).then((response) => {
                response.json().then((data) => {
                    alert(data.status);
                    getusers()
                });
            })
          })
      });
    }
}
getusers()
setInterval(getusers, 30000)

// loading letiables
let Mobloading = `
  <div role="status" class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
      <div class="flex justify-between items-center">
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex justify-between items-center pt-4">
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex justify-between items-center pt-4">
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex justify-between items-center pt-4">
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex justify-between items-center pt-4">
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <span class="sr-only">Loading...</span>
  </div>
  `;
let Deskloading = `<img src="../../images/loading.png" class="w-24 inline-block lg:ml-[35.25rem] mt-[12rem] animate-spin ml-[8.25rem]" alt="loading"></img>`;

document.addEventListener("DOMContentLoaded", () => { 
  let ScreenSize = window.matchMedia("(max-width: 468px)");
  if (ScreenSize.matches == true) {
    document.getElementById("userlist").innerHTML = Mobloading;
  } else if (ScreenSize.matches == false) {
    document.getElementById("userlist").innerHTML = Deskloading;
  }
});