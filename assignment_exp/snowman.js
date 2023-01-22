let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color name in lower case", "purple");
function setup() {
    createCanvas(1000, 800);
    background("#ffffff");
    grid = loadImage("images/snow.png");
    
}
function draw() {
    background(grid);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    // bottom body
    ellipse(500, 475, 350, 350);
    // body
    ellipse(500, 425, 240, 425);
    // head
    ellipse(500, 250, 200);
    // hat body
    triangle(470, 150, 375, 125, 400, 200);
    triangle(530, 150, 625, 125, 600, 200);
    // eyes
    stroke(stroke2);
    strokeWeight(30);
    point(460, 230);
    point(540, 230);
    // nose
    stroke(0);
    strokeWeight(10);
    triangle(500, 275, 510, 260, 490, 260);
    // mouth
    noFill();
    strokeWeight(10);
    arc(479, 275, 500, 50, .5, HALF_PI);
    line(500, 275, 500, 300);
    // tail
    strokeWeight(20);
    line(150, 400, 325, 500);
    line(225, 400, 250, 450);
    // coloring
    if (mouseIsPressed) {
        noStroke();
        fill(0, 126, 255);
    }   
    else {
        noFill();
        noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
    
    
    

}