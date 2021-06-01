const html = document.querySelector('html');
const iconButton = document.querySelector('button');
const icon = document.querySelector('i');
const title = document.querySelector('h1');

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor; 
  html.style.color = textColor;
} 

iconButton.addEventListener('click', changeTheme);

function changeTheme() {
    if(icon.classList.contains('ri-moon-line')) {
      update('black', 'white');
      icon.classList.remove('ri-moon-line');
      icon.classList.add('ri-sun-line');
      iconButton.classList.add('darkButton');
    }
    else {
      update('white', 'black');
      icon.classList.remove('ri-sun-line');
      icon.classList.add('ri-moon-line');
      iconButton.classList.remove('darkButton');
    }
  }



