console.log('Hello Wolrd')
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

// posting the blog
document.getElementById('postbutton').addEventListener('click', Blogpost)

async function Blogpost(){
let BlogName = document.getElementById('name').value
let BlogCatagory = document.getElementById('catagory').value
let PublishDate = document.getElementById('publishdate').value
let Content = document.getElementById('message').value
document.getElementById('postbutton').innerText = 'Posting...'
// condition for validaton
    if(BlogName == '' || BlogCatagory =='' || PublishDate == '' || Content == ''){
        alert('Please Conplete all Fields 😃')
        document.getElementById('postbutton').innerText = 'Post This Blog'
    }
    else{
        var Sendingdata ={
            BlogName:BlogName,
            BlogCatagory:BlogCatagory,
            PublishDate:PublishDate,
            Content:Content,
            SlugLink:`/blogs/${BlogName}`
        }
        try{
            let response = await fetch('/blogs/publish/new', {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Sendingdata)})
            var finalResponse = await response.json()
            console.log(finalResponse)
            alert(finalResponse.status)
            if(finalResponse.status =='Your Blog Published Successfully'){
                window.location.href = '/blogs'
                document.getElementById('postbutton').innerText = 'Post This Blog'
                BlogName = ''
                BlogCatagory = ''
                PublishDate = ''
                Content = ''
            }
            else{
                document.getElementById('postbutton').innerText = 'Post This Blog'
                BlogName = ''
                BlogCatagory = ''
                PublishDate = ''
                Content = ''
            }
        }
        catch{
            alert('Ubable To Post Blog Right Now 😢 Try again...')
            document.getElementById('postbutton').innerText = 'Post This Blog'
            BlogName = ''
            BlogCatagory = ''
            PublishDate = ''
            Content = ''
        }
    }
}
// Gtag Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2RK9LW9MGR');
// disable right click in whole page
document.addEventListener('contextmenu', (e)=>{e.preventDefault()})