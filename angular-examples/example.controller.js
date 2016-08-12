/**
 * TODO fill out the description of this controller
 * @module ExampleController
 */
(function() {
  angular
    .module('exampleModule2')
    .controller('ExampleController', ExampleController);

  ExampleController.$inject = ['exampleService'];

  /**
   * @param {object} exampleService - TODO fill out the description of this dependency
   * @constructs ExampleController
   */
  function ExampleController(exampleService) {
    var vm = this;
    vm.exampleFunction = exampleFunction;
    /**
     * TODO fill out the description of this public function
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFunction
     */
    function exampleFunction(exampleParam) {
      var exampleReturn = exampleParam;
      return exampleReturn;
    }
  }
})();
