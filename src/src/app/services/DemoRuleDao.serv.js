
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
      var groupRule = new GroupRule();
      groupRule.addChild(new Rule());
      groupRule.addChild(new Rule());
      rootRule.setRule(groupRule);

      deferred.resolve(rootRule);
    }, 200);

    return deferred.promise;
  }
}