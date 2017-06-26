
angular
  .module('app')
  .service('DemoRuleDao', DemoRuleDao);

DemoRuleDao.$inject = ['$q'];

function DemoRuleDao($q) {
  return {
    generateSimpleDemoRule: generateSimpleDemoRule,
    generateSimpleDemoTesterText: generateSimpleDemoTesterText
  }

  function generateSimpleDemoRule () {
    var deferred = $q.defer();

    setTimeout(function() {
      var rootRule = new RootRule();

      var groupRule = new SequenceGroupRule();

      var holaRule = new WordRule('Hello');

      var spaceRule = new AnyQuantityRule();
      spaceRule.setRule(new WhiteSpaceSymbolRule());

      var mundoRule = new WordRule('World');

      groupRule.addChild(holaRule);
      groupRule.addChild(spaceRule);
      groupRule.addChild(mundoRule);
      rootRule.setRule(groupRule);

      deferred.resolve(rootRule);
    }, 500);

    return deferred.promise;
  }

  function generateSimpleDemoTesterText () {
    var deferred = $q.defer();

    setTimeout(function() {
      var testerText = '' +
        'Hello World \n' +
        'World Hello\n' +
        'HelloWorld \n' +
        'Hello      World \n' +
        'Hello Hello World World\n' +
        'HHello World World\n' +
        'Hello Hello WorldWorld\n' +
        'He llo Wo rld\n';

      deferred.resolve(testerText);
    }, 500);

    return deferred.promise;
  }
}