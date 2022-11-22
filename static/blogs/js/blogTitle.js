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
