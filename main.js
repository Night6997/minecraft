var canvas = new fabric.Canvas("myCanvas");

x = 10;
y = 10;

block_width = 30;
block_height = 30;

var player_img = "";
var images = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top: y,
            left: x
        });
        canvas.add(player_img);
    });
    

}

function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
      images = Img;
      images.scaleToWidth(block_width);
      images.scaleToHeight(block_height);
      images.set({
          top: y,
          left: x
      });
      canvas.add(images);
    });
} 
window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed =="80")
    {
        console.log("shift and p is pressed");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("span1").innerHTML = block_width;
        document.getElementById("span2").innerHTML = block_height;
    }
    if(e.shiftKey && keyPressed == "77")
    {
        console.log("shift and m is pressed");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("span1").innerHTML = block_width;
        document.getElementById("span2").innerHTML = block_height;
    }

    if(keyPressed == "38")
    {
        up();
        console.log(keyPressed); 

    }

    if(keyPressed == "40")
    {
        down();
        console.log(keyPressed); 

    }

    if(keyPressed == "37")
    {
        left();
        console.log(keyPressed); 

    }

    if(keyPressed == "39")
    {
        right();
        console.log(keyPressed); 

    }

    if(keyPressed == "67")
    {
        new_image('cloud.jpg');
        console.log("C key was pressed");

    }

    if(keyPressed == "76")
    {
        new_image('light_green.png');
        console.log("L key was pressed");

    }
    
    if(keyPressed == "71")
    {
        new_image('ground.png');
        console.log("G key was pressed");

    }

    if(keyPressed == "68")
    {
        new_image('dark_green.png');
        console.log("D key was pressed");

    }

    if(keyPressed == "82")
    {
        new_image('roof.jpg');
        console.log("R key was pressed");

    }

    if(keyPressed == "84")
    {
        new_image('trunk.jpg');
        console.log("T key was pressed");

    }

    if(keyPressed == "85")
    {
        new_image('unique.png');
        console.log("U key was pressed");

    }

    if(keyPressed == "87")
    {
        new_image('wall.jpg');
        console.log("W key was pressed");

    }

    if(keyPressed == "89")
    {
        new_image('yellow_wall.png');
        console.log("Y key was pressed");

    }

}

function up(){

   if(y >=0){
       
       y = y - block_height;
       console.log("Block image height = "+ block_height);
       console.log("When up arrow key is pressed, X = "+ x + " ,Y= " + y);
       canvas.remove(player_img);
       player_update();
     
   }    
   
}

function down(){

    if(y <=500){

       y = y + block_height;
       console.log("Block image height = "+ block_height);
       console.log("When down arrow key is pressed, X = "+ x +" ,Y = "+ y);
       canvas.remove(player_img);
       player_update();

    }

}

function left(){

    if(x >= 0){

        x = x - block_width;
        console.log("Block image width = "+ block_width);
        console.log("When left arrow key is pressed, X = "+ x +" ,Y = "+ y);
        canvas.remove(player_img);
        player_update();

    }

}

function right(){

    if(x <= 850){

        x = x + block_width;
        console.log("Block image width = "+ block_width);
        console.log("When right arrow key is pressed, X = "+ x +" ,Y = "+ y);
        canvas.remove(player_img);
        player_update();
            
    }

}