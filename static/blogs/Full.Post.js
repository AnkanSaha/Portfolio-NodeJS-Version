 // Hamburger Menu Control
 const targetEl = document.getElementById('navbar-solid-bg');
 const triggerEl = document.getElementById('hamburger');
 triggerEl.addEventListener('click', function() {
     if(targetEl.classList.contains('hidden')) {
     targetEl.classList.remove('hidden');
     }
     else{
     targetEl.classList.add('hidden');
     }
 })
 // Gtag Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2RK9LW9MGR');

// dilar feature
document.getElementById('dial').addEventListener('click', ()=>{
    if(document.getElementById('dialer').classList.contains('hidden')){
      document.getElementById('dialer').classList.replace('hidden', 'flex');
  }
  else if(document.getElementById('dialer').classList.contains('flex')){
      document.getElementById('dialer').classList.replace('flex', 'hidden');
  }
  });
  // print button
  document.getElementById('printbtn').addEventListener('click', ()=>{
    window.print();
  });
  document.getElementById('sharebtn').addEventListener('click', ()=>{
    if(navigator.share){
      navigator.share({
        title: document.title,
        text: document.title,
        url: window.location.href
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
    else{
      alert('Your browser does not support sharing');
    }
  });