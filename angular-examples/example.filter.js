/**
 * TODO fill out the description of this filter
 * @module example
 */
(function() {
  angular
    .module('exampleModule2')
    .filter('example', example);

  /**
   * @constructs example
   */
  function example() {
    return exampleFilter;

    /**
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFilter
     */
    function exampleFilter(exampleParam) {
      var exampleReturn = exampleParam;
      return exampleReturn;
    }
  }
})();
