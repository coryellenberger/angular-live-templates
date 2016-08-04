describe('ExampleController', function () {
  beforeEach(module('exampleModule'))

  var $controller
  var exampleService

  beforeEach(inject(function (_$controller_, _exampleService_) {
    $controller = _$controller_
    exampleService = _exampleService_
  }))

  it('should have exampleFunction and return param passed', function () {
    var controller = $controller('ExampleController', {
      exampleService: exampleService
    })

    expect(controller.title).toEqual('ExampleController')
    expect(controller.exampleFunction).toBeDefined()
    var value = 'TEST'
    expect(controller.exampleFunction(value)).toEqual(value)
  })
})
