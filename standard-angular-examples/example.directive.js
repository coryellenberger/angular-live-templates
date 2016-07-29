/**
 * exampleDirective
 * @namespace exampleModule.Directives
 */
(function () {
  angular
    .module('exampleModule')
    .directive('exampleDirective', exampleDirective)

  exampleDirective.$inject = ['exampleFactory']

  /**
   * @namespace exampleDirective
   * @desc description
   * @memberOf exampleModule.Directives
   */
  function exampleDirective (exampleFactory) {
    var directive = {
      bindToController: true,
      controller: DirectiveController,
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

  DirectiveController.$inject = ['exampleFactory']

  /**
   * @namespace DirectiveController
   * @desc description
   * @memberOf exampleModule.Directives.exampleDirective
   */
  function DirectiveController (exampleFactory) {
    var vm = this
    vm.exampleFunction = exampleFunction
    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf exampleModule.Directives.exampleDirective.DirectiveController
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
