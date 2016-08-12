/**
 * TODO fill out the description of this controller
 * @module example
 */
(function () {
  angular
    .module('exampleModule')
    .filter('example', example)

  /**
   * @constructs example
   */
  function example () {
    /**
     * TODO fill out the description of this public function
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFilter
     */
    return function exampleFilter (exampleParam) {
      var exampleReturn = exampleParam
      return exampleReturn
    }
  }
})()
