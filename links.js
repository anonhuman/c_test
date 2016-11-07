
function Chainlink(x,y){
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = this.w * 6;
  this.col = color(255, 255, 255); 

  
  
  this.display = function(mouseX, mouseY){
    stroke(0, 0, 0, 50);
    fill(255, 255, 0);
  //main c outline
   //long link main
    rect((this.x - this.w * 2.5), (this.y - this.w * 3), this.w, this.h);
   //main quad 1
    quad((this.x - this.w * 2.5), (this.y - this.w * 3), (this.x - this.w * 1.75), (this.y - this.w * 4.75), (this.x - this.w * 1.05), (this.y - this.w * 4.05) , (this.x - this.w * 1.5), (this.y - this.w * 3));
   //main quad 2
    quad((this.x - this.w * 1.75), (this.y - this.w * 4.75), this.x, (this.y - this.w * 5.5), this.x, (this.y - this.w * 4.5),(this.x - this.w * 1.05), (this.y - this.w * 4.05));
   //main quad 3
    quad((this.x + this.w * 2.5), (this.y - this.w * 3), (this.x + this.w * 1.75), (this.y - this.w * 4.75), (this.x + this.w * 1.05), (this.y - this.w * 4.05) , (this.x + this.w * 1.5), (this.y - this.w * 3));
   //main quad 4
    quad((this.x + this.w * 1.75), (this.y - this.w * 4.75), this.x, (this.y - this.w * 5.5), this.x, (this.y - this.w * 4.5),(this.x + this.w * 1.05), (this.y - this.w * 4.05));
   //b main quad 1
    quad((this.x - this.w * 2.5), (this.y + this.w * 3), (this.x - this.w * 1.75), (this.y + this.w * 4.75), (this.x - this.w * 1.05), (this.y + this.w * 4.05) , (this.x - this.w * 1.5), (this.y + this.w * 3));
   //b main quad 2
    quad((this.x - this.w * 1.75), (this.y + this.w * 4.75), this.x, (this.y + this.w * 5.5), this.x, (this.y + this.w * 4.5),(this.x - this.w * 1.05), (this.y + this.w * 4.05));
   //b main quad 3
    quad((this.x + this.w * 2.5), (this.y + this.w * 3), (this.x + this.w * 1.75), (this.y + this.w * 4.75), (this.x + this.w * 1.05), (this.y + this.w * 4.05) , (this.x + this.w * 1.5), (this.y + this.w * 3));
   //b main quad 4
    quad((this.x + this.w * 1.75), (this.y + this.w * 4.75), this.x, (this.y + this.w * 5.5), this.x, (this.y + this.w * 4.5),(this.x + this.w * 1.05), (this.y + this.w * 4.05));
   //b short side main 1
    rect((this.x + this.w * 1.5), (this.y + this.w * 3), this.w, -1*(this.h/3));
   //short side main 1
    rect((this.x + this.w * 1.5), (this.y - this.w * 3), this.w, this.h/3);
    
this.clicked = function(){
    this.col = color(50,50,50, random(200));
  }
    fill(this.col);    
  //long link side
    rect((this.x - this.w * 3) , (this.y - this.w * 3), this.w/2, this.h);
  
  //long link right side
    rect((this.x - this.w * 1.5),(this.y - this.w * 3), this.w/2, this.h);
  
  //left side quad 1
    quad((this.x - this.w * 3) , (this.y - this.w * 3), (this.x - this.w * 2.5), (this.y - this.w * 3), (this.x - this.w * 1.75), (this.y - this.w * 4.75), (this.x - this.w * 2.1), (this.y - this.w * 5.1));
  
  //right side quad 1
    quad((this.x - this.w * 1.5), (this.y - this.w * 3),(this.x - this.w * 1.05), (this.y - this.w * 4.05), (this.x - this.w * .7), (this.y - this.w * 3.7), (this.x - this.w), (this.y - this.w * 3));
  
  //left quad 2
    quad((this.x - this.w * 2.1), (this.y - this.w * 5.1), this.x, (this.y - this.w * 6), this.x, (this.y - this.w * 5.5), (this.x - this.w * 1.75),(this.y - this.w * 4.75));
  
  //right quad 2
    quad((this.x - this.w * 1.05), (this.y - this.w * 4.05), this.x , (this.y - this.w * 4.5), this.x ,(this.y - this.w * 4), (this.x -this.w * .7), (this.y - this.w * 3.7));
  
  //left side quad 3
    quad((this.x + this.w * 3) , (this.y - this.w * 3), (this.x + this.w * 2.5), (this.y - this.w * 3), (this.x + this.w * 1.75), (this.y - this.w * 4.75), (this.x + this.w * 2.1), (this.y - this.w * 5.1));
  
  //right side quad 3
    quad((this.x + this.w * 1.5), (this.y - this.w * 3),(this.x + this.w * 1.05), (this.y - this.w * 4.05), (this.x + this.w * .7), (this.y - this.w * 3.7), (this.x + this.w), (this.y - this.w * 3));
  
  //left quad 4
    quad((this.x + this.w * 2.1), (this.y - this.w * 5.1), this.x, (this.y - this.w * 6), this.x, (this.y - this.w * 5.5), (this.x + this.w * 1.75),(this.y - this.w * 4.75));
  
  //right quad 4
    quad((this.x + this.w * 1.05), (this.y - this.w * 4.05), this.x , (this.y - this.w * 4.5), this.x ,(this.y - this.w * 4), (this.x +this.w * .7), (this.y - this.w * 3.7));
  
  //short side inside
    rect((this.x + this.w), (this.y - this.w * 3) ,this.w/2, this.h/3);
  
  //short side outside
    rect((this.x + this.w * 2.5), (this.y - this.w * 3), this.w/2, this.h/3)
    
  //bottum left side quad 1
    quad((this.x - this.w * 3) , (this.y + this.w * 3), (this.x - this.w * 2.5), (this.y + this.w * 3), (this.x - this.w * 1.75), (this.y + this.w * 4.75), (this.x - this.w * 2.1), (this.y + this.w * 5.1));
  
  //b right side quad 1
    quad((this.x - this.w * 1.5), (this.y + this.w * 3),(this.x - this.w * 1.05), (this.y + this.w * 4.05), (this.x - this.w * .7), (this.y + this.w * 3.7), (this.x - this.w), (this.y + this.w * 3));
  
  //b left quad 2
    quad((this.x - this.w * 2.1), (this.y + this.w * 5.1), this.x, (this.y + this.w * 6), this.x, (this.y + this.w * 5.5), (this.x - this.w * 1.75),(this.y + this.w * 4.75));
  
  //b right quad 2
    quad((this.x - this.w * 1.05), (this.y + this.w * 4.05), this.x , (this.y + this.w * 4.5), this.x ,(this.y + this.w * 4), (this.x - this.w * .7), (this.y + this.w * 3.7));
  
  //b left side quad 3
    quad((this.x + this.w * 3) , (this.y + this.w * 3), (this.x + this.w * 2.5), (this.y + this.w * 3), (this.x + this.w * 1.75), (this.y + this.w * 4.75), (this.x + this.w * 2.1), (this.y + this.w * 5.1));
  
  //b right side quad 3
    quad((this.x + this.w * 1.5), (this.y + this.w * 3),(this.x + this.w * 1.05), (this.y + this.w * 4.05), (this.x + this.w * .7), (this.y + this.w * 3.7), (this.x + this.w), (this.y + this.w * 3));
  
  //b left quad 4
    quad((this.x + this.w * 2.1), (this.y + this.w * 5.1), this.x, (this.y + this.w * 6), this.x, (this.y + this.w * 5.5), (this.x + this.w * 1.75),(this.y + this.w * 4.75));
  
  //b right quad 4
    quad((this.x + this.w * 1.05), (this.y + this.w * 4.05), this.x , (this.y + this.w * 4.5), this.x ,(this.y + this.w * 4), (this.x +this.w * .7), (this.y + this.w * 3.7));
  
  //b short side inside
    rect((this.x + this.w), (this.y + this.w * 3) ,this.w/2, -1*(this.h/3));
    
  //short side outside
    rect((this.x + this.w * 2.5), (this.y + this.w * 3), this.w/2, -1*(this.h/3));
  
  
  
  
}
  
}
    