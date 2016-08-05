/**
 * example
 * @namespace Filters
 */
(function () {
  angular
    .module('exampleModule')
    .filter('example', example)

  /**
   * @namespace example
   * @memberOf Filters
   */
  function example () {
    return exampleFilter

    /**
     * @name exampleFilter
     * @desc description
     * @param {String} exampleparam description
     * @returns {String} exampleReturn description
     * @memberOf Filters.example
     */
    function exampleFilter (exampleparam) {
      return exampleparam
    }
  }
})()
