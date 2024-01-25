document.getElementById('sendbtn').addEventListener('click', () => {
  document.getElementById('sendbtn').value = 'Sending ....'
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const readytoSend = {
    name,
    email,
    message
  }
  console.log(readytoSend)
  // Parameters for sending data
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(readytoSend)
  }
  if (
    name == '' ||
    email == '' ||
    message == '' ||
    name.length <= 1 ||
    message.length <= 1 ||
    email.length <= 1
  ) {
    alert('Please Fill all Fields correctly ..')
  } else {
    fetch('/contactus', parameters)
      .then((response) => {
        response.json().then((data) => {
          alert(data.status)
          document.getElementById('sendbtn').value = 'Send Securely'
          document.getElementById('name').value = ''
          document.getElementById('message').value = ''
          document.getElementById('email').value = ''
        })
      })
      .catch((error) => {
        alert('Currently Server not acceping request, Try again later ...')
      })
  }
})
// Disable Right Click
document.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})
