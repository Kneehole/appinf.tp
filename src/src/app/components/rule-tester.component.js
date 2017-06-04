angular
  .module('app')
  .component('ruleTester', {
    templateUrl: 'app/templates/rule-tester.html',
    controller: RuleTesterController,
    bindings: {
      rootRule: '<',
      helper: '<'
    }
  });

  RuleTesterController.$inject = ['$scope', '$timeout', '$compile'];

  function RuleTesterController ($scope, $timeout, $compile) {
    var vm = this;

    vm.$onChanges = function (changesObj) {
      if (changesObj.rootRule && changesObj.rootRule.currentValue) {
        vm.reloadTests(changesObj.rootRule.currentValue);
      }
    };

    vm.reloadTests = function (rootRule) {
      vm.currentRegex = rootRule.describe();
    }

    $timeout(function () {
      vm.helper.onUpdate = function () {
        vm.reloadTests(vm.rootRule);
      }
    }, 500);
  }
