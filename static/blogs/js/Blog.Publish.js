// login check
const authmodal = document.getElementById('authmodal')
const PostUser = localStorage.getItem('PostUser')
if (PostUser == null) {
  document.getElementsByTagName('main')[0].classList.toggle('blur-lg')
  authmodal.classList.toggle('hidden')
} else {
  ExtraUserAuth(PostUser).then((data) => {
    if (data == null) {
      localStorage.removeItem('PostUser')
      window.location.href = '/blogs'
    } else {
      console.log('User is Verified')
    }
  })
}

// Extra User Auth
document.getElementById('modalclose').addEventListener('click', async () => {
  const usercode = document.getElementById('Usercode').value
  const userpass = document.getElementById('UserPassword').value
  const response = await ExtraUserAuth(usercode, userpass)
  if (response == null) {
    alert('Invalid User Code')
  } else {
    localStorage.setItem('PostUser', response)
    authmodal.classList.toggle('hidden')
    document.getElementsByTagName('main')[0].classList.toggle('blur-lg')
  }
})

async function ExtraUserAuth (ExtraUserCode, ExtraUserPass) {
  const response = await fetch('/admin/post/ExtraUserVerify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Extra: ExtraUserCode, ExtraPass: ExtraUserPass })
  })
  const data = await response.json()
  console.log(data)
  if (data.status == 'success') {
    return data.userCode
  } else if (data.status == 'failed') {
    return null
  }
}

// Hamburger Menu Control
const targetEl = document.getElementById('navbar-solid-bg')
// set the target element that will be collapsed or expanded (eg. navbar menu)
const triggerEl = document.getElementById('hamburger')
// set the trigger element that will be used to toggle the target element
triggerEl.addEventListener('click', function () {
  targetEl.classList.toggle('hidden')
})

const PostFailure = `<div class="w-full h-full">
<h1 class="text-center font-extrabold text-2xl mt-[7.5rem] text-white font-mono">Your Blog is Not Posted</h1>
<img class="inline-block w-[10.25rem] mt-[4.75rem] ml-[6rem] lg:ml-[37.25rem]" src="../images/Blog-Post-Failure.png" alt="fail">
<br>
<a class="bg-yellow-500 text-white px-5 py-1 font-mono rounded-lg my-12 inline-block ml-[8.25rem] lg:ml-[39.25rem]" href="/blogs/publish">Retry</a>
</div>`

const PostSuccess = `<div class="w-full h-full">
<h1 class="text-center font-extrabold text-lg mt-[7.5rem] text-white font-mono">Your Blog Published Successfully</h1>
<img class="inline-block w-[10.25rem] mt-[4.75rem] ml-[6rem] lg:ml-[37.25rem]" src="../images/Blog-Post-success.png" alt="fail">
<br>
<a class="bg-cyan-500 text-white px-5 py-1 font-mono rounded-lg my-12 inline-block ml-[7.25rem] lg:ml-[38.25rem]" href="/blogs">Go To Blogs</a>
</div>`

// posting the blog
document.getElementById('postbutton').addEventListener('click', Blogpost)

async function Blogpost () {
  let BlogName = document.getElementById('name').value
  const AuthorName = document.getElementById('authorname').value
  let BlogCatagory = document.getElementById('catagory').value
  let PublishDate = document.getElementById('publishdate').value
  let Content = document.getElementById('message').value
  document.getElementById('postbutton').innerText = 'Posting...'
  // condition for validaton
  if (
    BlogName == '' ||
    BlogCatagory == '' ||
    PublishDate == '' ||
    Content == '' ||
    AuthorName == ''
  ) {
    alert('Please Conplete all Fields 😃')
    document.getElementById('postbutton').innerText = 'Post This Blog'
  } else if (BlogName.length > 30) {
    alert('Blog Name Should be less than 30 Characters')
    document.getElementById('postbutton').innerText = 'Post This Blog'
  } else {
    const Sendingdata = {
      BlogName,
      AuthorName,
      BlogCatagory,
      PublishDate,
      Content,
      SlugLink: `/blogs/${BlogName}`
    }
    try {
      const response = await fetch('/blogs/publish/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Sendingdata)
      })
      const finalResponse = await response.json()
      alert(finalResponse.status)
      if (finalResponse.status == 'Your Blog Published Successfully') {
        document.getElementById('postbutton').innerText = 'Post This Blog'
        BlogName = ''
        BlogCatagory = ''
        PublishDate = ''
        Content = ''
        document.getElementsByTagName('body')[0].innerHTML = PostSuccess
        document.getElementsByTagName('title')[0].innerText =
          'Blog Post Success'
        document.getElementsByTagName('body')[0].classList.add('bg-green-600')
      } else {
        document.getElementById('postbutton').innerText = 'Post This Blog'
        BlogName = ''
        BlogCatagory = ''
        PublishDate = ''
        Content = ''
        document.getElementsByTagName('body')[0].innerHTML = PostFailure
        document.getElementsByTagName('title')[0].innerText =
          'Blog Post Failure'
        document.getElementsByTagName('body')[0].classList.add('bg-red-600')
      }
    } catch {
      alert('Ubable To Post Blog Right Now 😢 Try again...')
      document.getElementById('postbutton').innerText = 'Post This Blog'
      BlogName = ''
      BlogCatagory = ''
      PublishDate = ''
      Content = ''
      document.getElementsByTagName('body')[0].innerHTML = PostFailure
      document.getElementsByTagName('title')[0].innerText = 'Blog Post Failure'
      document.getElementsByTagName('body')[0].classList.add('bg-red-600')
    }
  }
}
// Gtag Configuration
window.dataLayer = window.dataLayer || []
function gtag () {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'G-2RK9LW9MGR')
// disable right click in whole page
// document.addEventListener('contextmenu', (e)=>{e.preventDefault()})

// logo animaton
const logo = document.getElementById('mainlogo')
const maintitle = document.getElementById('maintitle')
logo.classList.toggle('animate-spin')
setInterval(() => {
  logo.classList.toggle('animate-spin')
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
