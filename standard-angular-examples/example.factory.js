/**
 * exampleFactory
 * @namespace exampleModule.Factories
 */
(function () {
  angular
    .module('exampleModule')
    .factory('exampleFactory', exampleFactory)

  exampleFactory.$inject = ['exampleService']

  /**
   * @namespace exampleFactory
   * @desc description
   * @memberOf exampleModule.Factories
   */
  function exampleFactory (exampleService) {
    var service = {
      exampleFunction: exampleFunction
    }
    return service

    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf exampleModule.Factories.exampleFactory
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
