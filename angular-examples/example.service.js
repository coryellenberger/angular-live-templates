/**
 * TODO fill out the description of this service
 * @module exampleService
 */
(function() {
  angular
    .module('exampleModule2')
    .service('exampleService', exampleService);

  exampleService.$inject = [];

  /**
   * @param {object}  - TODO the description of the dependency
   * @constructs exampleService
   */
  function exampleService() {
    this.exampleFunction = exampleFunction;

    /**
     * TODO fill out the description of this public function
     * @param {object} exampleParam - TODO fill out the description of the input param
     * @returns {object} exampleReturn - TODO fill out the description of this return param
     * @method exampleFunction
     */
    function exampleFunction(exampleParam) {
      var exampleReturn = exampleParam;
      return exampleReturn;
    }
  }
})();
