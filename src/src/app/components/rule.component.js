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
      if ($dragData) {
        if ($dragData.isFromTree) {
          return vm.isSibling($dragData);
        } else {
          return vm.data.isExtensible($dragData);
        }
      }

      return false;
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
      if ($dragData.isFromTree) {
        if (vm.isSibling($dragData)) {
          vm.switchSibling($dragData);
        }
      } else {
        var childRule = new ($dragData.constructor)();
        vm.addChildIfPossible(childRule);
      }
    }

    vm.isSibling = function (rule) {
      var parent1 = rule.getParent();
      var parent2 = vm.data.getParent();
      return parent1 && parent2 && rule.id != vm.data.id && parent1.id == parent2.id;
    }

    vm.switchSibling = function (rule) {
      var parent = vm.data.getParent();
      var children = parent.getChildren();
      var fromIndex = children.indexOf(rule);
      var toIndex = children.indexOf(vm.data);
      children.splice(toIndex, 0, children.splice(fromIndex, 1)[0]);
      vm.onUpdate(vm.data);
    }
  }
