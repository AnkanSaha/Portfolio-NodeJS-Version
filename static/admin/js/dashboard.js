const hamburger = document.getElementById("hamburger");
const collapse = document.getElementById("navbar-default");
hamburger.addEventListener("click", function () {
  collapse.classList.toggle("hidden");
});

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

// loading all messages
async function getmessage() {
  // get all messages
  let response = await fetch("/admin/message");
  let data = await response.json();
  if (data.status == "success") {
    let html = "";
    let MessageBody = document.getElementById("massagetbody");
    data.data.forEach((item) => {
      html += `<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row my-4">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>${item.name}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>${item.Email}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Short Message</span>${item.Message}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button class="bg-yellow-200 hover:bg-green-700 hover:text-white text-black font-bold py-1 px-2 border border-blue-500 rounded readbtn my-2" name=${item._id}>Read Full</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded deletebtn" name=${item._id}>Delete</button>
            </td>
        </tr>`;
    });
    document.getElementById("forloading").innerHTML = "";
    MessageBody.innerHTML = html;

    // read full message

    // adding event listener to  all read message buttion
    document.querySelectorAll(".deletebtn").forEach((selectedbtn) => {
      selectedbtn.addEventListener("click", async () => {
        let Message = selectedbtn.getAttribute("name");
        let response = await fetch("/admin/message/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Id: Message }),
        });
        let data = await response.json();
        if (data.status == "success") {
          getmessage();
        } else if (data.status == "failed") {
          alert("Something went wrong");
        }
      });
    });
    // read full message
    document.querySelectorAll(".readbtn").forEach((selectedbtn) => {
      selectedbtn.addEventListener("click", async () => {
        let Message = selectedbtn.getAttribute("name");
        readfullmessage(Message);
      });
    });
  } else if (data.status == "failed") {
    alert("Failed to load messages");
  }
}
getmessage();
setInterval(getmessage, 3000);

// read full message
async function readfullmessage(id) {
  let response = await fetch("/admin/message/read", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id: id }),
  });
  let data = await response.json();
  if (data.status == "success") {
    document.getElementById("MsgUsername").innerText = `Message from ${data.data.name}`;
    document.getElementById("fullmassage").innerText = data.data.FinalMessage;
    document.getElementById("staticModal").classList.remove("hidden");
    document.getElementById("staticModal").classList.add("block");
    document.getElementById("staticModal").setAttribute("aria-hidden", "false");
  } else if (data.status == "failed") {
    alert("Something went wrong");
  }
}

document.getElementById("closeside").addEventListener("click", closeModal);
document.getElementById("mainclose").addEventListener("click", closeModal);
// close modal
function closeModal() {
  document.getElementById("staticModal").classList.toggle("hidden");
}

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
    document.getElementById("forloading").innerHTML = Mobloading;
  } else if (ScreenSize.matches == false) {
    document.getElementById("forloading").innerHTML = Deskloading;
  }
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

// disable right click in modal
// document.getElementById("staticModal").addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// disable right click in whole page
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// logo animaton
let logo = document.getElementById("mainlogo");
logo.classList.toggle("animate-spin");
setInterval(() => {
  logo.classList.toggle("animate-spin");
}, 2000);
