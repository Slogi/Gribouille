(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("app", []);
angular.module("app").service("dataService", [require("./service/dataService")]);
angular.module("app").directive("drawing", [require("./directive/drawing")]);
angular.module("app").directive("picker", [require("./directive/picker")]);

},{"./directive/drawing":2,"./directive/picker":3,"./service/dataService":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports = function () {

	return {

		restrict: 'E',
		translude: 'false',
		controller : function($scope ,dataService){

			$scope.color = dataService.color;
			$scope.colors = dataService.colors;
			$scope.tool = dataService.tools;
			$scope.tools = dataService.tools;
			$scope.setColor = function (color) {
				
				$scope.color = color;
			};
			$scope.setTools = function (tool) {

				$scope.tool = tool;
			}
		},
		templateUrl: 'js/template/colorPicker.html'
	};

};
},{}],4:[function(require,module,exports){
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

	self.tool = {  'nom': "pen", 		'icon': "fa fa-pencil" 		};

	self.tools = [
		{ 'nom': "pen", 		'icon': "fa fa-pencil" 		},
		{ 'nom': "circle", 		'icon': "fa fa-circle-o" 	},
		{ 'nom': "rectangle", 	'icon': "fa fa-square-o" 	},
		{ 'nom': "text", 		'icon': "fa fa-font" 		}
	];

	self.linkPen = function(scope, element) {

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
	};

	self.linkRectangle = function (tool, scope, element){

	};

	self.linkCircle = function (tool, scope, element){

	};

	self.linkText = function (tool, scope, element){

	};
};
},{}]},{},[1]);
