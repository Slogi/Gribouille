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