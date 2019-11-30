

/*--------------------------header--------------------------------------*/



$(function () {
  $("#nav-open").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#nav-content").removeClass("open").fadeOut(100);
    } else {
      $(this).addClass("active");
      $("#nav-content").fadeIn(100).addClass("open");
    }
  });
});



/*--------------------------header-wave0-------------------------------------*/



$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave0");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 170;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 50);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#fff';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});



/*--------------------------wave1-------------------------------------*/



$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave1");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#f1a725';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});

/*--------------------------wave2-------------------------------------*/



$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave2");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#f56d00';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});


/*--------------------------wave3-------------------------------------*/




$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave3");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#9f4806';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});



/*--------------------------wave4-------------------------------------*/



$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave4");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#6a4728';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});



/*--------------------------wave5-------------------------------------*/




$(function () {

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {

    canvas = document.getElementById("wave5");

    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 200;

    context = canvas.getContext("2d");

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw() {

    // キャンバスの描画をクリア
    context.clearRect(0, 0, width, height);

    //波を描画
    drawWave('#10c2cd', 1, 3, 0);

    // Update the time and draw again
    draw.seconds = draw.seconds + .009;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = '#6a5249';
    context.globalAlpha = alpha;

    context.beginPath(); //パスの開始
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height); //パスをCanvasの右下へ
    context.lineTo(0, height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(t, zoom, delay) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
});
