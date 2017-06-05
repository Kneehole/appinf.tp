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

  RuleTesterController.$inject = ['$scope', '$timeout', '$compile', '$sce'];

  function RuleTesterController ($scope, $timeout, $compile, $sce) {
    var vm = this;

    vm.$onChanges = function (changesObj) {
      if (changesObj.rootRule && changesObj.rootRule.currentValue) {
        vm.reloadTests(changesObj.rootRule.currentValue);
      }
    };

    vm.reloadTests = function (rootRule) {
      vm.currentRegex = rootRule.describe();
      vm.currentRegex = vm.stylishRegex(vm.currentRegex);
    }

    vm.stylishRegex = function (regex) {
      regex = regex.replace(/\[/g, '<brackets>[</brackets>');
      regex = regex.replace(/\]/g, '<brackets>]</brackets>');

      regex = regex.replace(/\*/g, '<multiplier>*</multiplier>');
      regex = regex.replace(/\?/g, '<multiplier>?</multiplier>');
      regex = regex.replace(/\+/g, '<multiplier>+</multiplier>');
      
      return regex;
    }

    vm.test = function () {
      return $sce.trustAsHtml(vm.currentRegex);
    }

    $timeout(function () {
      vm.helper.onUpdate = function () {
        vm.reloadTests(vm.rootRule);
      }
    }, 500);
  }
