angular
  .module('app')
  .component('ruleListItem', {
    templateUrl: 'app/templates/rule-list-item.html',
    controller: RuleListItemController,
    bindings: {
      data: '<',
      onUpdate: '&'
    }
  });

  RuleListItemController.$inject = ['$scope', '$timeout', '$compile'];

  function RuleListItemController ($scope, $timeout, $compile) {
    var vm = this;

    vm.$onChanges = function (changesObj) {
      if (changesObj.data) {

      }
    };
  }
