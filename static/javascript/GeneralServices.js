// Interval Settings
setInterval(DateGenerator(), 100)

// Functions
function DateGenerator() {
    let ctime = document.getElementById("timer");
    let current = new Date();
    let TodayDate = current.getDate();
    let Month = current.getMonth();
    Month = Month+1
    let Year = current.getFullYear();
    let FinalDate = "Today Date is "+" :- "+TodayDate+" - "+Month+" - "+Year
     // Sending Date To HTML Document
    ctime.innerText = FinalDate
    console.log(FinalDate)
}
// Add Resume To Index File option 
document.getElementById('downloadrusume').addEventListener('click', ()=>{
    document.getElementById('downloadrusume').href = '/static/aditional pdf/( CV ) Ankan Saha ( Full Stack Web Developer ) public version.pdf'
})

// Prevant Right Click 
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
})

document.getElementById('navtag').style.backgroundColor = 'green'

setInterval(()=>{
    var ConnectionStatus = window.navigator.onLine
    console.log(ConnectionStatus)

    if(ConnectionStatus == true){
        document.getElementById('navtag').style.backgroundColor = 'green'
    }
    else if(ConnectionStatus == false){
        document.getElementById('navtag').style.backgroundColor = 'red'
    }
}, 10)