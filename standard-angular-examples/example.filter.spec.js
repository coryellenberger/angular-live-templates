describe('exampleFilter', function () {
  beforeEach(module('exampleModule'))

  var exampleFilterFilter

  beforeEach(inject(function (_exampleFilterFilter_) {
    exampleFilterFilter = _exampleFilterFilter_
  }))

  it('should have exampleFilterFilter and return param passed', function () {
    expect(exampleFilterFilter).toBeDefined()
    var value = 'TEST'
    expect(exampleFilterFilter(value)).toEqual(value)
  })
})
