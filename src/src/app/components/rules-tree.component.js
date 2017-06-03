angular
  .module('app')
  .component('rulesTree', {
    templateUrl: 'app/templates/rules-tree.html',
    controller: RulesTreeController,
    bindings: {
      rootRule: '<',
      onUpdate: '&'
    }
  });

  RulesTreeController.$inject = ['$scope', '$timeout', '$compile'];

  function RulesTreeController ($scope, $timeout, $compile) {
    var vm = this;

    this.$onChanges = function (changesObj) {
      if (changesObj.rootRule) {
        vm.updateTree(changesObj.rootRule.currentValue);
      }
    };

    vm.updateTree = function (rootRule) {
      var my_chart = new Treant(vm.generateTree());
    }

    vm.generateTree = function () {
      var config = {
        container: "#rules-tree",

        nodeAlign: "BOTTOM",
        rootOrientation: "NORTH", 

        connectors: {
          type: 'step'
        },
        node: {
          HTMLclass: 'ruleNode'
        },
        callback: {
          onTreeLoaded: function () {
            vm.updateNodes();
          }
        }
      },
      ceo = {
        innerHTML: vm.generateNodeHTML(1)
      },

      cto = {
        parent: ceo,
        innerHTML: vm.generateNodeHTML(2)
      },
      cbo = {
        parent: ceo,
        innerHTML: vm.generateNodeHTML(3)
      },
      cdo = {
        parent: ceo,
        innerHTML: vm.generateNodeHTML(4)
      },
      cio = {
        parent: cto,
        innerHTML: vm.generateNodeHTML(5)
      },
      ciso = {
        parent: cto,
        innerHTML: vm.generateNodeHTML(6)
      },
      cio2 = {
        parent: cdo,
        innerHTML: vm.generateNodeHTML(7)
      },
      ciso2 = {
        parent: cbo,
        innerHTML: vm.generateNodeHTML(8)
      },
      ciso3 = {
        parent: cbo,
        innerHTML: vm.generateNodeHTML(9)
      },
      ciso4 = {
        parent: cbo,
        innerHTML: vm.generateNodeHTML(10)
      },

      chart_config = [
      config,
      ceo,cto,cbo,
      cdo,cio,ciso,
      cio2,ciso2,ciso3,ciso4
      ];
      return chart_config;
    }

    vm.generateNodeHTML = function (nodeId) {
      return '<div id="node-' + nodeId + '"></rule>';
    }

    vm.updateNodes = function () {
      $timeout(function() {
        for (var i = 1; i <= 11; i++) {
          var nodeContainer = $("#node-" + i);
          nodeContainer.append(
            $compile("<rule></rule>")($scope)
          );
        };
      }, 100);
    }
  }