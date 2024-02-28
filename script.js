let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


// Add a click event listener to the menu button
menu.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});

/*
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}*/
