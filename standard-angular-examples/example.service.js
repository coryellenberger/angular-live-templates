/**
 * exampleService
 * @namespace Services
 */
(function () {
  angular
    .module('exampleModule')
    .service('exampleService', exampleService)

  exampleService.$inject = ['exampleFactory']

  /**
   * @namespace exampleService
   * @desc description
   * @memberOf Services
   */
  function exampleService (exampleFactory) {
    this.exampleFunction = exampleFunction

    /**
     * @name exampleFunction
     * @desc description
     * @param {String} exampleParam description
     * @returns {String} exampleReturn description
     * @memberOf Services.exampleService
     */
    function exampleFunction (exampleParam) {
      return exampleParam
    }
  }
})()
