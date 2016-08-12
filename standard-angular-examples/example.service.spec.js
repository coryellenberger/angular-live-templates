describe('exampleService', function () {
  beforeEach(module('exampleModule'))

  var exampleService

  beforeEach(inject(function (_exampleService_) {
    exampleService = _exampleService_
  }))

  it('should have exampleFunction and return param passed', function () {
    expect(exampleService.exampleFunction).toBeDefined()
    var value = 'TEST'
    expect(exampleService.exampleFunction(value)).toEqual(value)
  })
})
