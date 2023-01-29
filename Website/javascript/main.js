//Imports

import { variables } from "./variables.js";
import { functions } from "./functions.js";

//Start javascript on load

window.onload = function() {

    //Starts load functions
    functions.StartUp();

    //Switch pages
    document.getElementById('home-button').addEventListener('click', () => {
        functions.SwitchPage("home");
    });

    document.getElementById('info-button').addEventListener('click', () => {
        functions.SwitchPage("info");
    });

    document.getElementById('history-button').addEventListener('click', () => {
        functions.SwitchPage("history");
    });

    document.getElementById('highlights-button').addEventListener('click', () => {
        functions.SwitchPage("highlights");
    });

    document.getElementById('game-button').addEventListener('click', () => {
        functions.SwitchPage("game");
    });

    document.getElementById('tickets').addEventListener('click', () => {
        window.location.replace("https://www.nationaalvideogamemuseum.nl/tickets");
    })

    

    //Change language to english
    document.getElementById('english-button').addEventListener('click', () => {
        functions.ChangeLanguage('english');
    });

    //Change language to dutch
    document.getElementById('dutch-button').addEventListener('click', () => {
        functions.ChangeLanguage('dutch');
    });

    //Change theme
    document.getElementById('toggle-theme').addEventListener('click', () => {
        functions.ChangeTheme();
    });

    //Animate top bar border (proud of this one :pepeblush: )
    document.addEventListener('mousemove', e => {
        let x = e.clientX - window.innerWidth
        let y = e.clientY - window.innerHeight;
        y = y *= -1;
        let stylex = x + window.innerWidth / 2;
        document.getElementById('topbarborder').style.left = stylex +"px";
        document.getElementById('topbarborder').style.opacity = 0 + y / 500;
    });

    function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

    function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

    checkSession();

    function checkSession(){
    var c = getCookie("visited");
    if (c === "yes") {
        console.log('already visited')
    } else {
        functions.FirstTheme();
    }
    setCookie("visited", "yes", null);
    }

    if (window.location.href.includes("game.html")) {
        console.log('yes');
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var ballRadius = 10;
        var x = canvas.width/2;
        var y = canvas.height-30;
        var dx = 2;
        var dy = -2;
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width-paddleWidth)/2;
        var rightPressed = false;
        var leftPressed = false;
        var brickRowCount = 5;
        var brickColumnCount = 3;
        var brickWidth = 75;
        var brickHeight = 20;
        var brickPadding = 10;
        var brickOffsetTop = 30;
        var brickOffsetLeft = 30;
        var score = 0;
        var lives = 3;

        var bricks = [];
        for(var c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
        }

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        function keyDownHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = true;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = false;
            }
        }

        function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
        }
        function collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount) {
                    alert("YOU WIN, CONGRATS!");
                    document.location.reload();
                }
                }
            }
            }
        }
        }

        function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = '#fb95ff';
        ctx.fill();
        ctx.closePath();
        }
        function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = '#fb95ff';
        ctx.fill();
        ctx.closePath();
        }
        function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#fb95ff';
                ctx.fill();
                ctx.closePath();
            }
            }
        }
        }
        function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = '#fb95ff';
        ctx.fillText("Score: "+score, 8, 20);
        }
        function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = '#fb95ff';
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
        }

        function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            }
            else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width-paddleWidth)/2;
            }
            }
        }

        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
        }

        draw();
    }

}
if (window.location.href.includes("home.html") || window.location.href.includes("highlights.html")) {
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    loop: true,
    
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    });
}

//Intervals
setInterval(functions.Interval,10);