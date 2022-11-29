console.log('Hello World');
// Hamburger Menu Control
const targetEl = document.getElementById('navbar-solid-bg');
// set the target element that will be collapsed or expanded (eg. navbar menu)
const triggerEl = document.getElementById('hamburger');
// set the trigger element that will be used to toggle the target element
triggerEl.addEventListener('click', function() {
    if(targetEl.classList.contains('hidden')) {
        targetEl.classList.remove('hidden');
    }
    else{
        targetEl.classList.add('hidden');
    }
})

async function getDetails(){
    var data = await fetch('/blogs/gettitles')
    var finaldata = await data.json()
    console.log(finaldata)
    let template = ''
finaldata.data.forEach(selected=>{
    template +=`<tr
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

setInterval(getDetails, 3000)

document.addEventListener('DOMContentLoaded', getDetails)
document.addEventListener('DOMContentLoaded', ()=>{
  var loading = `<img src="../../images/loading.png" class="w-24 inline-block lg:ml-[35.25rem] mt-[12rem] animate-spin ml-[8.25rem]" alt="loading"></img>`
  document.getElementById('massagetbody').innerHTML = loading;
})

// Gtag Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2RK9LW9MGR');