
call();




function call(){
animate(container1,0.75);
animate(container2,0.8);
animate(container3,0.2);
animate(container4,0.7);
animate(container5,0.65);
animate(container6,0.8);
}

function animate(id,x){
var bar = new ProgressBar.Circle(id, {
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 10000,
  easing: 'bounce',
  strokeWidth: 10,
  from: {color: '#519bfe', a:0},
  to: {color: '#7d61fa', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(x);
}// Number from 0.0 to 1.0