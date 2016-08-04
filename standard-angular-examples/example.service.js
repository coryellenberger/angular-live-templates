/**
 * exampleService
 * @namespace exampleModule.Services
 */
(function () {
  angular
    .module('exampleModule')
    .service('exampleService', exampleService)

  exampleService.$inject = []

  /**
   * @namespace exampleService
   * @desc description
   * @memberOf exampleModule.Services
   */
  function exampleService () {
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
