var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_img = "";
var images = "";

function player_update(){
    fabric.image.fromURL("player.png", function(Img){
        player_img = Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_img);
    });
    

}

function new_Image(get_image){
fabric.image.fromURL(get_image, function(Img){
      images = Img;
      images.scaleToWidth(block_width);
      images.scaleToHeight(block_height);
      images.set({
          top: player_y,
          left: player_x
      });
      canvas.add(images);
    });
} 