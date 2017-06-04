angular
  .module('app')
  .component('ruleTester', {
    templateUrl: 'app/templates/rule-tester.html',
    controller: RuleTesterController,
    bindings: {
      rootRule: '<',
    }
  });

  RuleTesterController.$inject = ['$scope', '$timeout', '$compile'];

  function RuleTesterController ($scope, $timeout, $compile) {
    var vm = this;

    vm.$onChanges = function (changesObj) {
      if (changesObj.rootRule && changesObj.rootRule.currentValue) {
        vm.currentRegex = changesObj.rootRule.currentValue.describe();
      }
    };
  }
