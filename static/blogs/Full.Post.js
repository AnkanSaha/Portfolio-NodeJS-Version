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