window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("header").classList.toggle("hiddenHeader");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "≡";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}
//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.body.scrollIntoView( {
behavior:"smooth"
  });
}

// code found on "https://www.w3schools.com/howto/howto_js_scroll_to_top.asp"
