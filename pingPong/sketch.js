var x = 300
var y = 300
var speedX = 3
var speedY = 3
function setup(){
    createCanvas(600,600)
    background(90,82,98)
}


function draw(){
    createCanvas(600,600)
    background(90,82,98)
    ellipse(x,y,50,50)
    x = x+speedX;
    y = y+speedY;

    if (mouseX >= 500){
        speedX = -(Math.ceil(Math.random())* 7)

    }else if(mouseX <= 100){
        speedX = (Math.ceil(Math.random())* 7)

    }else if(mouseY >= 500){
        speedY = -(Math.ceil(Math.random())* 7)

    }else if(mouseY <= 100){
        speedY = (Math.ceil(Math.random())* 7)
    }if(x >600 || y > 600){
       


    }
    };
   

