const DefaultKey = '7063355213'

// The Fundamentals of Digital Marketing Certificate
document.getElementById('certificatedownload1').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id1 = 'certificatedownload1'
  successfilepath = "/static/CertificatePDFcopy/Google-Fundamentals-of-Digital-Marketing-certificate.pdf"
  failurepath = '/'
  authenticator(tempkey, DefaultKey, id1, successfilepath, failurepath)
})

// Google IT Support Proffesional Certificate Course
document.getElementById('certificatedownload2').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload2'
  successfilepath = '/static/CertificatePDFcopy/Google IT Support Proffesional Certificate.pdf'
  failurepath = '/'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// Diploma in Information Technology Certificate
document.getElementById('certificatedownload3').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload3'
  successfilepath = '/static/CertificatePDFcopy/Diploma in Information technology certificate.pdf'
  failurepath = '/'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// Building Web Application with django Certificate Course
document.getElementById('certificatedownload4').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload4'
  successfilepath = '/static/CertificatePDFcopy/Coursera (University of Michigan)Building Web Application with django.pdf'
  failurepath = '/'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// HTML, CSS & Javascript For Web Developers Certificate
document.getElementById('certificatedownload5').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload5'
  successfilepath = '/static/CertificatePDFcopy/Coursera(John Hopkins University) 6XRTEFZMY9M8.pdf'
  failurepath = '/'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})







// Default Function
function authenticator(userKey, systemkey, docid, sfilepath, fpath){
  if(userKey ==''){
    alert("405: You Can't Send it Blank")
  }
  else if(userKey !=''){
    if (userKey != DefaultKey) {
      alert("402: You Entered a worng Key ! Please Try Again");
      document.getElementById(docid).href = fpath
    }
    else if (userKey == systemkey) {
      document.getElementById(docid).href = sfilepath
    }
  }
}


// Prevant Right Click 
document.addEventListener('contextmenu', (e)=>{
  e.preventDefault()
})