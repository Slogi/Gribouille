module.exports = function () {

	return {

		restrict: 'A',
		link:
			function (tool, scope, element) {

			var canvasElement = element.children()[0];
			var ctx = canvasElement.getContext('2d');

			// Are we drawing?
			var drawing = false;

			// the last coordinates before the current move
			var centerX;
			var centerY;

			element.bind('mousedown', function (event) {
				startX = event.offsetX;
				startY = event.offsetY;

				// begins new line
				ctx.beginPath();

				drawing = true;
			});

			element.bind('mousemove', function (event) {
				if (drawing) {

					// get current mouse position
					currentX = event.offsetX;
					currentY = event.offsetY;

					draw(startX, startY, currentX, currentY);

					scope.$apply();
				}

			});

			element.bind('mouseup', function (event) {

				drawing = false;
			});

			function draw(centerX, centerY,
						  currentX, currentY, rotate) {

				var sizeX = 2 * (currentX - centerX);
				var sizeY = 2 * (currentY - centerY);

				ctx.rect(centerX - 0.5 * sizeX,
					centerY - 0.5 * sizeY,
					sizeX, sizeY);
				ctx.lineWidth = 3;
				// color
				ctx.strokeStyle = scope.color;
				// draw it
				ctx.stroke();
			}
		}
	};
};
