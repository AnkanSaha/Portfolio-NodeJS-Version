// Hamburger Menu Control
const targetEl = document.getElementById('navbar-solid-bg')
// set the target element that will be collapsed or expanded (eg. navbar menu)
const triggerEl = document.getElementById('hamburger')
// set the trigger element that will be used to toggle the target element
triggerEl.addEventListener('click', function () {
  if (targetEl.classList.contains('hidden')) {
    targetEl.classList.remove('hidden')
  } else {
    targetEl.classList.add('hidden')
  }
})

async function getDetails () {
  const data = await fetch('/blogs/gettitles')
  const finaldata = await data.json()
  let template = ''
  finaldata.data.forEach((selected) => {
    template += `<tr
    class="bg-gray-300 border border-grey-500 md:border-none block md:table-row my-4"
  >
    <td
      class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold">Blog Name</span
      >${selected.BlogName}
    </td>
    <td
      class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold"
        >Blog Catagory</span
      >${selected.BlogCatagory}
    </td>
    <td
      class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold"
        >Published Date</span
      >${selected.PublishDate}
    </td>
    <td
      class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold"
        >Actions</span
      >
      <a href="${selected.SlugLink}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded readbtn my-2">Read Full</a>
    </td>
  </tr>`
  })
  document.getElementById('massagetbody').innerHTML = template
}
setInterval(getDetails, 30000)

document.addEventListener('DOMContentLoaded', getDetails)
document.addEventListener('DOMContentLoaded', () => {
  const Deskloading =
    '<img src="../../images/loading.png" class="w-24 inline-block lg:ml-[35.25rem] mt-[12rem] animate-spin ml-[8.25rem]" alt="loading"></img>'
  const Mobloading = `
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
  `
  const ScreenSize = window.matchMedia('(max-width: 468px)')
  if (ScreenSize.matches == true) {
    document.getElementById('massagetbody').innerHTML = Mobloading
  } else if (ScreenSize.matches == false) {
    document.getElementById('massagetbody').innerHTML = Deskloading
  }
})

// disable right click in whole page
// document.addEventListener('contextmenu', (e)=>{e.preventDefault()})

// Gtag Configuration
window.dataLayer = window.dataLayer || []
function gtag () {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'G-2RK9LW9MGR')

// dilar feature
document.getElementById('dial').addEventListener('click', () => {
  document.getElementById('dialer').classList.toggle('hidden')
})
// print button
document.getElementById('printbtn').addEventListener('click', () => {
  window.print()
})
document.getElementById('sharebtn').addEventListener('click', () => {
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        text: document.title,
        url: window.location.href
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error))
  } else {
    alert('Your browser does not support sharing')
  }
})

// logo animaton
const logo = document.getElementById('mainlogo')
const dial = document.getElementById('dial')
const maintitle = document.getElementById('maintitle')
logo.classList.toggle('animate-spin')
dial.classList.toggle('animate-spin')
setInterval(() => {
  logo.classList.toggle('animate-spin')
  dial.classList.toggle('animate-spin')
  dial.classList.toggle('animate-pulse')
  dial.classList.toggle('bg-red-500')
  maintitle.classList.toggle('animate-bounce')
}, 2000)

function toggeler () {
  const PostUser = localStorage.getItem('PostUser')
  if (PostUser == null || PostUser == '' || PostUser == undefined) {
    document.getElementById('createaccount').classList.remove('hidden')
  } else {
    document.getElementById('createaccount').classList.add('hidden')
  }
}
toggeler()
setInterval(toggeler, 1000)
