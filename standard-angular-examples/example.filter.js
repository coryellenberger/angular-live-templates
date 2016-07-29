/**
 * exampleFilter
 * @namespace exampleModule.Filters
 */
(function () {
  angular
    .module('exampleModule')
    .filter('exampleFilter', exampleFilter)

  /**
   * @namespace exampleFilter
   * @memberOf exampleModule.Filters
   */
  function exampleFilter () {
    return exampleFilterFilter

    /**
     * @name exampleFilterFilter
     * @desc description
     * @param {String} exampleParam description
     * @returns {Array[object]} exampleReturn description
     * @memberOf exampleModule.Filters.exampleFilter
     */
    function exampleFilterFilter (exampleParam) {
      return exampleParam
    }
  }
})()
