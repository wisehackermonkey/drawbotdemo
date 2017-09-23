//Oran C
//Oranbusiness@gmail.com
//2017-09-22
//Drawing robot pen posistion calculator (Demo)
//this program show the math used to make a drawbot work
//takes a cartesian (x,y) with lenths of the arms and turns them into 
//angle for the servos to move to.
//this demo does not work for real hardware but has a simulation of the actions using javascript
//
//if you want to see how the math.
//https://imgur.com/5Plv4TS

function calcArmPosistion(x,y,length1,length2,orginX,orginY,direction){
  //var x = x;
  //var y = y;
  var elbowPosX = 0;
  var elbowPosY = 0;
  var sholderLength = length1;
  var forarmLength =  length2;
  
/*  first point
  second point
  
  sholder 
  forarm
  elbo angle ?
  sholder angle  ?
  
  
  givin x2,y2, and forarm & sholder length
  
  derive elbow point x1 ,y1, from (0,0)
  
  
  have angle elbow 
  user elbow angle to derive point
  */
  
  //https://www.mathsisfun.com/algebra/trig-cosine-law.html
  
  if(sqrt( sq(x) + sq(y)) <= (length1 + length2))
  {
    //ALL MATH CREDIT goes to WILL thanks man.
    ///https://imgur.com/5Plv4TS
    var sholderAngle = acos(  (sq(sholderLength) + ( sq(x) + sq(y) ) - sq(forarmLength) )/
                   (2 * sholderLength * sqrt(sq(x) + sq(y)))  ) + atan(y/x);
                   
    
    elbowPosX = cos(sholderAngle ) * sholderLength;
    elbowPosY = sin(sholderAngle ) * sholderLength;
    
    //sholder line
    stroke(0,255,0);
    line(orginX,orginY,elbowPosX,elbowPosY);
    
    //forarm line
    stroke(255,255,0);
    line(elbowPosX,elbowPosY,x,y);
    
    //hypotonus
    stroke(0,255,255);
    line(orginX,orginY, x,y);
    
    
    print(sholderAngle);
    print(elbowPosX, ", " ,elbowPosY);
    
  }else{
    stroke(255,0,0);
    line(orginX,orginY, x,y);
  } 
}

function setup() {
  createCanvas(600,600);
  background(50);
  angleMode(DEGREES);
  
    
}

function draw() {
  background(50);
    var textCredit = "All the hard math credit goes to Will. Thanks.";
  fill(255);
  text(textCredit,  20 ,height - 20);
  calcArmPosistion(mouseX,mouseY,width/2,height/2,0,0,1);

    
}