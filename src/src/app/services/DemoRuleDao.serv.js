
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

      var symbolsGroupRule = new SymbolsGroupRule();
      symbolsGroupRule.addChild(new NumericSymbolRule());
      symbolsGroupRule.addChild(new AlphabeticSymbolRule());
      symbolsGroupRule.addChild(new SymbolRule());
      
      groupRule.addChild(anyQuantityRule);
      groupRule.addChild(new NumericSymbolRule());
      groupRule.addChild(symbolsGroupRule);
      rootRule.setRule(groupRule);

      deferred.resolve(rootRule);
    }, 500);

    return deferred.promise;
  }
}