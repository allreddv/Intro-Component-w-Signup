

const nameFirst = document.getElementById('name_first')
const nameLast = document.getElementById('name_last')
const emailAddress = document.getElementById('email_address')
const password = document.getElementById('password')

const errorNameFirst = document.getElementById('error_name_first')
const errorNameLast = document.getElementById('error_name_last')
const errorEmail = document.getElementById('error_email')
const errorPassword = document.getElementById('error_password')

const submit = document.getElementById('form_btn')

// set error msgs to hidden on page load
errorNameFirst.classList.add('hidden')
errorNameLast.classList.add('hidden')
errorEmail.classList.add('hidden')
errorPassword.classList.add('hidden')

// confirm page loads with empty input fields
nameFirst.value = ''
nameLast.value = ''
emailAddress.value = ''
password.value = ''


//check each input, if invalid then remove hidden from error msgs, 
//change text to red, and change border to red
const formValidation = (e) => {
    e.preventDefault()
    if (nameFirst.value == '') {
        errorNameFirst.classList.remove('hidden')
        nameFirst.style.border = '1px solid var(--Red)'
        nameFirst.style.color = 'var(--Red)'
    }  
    
    if (nameLast.value == '') {
        errorNameLast.classList.remove('hidden')
        nameLast.style.border = '1px solid var(--Red)'
        nameLast.style.color = 'var(--Red)'
    }
    
    if (password.value == '') {
        errorPassword.classList.remove('hidden')
        password.style.border = '1px solid var(--Red)'
        password.style.color = 'var(--Red)'
        
    }

    if (!emailAddress.value.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/)) {
        errorEmail.classList.remove('hidden')
        emailAddress.style.border = '1px solid var(--Red)'
        emailAddress.style.color = 'var(--Red)'
    }
    return

}

// run validator function on button click
submit.addEventListener('click', formValidation)


nameFirst.addEventListener('focus', function() {
 this.style.border = '1px solid #DEDEDE' 
 this.style.color = 'var(--Dark-Blue)'
 errorNameFirst.classList.add('hidden')
})

nameLast.addEventListener('focus', function() {
    this.style.border = '1px solid #DEDEDE' 
    this.style.color = 'var(--Dark-Blue)'
    errorNameLast.classList.add('hidden')
   })

   emailAddress.addEventListener('focus', function() {
    this.style.border = '1px solid #DEDEDE' 
    this.style.color = 'var(--Dark-Blue)'
    errorEmail.classList.add('hidden')
   })

   password.addEventListener('focus', function() {
    this.style.border = '1px solid #DEDEDE' 
    this.style.color = 'var(--Dark-Blue)'
    errorPassword.classList.add('hidden')
   })  





   
  