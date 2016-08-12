describe('ExampleFactory', function() {
  beforeEach(module('exampleModule2'));

  var exampleFactory;

  beforeEach(inject(function(_exampleFactory_) {
    exampleFactory = _exampleFactory_;
  }));

  it('should have exampleFunction and return param passed', function() {
    expect(exampleFactory.exampleFunction).toBeDefined();
    var value = 'TEST';
    expect(exampleFactory.exampleFunction(value)).toEqual(value);
  });
});
