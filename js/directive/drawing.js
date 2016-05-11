module.exports = function () {

	return {

		restrict: 'A',
		link: function (scope, element, dataService) {
			return dataService.linkPen(scope, element);
		}
	};
};
