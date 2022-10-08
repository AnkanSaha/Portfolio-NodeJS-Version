document.getElementById('sendbtn').addEventListener('click', ()=>{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    var readytoSend = {
        name:name,
        email:email,
        message:message
    }
    console.log(readytoSend);
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
                console.log(data)
                alert(data.status)
            })
        })
    }
})