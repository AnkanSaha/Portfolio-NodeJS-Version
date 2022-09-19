// Global Variables 
let maintananceTemplate = `<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Site Maintanance Time</h1>
  <p class="lead">Currently This Website is under daily maintanance, please visit after 2:00 A.M</p>
</div>
</div>`

function maintanance(){
    ctime = new Date();
    hour = ctime.getHours();
    console.log(hour)
    if(hour == 0 || hour > 0 && hour < 2){
        document.getElementById('content').style.display = 'none'
        document.getElementById('maintanancenote').innerHTML = maintananceTemplate
        document.getElementById('maintanancenote').style.display = 'block'
    }
    else{
        document.getElementById('content').style.display = 'block'
        document.getElementById('maintanancenote').style.display = 'none'
    }
}
maintanance()