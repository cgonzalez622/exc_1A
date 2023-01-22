let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("assignment_exp/image/100px_grid.png");
    
}
function draw() {
    background(grid);
}