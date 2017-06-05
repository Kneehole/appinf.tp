describe('GroupRule', function () {

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
  }));

  it('Add Rule', inject(function () {
    var groupRule = new GroupRule();
    
    groupRule.addChild(new Rule());
    groupRule.addChild(new Rule());

    expect(groupRule.getChildren().length).toEqual(2);
  }));

  it('Remove Rule', inject(function () {
    var groupRule = new GroupRule();
    var rule = new Rule();
    groupRule.addChild(rule);
    groupRule.addChild(new Rule());

    expect(groupRule.getChildren().length).toEqual(2);

    groupRule.removeChild(rule);

    expect(groupRule.getChildren().length).toEqual(1);
    expect(groupRule.getChildren()[0].id).not.toBe(rule.id);
  }));
});
