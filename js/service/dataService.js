module.exports = function () {

	var self = this;

	self.color = "black";

	self.colors = [

		"purple",
		"magenta",
		"blue",
		"cyan",
		"green",
		"yellow",
		"red",
		"gray",
		"white",
		"black"
	];

	self.tool = {'nom': "pen", 'icon': "fa fa-pencil"};

	self.tools = [
		{'nom': "pen", 'icon': "fa fa-pencil"},
		{'nom': "circle", 'icon': "fa fa-circle-o"},
		{'nom': "rectangle", 'icon': "fa fa-square-o"},
		{'nom': "text", 'icon': "fa fa-font"}
	];

	self.linkPen = function (scope, element) {

		var ctx = element[0].getContext('2d');

		var drawing = false;

		var lastX;
		var lastY;

		element.bind('mousedown', function (event) {

			if (event.offsetX !== undefined) {
				lastX = event.offsetX;
				lastY = event.offsetY;
			} else { // Firefox compatibility
				lastX = event.layerX - event.currentTarget.offsetLeft;
				lastY = event.layerY - event.currentTarget.offsetTop;
			}

			ctx.beginPath();

			drawing = true;
		});

		element.bind('mousemove', function (event) {
			if (drawing) {
				// get current mouse position
				if (event.offsetX !== undefined) {
					currentX = event.offsetX;
					currentY = event.offsetY;
				} else {
					currentX = event.layerX - event.currentTarget.offsetLeft;
					currentY = event.layerY - event.currentTarget.offsetTop;
				}

				draw(lastX, lastY, currentX, currentY);

				lastX = currentX;
				lastY = currentY;
			}
		});
		element.bind('mouseup', function (event) {

			drawing = false;
		});

		function draw(lX, lY, cX, cY) {

			// line from
			ctx.moveTo(lX, lY);
			// to
			ctx.lineTo(cX, cY);
			// color
			ctx.strokeStyle = scope.color;
			// draw it
			ctx.stroke();
		}
	};

	self.linkRectangle = function (tool, scope, element) {

		var ctx = element[0].getContext('2d');

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

self.linkCircle = function (tool, scope, element) {

};

self.linkText = function (tool, scope, element) {

};
