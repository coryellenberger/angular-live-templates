describe('ExampleDirective', function () {
  beforeEach(module('exampleModule'))

  var compile
  var scope
  var directiveElem

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    compile = _$compile_
    scope = _$rootScope_.$new()

    directiveElem = getCompiledElement()

    function getCompiledElement () {
      var element = angular.element('<div example-directive></div>')
      var compiledElement = compile(element)(scope)
      scope.$digest()
      return compiledElement
    }
  }))

  it('should have exampleFunction and return param passed', function () {
    var spanElement = directiveElem.find('span')
    expect(spanElement).toBeDefined()
    expect(spanElement.text()).toEqual('exampleDirective')
  })
})
