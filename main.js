canvas = document.getElementById("myCanvas");
ctx= canvas.getContext ("2d");
rover_width= 100;
rover_height = 90;
rover_x = 10;
rover_y =10;
roverimg = "rover.png";
marsimg= "mars.jpg";
function add (){
background_imgTag = new Image ();
background_imgTag.onload = uploadBackground;
background_imgTag.src = marsimg;
rover_imgTag = new Image ();
rover_imgTag.onload = uploadrover;
rover_imgTag.src =roverimg;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
       console.log("up")  ;   
    }
    if(keyPressed == '40'){
        down();
       console.log("down")  ;   
    }
    if(keyPressed == '39'){
        right();
       console.log("right")  ;   
    }
    if(keyPressed == '37'){
        left();
       console.log("left")  ;   
    }
}
function up(e){
    if (rover_y >= 0){
        rover_y = -10;
        console.log("When up arrow pressed,x =" + rover_x + "|y ="  + rover_y);
        uploadBackground();
        
        uploadrover()
    }
}
function down (e){
    if (rover_y<= 500){
        rover_y += 10;
        console.log("When up arrow pressed,x =" + rover_x + "|y ="  + rover_y);
        uploadBackground();
       
        uploadrover();

    }
}
function left(e){
    if (rover_x >=0){
        rover_x -=10
        console.log("When up arrow pressed,x =" + rover_x + "|y ="  + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(e){
    if (rover_x <= 500){
        rover_x += 10
        console.log("When up arrow pressed,x =" + rover_x + "|y ="  + rover_y);
        uploadBackground();
        uploadrover();
    }
}