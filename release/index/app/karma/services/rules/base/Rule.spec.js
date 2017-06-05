describe('Rule', function () {

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
  //  Rule = $injector.get('Rule');
  }));

  it('Rule must have unique id', inject(function () {
    expect(Rule).toBeDefined();
    var rule = new Rule();
    var rule2 = new Rule();
    expect(rule).toBeDefined();
    expect(rule2).toBeDefined();
    expect(rule.id).not.toBe(rule2.id);
  }));
});
