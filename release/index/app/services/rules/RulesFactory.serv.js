angular
  .module('app')
  .service('RulesFactory', RulesFactory);

RulesFactory.$inject = ['$q'];

function RulesFactory($q) {
  return {
    retrieveAllRules: retrieveAllRules
  }

  function retrieveAllRules () {
    var deferred = $q.defer();

    setTimeout(function() {
      var rules = [
        new SymbolRule(),
        new NumericSymbolRule(),
        new AlphabeticSymbolRule(),
        new AnySymbolRule(),

        new SymbolsGroupRule(),
        new SequenceGroupRule(),

        new AtLeastOneQuantityRule(),
        new MoreThanZeroQuantityRule(),
        new AnyQuantityRule()
      ];

      deferred.resolve(rules);
    }, 200);

    return deferred.promise;
  }
}