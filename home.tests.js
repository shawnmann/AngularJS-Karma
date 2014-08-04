// To read more about Jasmine testing syntax, see:  http://jasmine.github.io/2.0/introduction.html

// ***** BEG Simple Unit Test *****
// Create a test suite
describe('simple suite', function () {
    // Create a spec (a test)
    // A suite could have a bunch of specs in it
    it('should be true', function () {
        // Create an expectation
        // This one will always be true, thus this test will always pass
        expect(true).toBe(true);
    })
});
// ***** END Simple Unit Test *****

// ***** BEG Simple Function Unit Test *****
describe('hello world', function () {
    it('should return "Hello World"', function () {
        // This time, pass the helloWorld() function (from home.js) into
        // our expectation. This expectation checks to see if the result
        // of running helloWorld() is the string 'Hello World'.
        expect(helloWorld()).toBe('Hello World');
    })
});
// ***** END Simple Function Unit Test *****

// ***** BEG Angular Unit Test *****
describe("MainController", function () {

    var ctrl,
        scope;

    // Load the module that contains MainController
    beforeEach(module('myApp'));

    // Inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('MainController', {
           $scope: scope
        });
    }));

    // Create an expectation (test)
    it('should create $scope.greeting when calling sayHello',
        function () {
            // greeting should initially be undefined
            expect(scope.greeting).toBeUndefined();
            // Call MainController's sayHello() function
            scope.sayHello();
            // Now greeting should equal 'Hello Shawn'
            expect(scope.greeting).toEqual('Hello Shawn');
        }
    );

});
// ***** END Angular Unit Test *****