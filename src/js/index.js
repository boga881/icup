import _ from 'lodash';
import '../style.css';
import printMe from './print.js';
import Icon from '../img/icon.png';
import Data from '../data/data.xml'
import DataJSON from '../data/data.json';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click!';
  btn.onclick = printMe;
  element.appendChild(btn);

  /*const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);*/

  console.log(DataJSON);

  return element;
}

document.body.appendChild(component());