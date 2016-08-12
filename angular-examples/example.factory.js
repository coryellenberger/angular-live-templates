/**
 * TODO fill out the description of this factory
 * @module exampleFactory
 */
(function() {
  angular
    .module('exampleModule2')
    .factory('exampleFactory', exampleFactory);

  exampleFactory.$inject = [];

  /**
   * @param {object}  - TODO the description of the dependency
   * @constructs exampleFactory
   */
  function exampleFactory() {
    var service = {
      exampleFunction: exampleFunction
    };
    return service;

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
