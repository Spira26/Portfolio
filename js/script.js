const burger = document.querySelector('.burger')
const Button = document.getElementById('Btn')
const ButtonTwo = document.getElementById('BtnTwo')
const ButtonThree = document.getElementById('BtnThree')
let upButton = document.querySelector('.up-button')


window.onscroll = function () {
    if(window.scrollY > 800){
        upButton.classList.add('shown')
    }else{
        upButton.classList.remove('shown')
    }
}

upButton.onclick = function () {
    window.scrollTo(0, 0);
  };
  
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
Button.addEventListener('click', function () {
    burger.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
ButtonTwo.addEventListener('click', function () {
    burger.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
ButtonThree.addEventListener('click', function () {
    burger.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

let textBox = document.querySelector('.screen'),
    text = textBox.innerText,
    newHTML = '';

for ( let i = 0; i < text.length; i++) {
    newHTML += '<span>' + text[i] + '<span>';
}
textBox.innerHTML = newHTML;

let spans = textBox.querySelectorAll('span'),
    count = 0,
    timeout = 0;
    

function typing_text() {
    spans[count].classList.add('visible');
    if (spans[count].innerText == ' ' || spans[count].innerHTML == ' ') {
        timeout = Math.floor(Math.random() * Math.floor(10));
        spans[count].classList.add('cursor');
    } else {
        timeout = 30;
    }

    if (count < text.length + 100) {
        setTimeout(() => {
            spans[count].classList.remove('cursor');
            count++;
            typing_text();
        }, timeout);
    }
    
}

typing_text();

document.addEventListener('DOMContentLoaded', function () {
 
    let cnt = localStorage.getItem('visitCount');
    if (cnt === null) { cnt = 0; };
    cnt++;
    localStorage.setItem('visitCount', cnt);
    document.getElementById('counter').innerText = cnt;
});