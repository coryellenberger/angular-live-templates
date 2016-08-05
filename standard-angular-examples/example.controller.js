/**
 * ExampleController
 * @namespace Controllers
 */
(function () {
  angular
    .module('exampleModule')
    .controller('ExampleController', ExampleController)

  ExampleController.$inject = ['exampleFactory']

  /**
   * @namespace ExampleController
   * @desc ViewModel for example.view.html
   * @memberOf Controllers
   */
  function ExampleController (exampleFactory) {
    var vm = this
    vm.title = 'ExampleController'
    vm.exampleFunction = exampleFunction
    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {String} exampleReturn description
     * @memberOf Controllers.ExampleController
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
