import getTime from './get_time.js';
import timeNow from './get_time.js';
import ('./style.css')
import img from './rocket.png';

function component() {
  const element = document.createElement('div');

// Add the image to our existing div.
const rocketImage = new Image();
rocketImage.src = img;

const timePara = document.createElement('p')
timePara.classList.add('time')

timePara.textContent = timeNow()

element.appendChild(rocketImage);
element.appendChild(timePara)
 
  return element;
}
// element.textContent = timeNow();


function clockButton() {
  const element = document.createElement('button');
  element.classList.add('clock-button');
  element.textContent = '⌛';
  const watch = stopWatch()
  element.addEventListener('click', (e) => watch.start(e, watch))


  return element

}


function stopWatch() {


  let timer;



  function updateTime() {
    let button = document.querySelector('button')
    const seconds = new Date().getSeconds()
    button.textContent = seconds

  }


  function start(e, watch) {
    e.target.removeEventListener('click', this)
    e.target.addEventListener('click', watch.stop(e))
    this.timer = setInterval(() => updateTime(), 1000)

  }

  function stop(e) {
    clearInterval(this.timer)
  }

  return {timer, start, stop}
}

function updateTime() {
  const p = document.querySelector('p');
  const timeString = timeNow();
  p.textContent = timeString;
}


document.body.appendChild(component());
document.body.appendChild(clockButton())

setInterval(() => updateTime(), 1000)



