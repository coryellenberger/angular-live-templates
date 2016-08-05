describe('ExampleController', function () {
  beforeEach(module('exampleModule'))

  var $controller
  var exampleFactory

  beforeEach(inject(function (_$controller_, _exampleFactory_) {
    $controller = _$controller_
    exampleFactory = _exampleFactory_
  }))

  it('should have exampleFunction and return param passed', function () {
    var controller = $controller('ExampleController', {
      exampleFactory: exampleFactory
    })

    expect(controller.exampleFunction).toBeDefined()
    var value = 'TEST'
    expect(controller.exampleFunction(value)).toEqual(value)
  })
})
