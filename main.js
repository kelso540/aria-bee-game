import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="starterCanvasDiv">
    <canvas id="starterCanvasActual" width="352" height="512"></canvas>
  </div>
  <div id="mainCanvasDiv">
    <canvas id="myCanvasActual" width="352" height="512"></canvas>
  </div>
  <div id="secondaryCanvasDiv">
    <canvas id="secondaryCanvasActual" width="352" height="512"></canvas>
  </div>
  <div id="startButtonDiv">
    <button id="start">Start</button>
  </div>
  <div id="buttonsDiv">
    <button id="up">Up</button>
    <br>
    <button id="left">Left</button><button id="right">Right</button>
    <br>
    <button id="down">Down</button>
  </div>
  <div id="newFlowerDiv">
    <button id="flowerBtn">New Flower</button>
  </div>
  <div id="endButtonDiv">
    <button id="reset">Start Again</button>
  </div>`