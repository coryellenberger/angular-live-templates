/**
 * exampleFactory
 * @namespace Factories
 */
(function () {
  angular
    .module('exampleModule')
    .factory('exampleFactory', exampleFactory)

  exampleFactory.$inject = []

  /**
   * @namespace exampleFactory
   * @desc description
   * @memberOf Factories
   */
  function exampleFactory () {
    var service = {
      exampleFunction: exampleFunction
    }
    return service

    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf Factories.exampleFactory
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
