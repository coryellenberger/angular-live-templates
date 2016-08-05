/**
 * exampleDirective
 * @namespace Directives
 */
(function () {
  angular
    .module('exampleModule')
    .directive('exampleDirective', exampleDirective)

  exampleDirective.$inject = []

  /**
   * @namespace exampleDirective
   * @desc description
   * @memberOf Directives
   */
  function exampleDirective () {
    var directive = {
      template: '<span>exampleDirective</span>',
      bindToController: true,
      controller: exampleDirectiveController,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {}
    }
    return directive

    function link (scope, element, attrs) {
      return scope
    }
  }

  exampleDirectiveController.$inject = []

  /**
   * @namespace exampleDirectiveController
   * @desc description
   * @memberOf Directives.exampleDirective
   */
  function exampleDirectiveController () {
    var vm = this
    vm.exampleFunction = exampleFunction
    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {String} exampleReturn description
     * @memberOf Directives.exampleDirective.exampleDirectiveController
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
