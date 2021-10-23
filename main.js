var canvas = new fabric.Canvas("myCanvas");
ball_x = 10;
ball_y = 10;

hole_x = Math.floor(Math.random() * 1150);
hole_y = Math.floor(Math.random() * 750);
remainderX = (hole_x % 10);
remainderY = (hole_y % 10);
hole_x = hole_x - remainderX;
hole_y = hole_y - remainderY;
console.log("x: " + hole_x + ", y: " + hole_y);

numberOfClicks = 0;
var ballObject = "";
var holeObject = "";
block_image_width = 10;
block_image_height = 10;

function load_img() {
	fabric.Image.fromURL("ball.png", function (ballImg) {
		ballObject = ballImg;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ballObject);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("golf-h.png", function (holeImg) {
		holeObject = holeImg;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(holeObject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == hole_x) && (ball_y == hole_y)) {
		canvas.remove(ballObject);
		document.getElementById("h3").innerHTML = "You Won! Score: " + numberOfClicks;
		document.getElementById("myCanvas").style.borderColor = "red";
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y > 5) {
			ball_y = ball_y - block_image_height;
			console.log("Ball is at x: " + ball_x + ", y: " + ball_y);
			numberOfClicks = numberOfClicks + 1;
			canvas.remove(ballObject);
			load_img();

		}
	}

	function down() {
		if (ball_y < 795) {
			ball_y = ball_y + block_image_height;
			console.log("Ball is at x: " + ball_x + ", y: " + ball_y);
			numberOfClicks = numberOfClicks + 1;
			canvas.remove(ballObject);
			load_img();

		}
	}

	function left() {
		if (ball_x > 5) {
			ball_x = ball_x - block_image_height;
			console.log("Ball is at x: " + ball_x + ", y: " + ball_y);
			numberOfClicks = numberOfClicks + 1;
			canvas.remove(ballObject);
			load_img();

		}
	}

	function right() {
		if (ball_x <= 1195) {
			ball_x = ball_x + block_image_width;
			console.log("Ball is at x: " + ball_x + ", y: " + ball_y);
			numberOfClicks = numberOfClicks + 1;
			canvas.remove(ballObject);
			load_img();
		}
	}

}