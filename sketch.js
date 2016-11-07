var links = [];

function setup() {
  createCanvas(800, 400);
  background(0);
}

function mouseMoved(){
    var l = new Chainlink(mouseX, mouseY);
    links.push(l);
}


function draw() {
 background(150, 150, 150);
 for(var i = 0; i < links.length; i++){
 links[i].display();
 links[i].clicked();

 }
if (links.length > 5){
  links.splice(0,1);
}
  
  
}

  
  
