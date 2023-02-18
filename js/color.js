// random color generat
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.getElementById('random-color1').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });

  document.getElementById('random-color2').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });

  document.getElementById('random-color3').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });

  document.getElementById('random-color4').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });

  document.getElementById('random-color5').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });

  document.getElementById('random-color6').addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = randomColor();
  });
