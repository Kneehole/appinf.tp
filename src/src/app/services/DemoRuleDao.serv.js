
angular
  .module('app')
  .service('DemoRuleDao', DemoRuleDao);

DemoRuleDao.$inject = ['$q'];

function DemoRuleDao($q) {
  return {
    generateSimpleDemoRule: generateSimpleDemoRule
  }

  function generateSimpleDemoRule () {
    var deferred = $q.defer();

    setTimeout(function() {
      var rootRule = new RootRule();

      var groupRule = new SequenceGroupRule();

      var holaRule = new WordRule('Hello');

      var spaceRule = new AnyQuantityRule();
      spaceRule.setRule(new SymbolRule(' '));

      var mundoRule = new WordRule('World');

      groupRule.addChild(holaRule);
      groupRule.addChild(spaceRule);
      groupRule.addChild(mundoRule);
      rootRule.setRule(groupRule);

      deferred.resolve(rootRule);
    }, 500);

    return deferred.promise;
  }
}