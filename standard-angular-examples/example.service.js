/**
 * TODO fill out the description of this controller
 * @module exampleService
 */
(function () {
  angular
    .module('exampleModule')
    .service('exampleService', exampleService)

  exampleService.$inject = ['exampleFactory']

  /**
   * @param {object} exampleFactory - TODO fill out the description of this dependency
   * @constructs exampleService
   */
  function exampleService (exampleFactory) {
    this.exampleFunction = exampleFunction

    /**
     * TODO fill out the description of this public function
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFunction
     */
    function exampleFunction (exampleParam) {
      var exampleReturn = exampleParam
      return exampleReturn
    }
  }
})()
