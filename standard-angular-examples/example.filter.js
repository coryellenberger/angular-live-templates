/**
 * exampleFilter
 * @namespace Filters
 */
(function () {
  angular
    .module('exampleModule')
    .filter('exampleFilter', exampleFilter)

  /**
   * @namespace exampleFilter
   * @desc description
   * @param {String} input description
   * @returns {String} input description
   * @memberOf Filters
   */
  function exampleFilter () {
    return function (input) {
      return input
    }
  }
})()
