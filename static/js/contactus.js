document.getElementById('sendbtn').addEventListener('click', ()=>{
    document.getElementById('sendbtn').value ='Sending ....'
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    var readytoSend = {
        name:name,
        email:email,
        message:message
    }
    // Parameters for sending data
    let parameters={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(readytoSend)
    }
    if(name=='' || email=='' || message=='' || name.length <= 1 || message.length <= 1 || email.length <= 1){
        alert('Please Fill all Fields correctly ..');
    }
    else{
         fetch('/contactus', parameters).then(response=>{
             response.json().then(data=>{
                 alert(data.status)
                 document.getElementById('sendbtn').value ='Send Securely'
                 document.getElementById('name').value =''
                 document.getElementById('message').value =''
                 document.getElementById('email').value =''
             })
         }).catch((error)=>{
             alert("Currently Server not acceping request, Try again later ...")
        })
    }
})
// Disable Right Click
document.addEventListener('contextmenu', (event)=>{event.preventDefault();})