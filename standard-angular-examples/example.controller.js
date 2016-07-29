/**
 * ExampleController
 * @namespace exampleModule.Controllers
 */
(function () {
  angular
    .module('exampleModule')
    .controller('ExampleController', ExampleController)

  ExampleController.$inject = ['exampleService']

  /**
   * @namespace ExampleController
   * @desc ViewModel for example.view.html
   * @memberOf exampleModule.Controllers
   */
  function ExampleController (exampleService) {
    var vm = this
    vm.title = 'ExampleController'
    vm.exampleFunction = exampleFunction
    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf exampleModule.Controllers.ExampleController
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
