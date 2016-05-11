module.exports = function () {

	return {

		restrict: 'A',
		link: function ($scope, element, dataService) {

			$scope.tool = dataService.tool;

			$scope.$watch('tool', function (newValue, oldValue) {
				console.log('allooo');
				switch (newValue) {

					case "pen" :
						while (newValue == "pen") {
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

							/*function reset(){
							 element[0].width = element[0].width;
							 }*/

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
						}
					case
					"circle"
					:
						console.log(newValue);

					case
					"rectangle"
					:
						console.log(newValue);

					case
					"text"
					:
						console.log(newValue);
				}
			});
		}
	};
};

/*
 function selectedLink(scope, element) {

 switch (dataService.tool.nom) {
 case "pen" :

 while (dataService.tool.nom == "pen") {
 console.log(dataService.tool.nom);
 scope.link = linkPen(scope, element);
 }

 break;

 case "rectangle" :
 console.log(dataService.tool.nom);
 scope.link = linkRectangle(scope, element);
 break;

 case "circle" :
 console.log(dataService.tool.nom);
 scope.link = linkCircle(scope, element);
 break;

 case "text" :
 console.log(dataService.tool.nom);
 scope.link = linkText(scope, element);
 break;
 default :
 console.log(dataService.tool.nom);
 scope.link = linkPen(scope, element);
 break;
 }
 }
 */