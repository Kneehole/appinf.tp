angular
  .module('app')
  .component('rulesList', {
    templateUrl: 'app/templates/rules-list.html',
    controller: RulesListController,
    bindings: {
      data: '<',
      onUpdate: '&'
    }
  });

  RulesListController.$inject = ['$scope', 'RulesFactory'];

  function RulesListController ($scope, RulesFactory) {
    var vm = this;

    vm.rules = [];
    RulesFactory.retrieveAllRules().then(function (rules) {
      vm.rules = rules;
    });
  }
