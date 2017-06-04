
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

      var anyQuantityRule = new AnyQuantityRule();
      anyQuantityRule.setRule(new AlphabeticSymbolRule());
      
      groupRule.addChild(anyQuantityRule);
      groupRule.addChild(new NumericSymbolRule());
      rootRule.setRule(groupRule);

      deferred.resolve(rootRule);
    }, 200);

    return deferred.promise;
  }
}