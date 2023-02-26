	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    //SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
   //END SLIDESHOE

    const name1 = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submit = document.getElementsByClassName('contact-form');
    const meet = document.getElementsByClassName('meet');

function sendEmail(){
    const ebody=`Name: ${name1.value}
      <br>
       Email : ${email.value}
       <br>
       Message: ${message.value}`;
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "",
  Password : "",
  To : '',
  From : '',
  Subject : "tried to contact from" + email.value,
  Body : ebody
}).then(
message => alert(message)
);
console.log(ebody)
  }

  