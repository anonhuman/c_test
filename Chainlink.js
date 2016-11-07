
function Chainlink(x,y){
  this.x = x;
  this.y = y;
  
  var dimensions = {
    w:75,
    h:450,
    x: 100,
    y: 100,
  }
  
  
  this.display = function(){
    stroke(0);
    fill(255);
    //long link side
    rect((this.x - this.w * .5), this.y, this.w * .5, this.h);
  //long link main
    rect(this.x, this.y, this.w, this.h);
  //long link other side
    rect((this.x + this.w), this.y, this.w * .5, this.h);
  //main quad 1
    quad(this.x, this.y, (this.x + this.w), this.y, (this.x + 6), (this.y - 92) , (this.x + 56), (this.y - 183));
  //main quad 2
    quad()
    
    
   }   