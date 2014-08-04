// ***** BEG Generic Function *****
// Generic helloWorld function to demonstrate a non-AngularJS unit test
function helloWorld() {
    // Just return a string
    return 'Hello World';
}
// ***** END Generic Function *****

// ***** BEG Angular Function *****
// AngularJS module/controller to demonstrate unit testing with Angular
angular.module('myApp', [])
    // Create a controller
    .controller('MainController', function ($scope) {
        $scope.name = 'Shawn';
        $scope.sayHello = function () {
            $scope.greeting = 'Hello ' + $scope.name;
        }
    })
// ***** END Angular Function *****