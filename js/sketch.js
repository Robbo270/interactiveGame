var WidthRect = 70;
var heightRect = 70;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220)
}

function draw() {
    
}

function mousePressed() {

    if(mouseButton == LEFT){
        fill(random(0,255), random(0,255), random(0,255))
    rectMode(CENTER)
    rect(mouseX, mouseY, WidthRect, heightRect);
    }

    if(mouseButton == RIGHT){
        fill(random(0,255), random(0,255), random(0,255))
    ellipseMode(CENTER)
    ellipse(mouseX, mouseY, WidthRect, heightRect);
    }
}

function keyPressed() {
    if(keyCode == ENTER){
    background(0);
    }

    if(keyCode == UP_ARROW){
        fill(random(0,255), random(0,255), random(0,255))
        rectMode(CENTER)
        rect(mouseX, mouseY, widthRect+20, heightRect+40)
    }

    if(keyCode == DOWN_ARROW){
        fill(random(0,255), random(0,255), random(0,255))
        triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+25, mouseY-50)
    }
}