// Global variables 

// Audio variables 
let unlocksound = new Audio('/static/audio/unlocked(projectFile).mp3');
// Access Key Array 
let Keys = ["458756328", "457845124", "784515364", "784512365", "789562354", "451235647","784535267", "986532154", "999944441", "244466666", "784697164", "253689459", "736745982"]

// Manual Signin Methods 
document.getElementById('Loginbtn').addEventListener('click', ()=>{
    let tempuserkey = document.getElementById('AccessCode').value
    if(tempuserkey.length > 0 && tempuserkey.length < 10){
        Keys.forEach((e)=>{
            if(tempuserkey == e){
                alert("User Authenticated");
                let tempbuttons = document.getElementById("signins")
                let projectWindow = document.getElementById("projects")
                tempbuttons.style.display = "none"
                projectWindow.style.display = "block"
                unlocksound.play()
                console.log(tempbuttons)
                localStorage.setItem('Access Code', e)
            }
        })
    }
    else if(tempuserkey.length > 9){
        alert("Access Key is So Big, please Enter valid 9 digit key")
    }
    else{
        alert("Please Enter valid 9 Digit Access key")
    }
})

// Auto Signin Method 
document.getElementById('AutoLogins').addEventListener('click', ()=>{
    let tempsavedkey = localStorage.getItem("Access Code");
    console.log(tempsavedkey)
    if(tempsavedkey == null){
        alert("You Don't Have any Saved Access Key, Please Enter Valid Access key");
    }
    else if(tempsavedkey == ""){
        alert("You Don't Have any Saved Access Key, Please Enter Valid Access key");
    }
    else if(tempsavedkey != null){
        if(tempsavedkey.length > 0 && tempsavedkey.length < 10){
            Keys.forEach((e)=>{
                if(tempsavedkey == e){
                    alert("User Authenticated");
                    let tempbuttons = document.getElementById("signins")
                    console.log(tempbuttons)
                    localStorage.setItem('Access Code', e)
                    tempbuttons.style.display = "none"
                    let projectWindow = document.getElementById("projects")
                    projectWindow.style.display = "block"
                    unlocksound.play()
                }
            })
        }
        else if(tempsavedkey.length > 9){
            alert("Access Key is So Big, please Enter valid 9 digit key")
        }
        else{
            alert("Please Enter valid 9 Digit Access key")
        }
    }
    else if(tempsavedkey != ""){
        if(tempsavedkey.length > 0 && tempsavedkey.length < 10){
            Keys.forEach((e)=>{
                if(tempsavedkey == e){
                    alert("User Authenticated");
                    let tempbuttons = document.getElementById("signins")
                    console.log(tempbuttons)
                    localStorage.setItem('Access Code', e)
                    tempbuttons.style.display = "none"
                    let projectWindow = document.getElementById("projects")
                    projectWindow.style.display = "block"
                    unlocksound.play()
                }
            })
        }
        else if(tempsavedkey.length > 9){
            alert("Access Key is So Big, please Enter valid 9 digit key")
        }
        else{
            alert("Please Enter valid 9 Digit Access key")
        }
    }
})



// Prevant Right Click 
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
})
