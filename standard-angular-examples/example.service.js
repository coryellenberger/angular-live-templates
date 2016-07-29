/**
 * exampleService
 * @namespace exampleModule.Services
 */
(function () {
  angular
    .module('exampleModule')
    .factory('exampleService', exampleService)

  exampleService.$inject = ['exampleFactory']

  /**
   * @namespace exampleService
   * @desc description
   * @memberOf exampleModule.Services
   */
  function exampleService (exampleFactory) {
    this.exampleFunction = exampleFunction

    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf exampleModule.Services.exampleService
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
