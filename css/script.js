const spans = document.querySelectorAll('#text-container span');
let index = 0;

function fadeIn() {
  if (index < spans.length) {
    spans[index].style.animation = 'fadeInAnimation 2s ease forwards';
    index++;
  }
}

// script.js

function toggleDrawer() {
  var drawer = document.querySelector('.drawer');
  drawer.style.display = (drawer.style.display === 'none' || drawer.style.display === '') ? 'flex' : 'none';
}

setTimeout(fadeIn, 1000);
