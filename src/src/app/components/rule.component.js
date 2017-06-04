angular
  .module('app')
  .component('rule', {
    templateUrl: 'app/templates/rule.html',
    controller: RuleController,
    bindings: {
      data: '<',
      onUpdate: '&'
    }
  });

  RuleController.$inject = ['$scope', '$timeout', '$compile'];

  function RuleController ($scope, $timeout, $compile) {
    var vm = this;

    vm.dragover = '';

    vm.$onChanges = function (changesObj) {
      if (changesObj.data) {

      }
    };

    vm.checkDragData = function ($dragData) {
      return vm.data.isExtensible();
    }

    vm.onDragStartEnter = function ($event, $dragData) {
      vm.dragover = 'dragover';
    }

    vm.onDragOver = function ($event, $dragData) {
      vm.dragover = 'dragover';
    }

    vm.onDragLeave = function ($event, $dragData) {
      vm.dragover = '';
    }

    vm.onDrop = function ($event, $dragData) {
      var newRule = new ($dragData.constructor)();
      
      if (vm.data.setRule != undefined) {
        vm.data.setRule(newRule);
        vm.onUpdate(vm.data);
      } else if (vm.data.addChild != undefined) {
        vm.data.addChild(newRule);
        vm.onUpdate(vm.data);
      }
    }
  }
