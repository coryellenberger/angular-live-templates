describe('example', function () {
  beforeEach(module('exampleModule'))

  var exampleFilter

  beforeEach(inject(function (_exampleFilter_) {
    exampleFilter = _exampleFilter_
  }))

  it('should have exampleFilter and return param passed', function () {
    expect(exampleFilter).toBeDefined()
    var value = 'TEST'
    expect(exampleFilter(value)).toEqual(value)
  })
})
