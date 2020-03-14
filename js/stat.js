'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BOTTOM_LINE = 200;
var MAX_HEIGHT = 100;

var FONT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var renderText = function (ctx, mainText, x, y, color) {
  ctx.font = FONT;
  ctx.fillStyle = color;
  ctx.fillText(mainText, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  renderText(ctx, 'Ура вы победили!', 120, 40, 'black');
  renderText(ctx, 'Список результатов:', 120, 60, 'black');

  var maxTime = getMaxElement(times);

  for (var i = 0; i <= names.length; i++) {
    if (typeof names[i] !== 'undefined') {
      var lineMove = (MAX_HEIGHT * times[i]) / maxTime;
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var saturation = Math.random() * (100 - 0) + 0;
        ctx.fillStyle = 'hsl(240, ' + saturation + '%, 50%)';
      }
      ctx.fillRect(130 + i * 90, BOTTOM_LINE - lineMove, GAP * 4, GAP * 5 + lineMove);
      renderText(ctx, Math.round(times[i]), 130 + i * 90, BOTTOM_LINE - lineMove - 15, 'black');
      renderText(ctx, names[i], 130 + i * 90, 270, 'black');
    }
  }
};
