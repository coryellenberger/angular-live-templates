/**
 * TODO fill out the description of this controller
 * @module exampleDirective
 */
(function () {
  angular
    .module('exampleModule')
    .directive('exampleDirective', exampleDirective)

  exampleDirective.$inject = ['exampleService']

  /**
   * @param {object} exampleService - TODO fill out the description of this dependency
   * @constructs exampleDirective
   */
  function exampleDirective (exampleService) {
    var directive = {
      template: '<span>exampleDirective</span>',
      bindToController: true,
      controller: ExampleDirectiveController,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {}
    }
    return directive

    function link (scope, element, attrs) {
      return 'TEST'
    }
  }

  ExampleDirectiveController.$inject = ['exampleFactory']

  /**
   * @param {object} exampleService - TODO fill out the description of this dependency
   * @constructs ExampleDirectiveController
   */
  function ExampleDirectiveController (exampleService) {
    var vm = this
    vm.exampleFunction = exampleFunction

    /**
     * TODO fill out the description of this public function
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFunction
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
