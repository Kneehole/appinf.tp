describe('GroupRule', function () {

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
  }));

  it('Add Rule', inject(function () {
    var groupRule = new GroupRule();
    
    groupRule.addRule(new Rule());
    groupRule.addRule(new Rule());

    expect(groupRule.getRules().length).toEqual(2);
  }));

  it('Remove Rule', inject(function () {
    var groupRule = new GroupRule();
    var rule = new Rule();
    groupRule.addRule(rule);
    groupRule.addRule(new Rule());

    expect(groupRule.getRules().length).toEqual(2);

    groupRule.removeRule(rule);

    expect(groupRule.getRules().length).toEqual(1);
    expect(groupRule.getRules()[0].id).not.toBe(rule.id);
  }));
});
