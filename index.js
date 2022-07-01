
import ProgressBar from "./node_modules/progressbar.js"
var line = new ProgressBar.Line('#container');
animate();
function animate(){
var bar = new ProgressBar.Circle(container, {
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 10,
  from: {color: '#FFEA82', a:0},
  to: {color: '#ED6A5A', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.5);
}// Number from 0.0 to 1.0