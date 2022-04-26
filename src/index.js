import getTime from './get_time.js';
import ('./style.css')
import img from './rocket.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

// Add the image to our existing div.
const rocketImage = new Image();
rocketImage.src = img;

const timePara = document.createElement('p')
timePara.classList.add('time')

timePara.textContent = getTime()

element.appendChild(rocketImage);
element.appendChild(timePara)
 
  return element;
}


function clockButton() {
  const element = document.createElement('button');
  element.classList.add('clock-button');
  element.textContent = '⌛';
  element.onclick = printMe

  return element

}



function updateTime() {
  const p = document.querySelector('p');
  const timeString = getTime();
  p.textContent = timeString;
}


document.body.appendChild(component());
document.body.appendChild(clockButton())

setInterval(() => updateTime(), 1000)

console.log(Data);
console.log(Notes);



