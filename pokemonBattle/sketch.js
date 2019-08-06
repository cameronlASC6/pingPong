var health1 = 400
var health2 = 400
var canvasHeight = 1000
var canvasWidth = 1000
var fillColors = []
var boxHeight = canvasHeight/100
var boxesInRow = 100
var boxesInColumn = 100
var boxWidth= canvasWidth/100
var damage = Math.floor(Math.random()*50)
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
       background("blue")
    }


function draw(){
    fill("green")
    rect(100,700,200,200)
    fill("red")
    rect(700,100,200,200)
    
    fill(0,255,0)
    noStroke()
    rect(600,900,health1,100)
    rect(0,0,health2,100)
}



function keyPressed(){
    if (keyCode == 32){
      if (health1 > 0 && health2 > 0){
    health2 -= damage;
      }}else if
          (keyCode== 13){
            if(health1 > 0 && health2 > 0){
                health1 -= damage;
            }
          }

}   
