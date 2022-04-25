// import _ from 'lodash'
import myName from './myName';


function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // myName module
  element.textContent = myName('Elbasel')
  // element.textContent = 'Testing Watch!'
  return element;
}


document.body.appendChild(component());


