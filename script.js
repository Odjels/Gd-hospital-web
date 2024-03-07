let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


// Add a click event listener to the menu button
menu.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});

/* =========EMAIL JS=========== 
const contactForm = document.getElementById('contacting-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactRes = document.getElementById('contact-response')

const sendEmail = (e) =>{
    e.preventDefault()

     //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' ||  contactMessage.value === ''){
        // show message
        contactRes.textContent = 'Write all the input fields'
    }else{
        //serviceID -templateID- #form -publickey
        emailjs.sendForm('service_btunxkk','template_go3orsi','#contact-form','zl2psSVUIeudgwtP8')
            .then(() =>{
                // show message
                contactRes.textContent = 'Message sent'

                //Remove Message after five seconds
                setTimeout(() =>{
                    contactRes.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('OOPS! Something went wrong...', error)
            })
        // to clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail) */

/*
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}*/
