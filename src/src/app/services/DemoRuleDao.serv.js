
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

      var protocol = new AtLeastOneQuantityRule();
      var protocolGroup = new SelectiveGroupRule();
      protocolGroup.addChild(new WordRule('http://'));
      protocolGroup.addChild(new WordRule('https://'));
      protocol.setRule(protocolGroup);

      var www = new AtLeastOneQuantityRule();
      www.setRule(new WordRule('www.'));

      var domainName = new MoreThanZeroQuantityRule();
      var domainNameAllowedChars = new SymbolsGroupRule();
      domainNameAllowedChars.addChild(new SimpleSymbolRule('-'));
      domainNameAllowedChars.addChild(new SimpleSymbolRule('+'));
      domainNameAllowedChars.addChild(new AlphabeticSymbolRule());
      domainNameAllowedChars.addChild(new NumericSymbolRule());
      domainName.setRule(domainNameAllowedChars);

      var domainSpaces = new SelectiveGroupRule();
      domainSpaces.addChild(new WordRule('.com'));
      domainSpaces.addChild(new WordRule('.gob'));
      domainSpaces.addChild(new WordRule('.org'));

      var domainCountry = new AtLeastOneQuantityRule();
      var domainCountryGroup = new SelectiveGroupRule();
      domainCountryGroup.addChild(new WordRule('.ar'));
      domainCountryGroup.addChild(new WordRule('.br'));
      domainCountry.setRule(domainCountryGroup);

      var startAnchor = new StartAnchorRule();
      var endAnchor = new EndAnchorRule();

      rootRule.addChild(startAnchor);
      rootRule.addChild(protocol);
      rootRule.addChild(www);
      rootRule.addChild(domainName);
      rootRule.addChild(domainSpaces);
      rootRule.addChild(domainCountry);
      rootRule.addChild(endAnchor);

      deferred.resolve(rootRule);
    }, 500);

    return deferred.promise;
  }

  function generateSimpleDemoTesterText () {
    var deferred = $q.defer();

    setTimeout(function() {
      var testerText = '' +
        'google.com\n' +
        'google.com.ar\n' +
        'http://google.com.ar\n' +
        'https://www.google.com\n' +
        'www.google.com.ar\n' +
        'www.goo-gle.com.ar\n' +
        'www.google+dummy.com.ar\n' +
        '\n' +
        'goo_gle.com\n' +
        'http://\n' +
        'https://\n' +
        'http://google*fail.com.ar\n' +
        '\n';

      deferred.resolve(testerText);
    }, 500);

    return deferred.promise;
  }
}