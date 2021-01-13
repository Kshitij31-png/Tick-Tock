var hr, mn, sc, hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);   
}

function draw() {
  background("black"); 
  
  hr = hour();
  mn = minute();
  sc = second();


  fill("white");
  noStroke();
  textSize(20);
  text(hr + ":" + mn + ":" + sc , 200,300);

  
  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,10,12,0,360);

  push();
  rotate(scAngle); 
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop()


  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()


  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop()


  // stroke(255,0,255);
  //   point(300,400)


    strokeWeight(10);
    noFill();
    
    stroke("red");
    arc(0,0,300,300,0,scAngle);

    stroke("green");
    arc(0,0,280,280,0,mnAngle);

    stroke("blue");
    arc(0,0,260,260,0,hrAngle);

        
    




  drawSprites();
}