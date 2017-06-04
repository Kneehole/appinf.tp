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
        new RootRule(),
        new Rule(),
        new GroupRule(),
        new DecoratorRule()
      ];

      deferred.resolve(rules);
    }, 200);

    return deferred.promise;
  }
}