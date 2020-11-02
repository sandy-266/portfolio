
var app=document.getElementById('typewriter');
var typewriter=new Typewriter(app, {
  strings: ['I am a Web Developer', 'I am a Content Writer'],
  autoStart: true,
  loop: true
});


var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 635;
  document.documentElement.scrollTop = 635;
}

var button = document.getElementById("submit");
button.addEventListener("click", submit);
function submit(e) {
 e.preventDefault();
 var name= document.getElementById("name").value;
 var email= document.getElementById("email").value;
 var mobile= document.getElementById("mobile").value;
 var reason= document.getElementById("reason").value;
 if(name.length!=0 && email.length!=0 && mobile.length!=0 && reason.length!=0)
 {
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Mobile", mobile);
      localStorage.setItem("Reason", reason);
      document.getElementById("name").value = " ";
      document.getElementById("email").value = " ";
      document.getElementById("mobile").value = " ";
      document.getElementById("reason").value = " ";
 }
 else{
   alert("Provide All The Details");
 }
}