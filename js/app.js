angular.module("app", []);
angular.module("app").service("dataService", [require("./service/dataService")]);
angular.module("app").directive("drawing", [require("./directive/drawing")]);
angular.module("app").directive("picker", [require("./directive/picker")]);
