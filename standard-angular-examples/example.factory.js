/**
 * TODO fill out the description of this controller
 * @module exampleFactory
 */
(function () {
  angular
    .module('exampleModule')
    .factory('exampleFactory', exampleFactory)

  exampleFactory.$inject = []

  /**
   * @param {object}  - TODO fill out the description of this dependency
   * @constructs exampleFactory
   */
  function exampleFactory () {
    /** public members */
    var service = {
      exampleFunction: exampleFunction
    }
    return service

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
