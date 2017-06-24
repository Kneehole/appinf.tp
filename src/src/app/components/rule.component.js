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
      if (changesObj.data && changesObj.data.currentValue) {
        changesObj.data.currentValue.isFromTree = true;
      }
    };

    vm.valueChanged = function () {
      if (vm.data.value.length >= vm.data.inputValueMaxLength) {
        vm.onUpdate(vm.data);
      }
    };

    vm.valueBlur = function () {
      if (vm.data.value.length < vm.data.inputValueMaxLength) {
        vm.onUpdate(vm.data);
      }
    };

    vm.addChildIfPossible = function (childRule) {
      if (vm.data.setRule != undefined) {
        vm.data.setRule(childRule);
        vm.onUpdate(vm.data);
      } else if (vm.data.addChild != undefined) {
        vm.data.addChild(childRule);
        vm.onUpdate(vm.data);
      }
    }

    vm.remove = function () {

    }

    /*********************************************************
    * Draggeable
    *********************************************************/
    vm.isDraggable = function () {
      return true;
    }

    vm.handleDragStart = function ($event, $dragData) {
      vm.setDeleteButtonHidden(false);
    }

    vm.handleDragEnd = function ($event, $dragData) {
      vm.setDeleteButtonHidden(true);
    }

    vm.setDeleteButtonHidden = function (hidden) {
      var deleteButton = $("#rules-delete-button");
      var hiddenClass = 'hidden';
      if (hidden) {
        deleteButton.addClass(hiddenClass);
      } else {
        deleteButton.removeClass(hiddenClass);
      }
    }

    /*********************************************************
    * Droppeable
    *********************************************************/

    vm.checkDragData = function ($dragData) {
      return $dragData && !$dragData.isFromTree && vm.data.isExtensible($dragData);
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
      var childRule = new ($dragData.constructor)();
      vm.addChildIfPossible(childRule);
    }
  }
