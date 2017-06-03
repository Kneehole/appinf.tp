angular
  .module('app')
  .component('rulesTree', {
    templateUrl: 'app/templates/rules-tree.html',
    controller: RulesTreeController
  });

  RulesTreeController.$inject = ['$scope', '$timeout', '$compile'];

  function RulesTreeController ($scope, $timeout, $compile) {
    var my_chart = new Treant(generateTree());
    function generateTree() {
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
            updateNodes();
          }
        }
      },
      ceo = {
        innerHTML: generateNodeHTML(1)
      },

      cto = {
        parent: ceo,
        innerHTML: generateNodeHTML(2)
      },
      cbo = {
        parent: ceo,
        innerHTML: generateNodeHTML(3)
      },
      cdo = {
        parent: ceo,
        innerHTML: generateNodeHTML(4)
      },
      cio = {
        parent: cto,
        innerHTML: generateNodeHTML(5)
      },
      ciso = {
        parent: cto,
        innerHTML: generateNodeHTML(6)
      },
      cio2 = {
        parent: cdo,
        innerHTML: generateNodeHTML(7)
      },
      ciso2 = {
        parent: cbo,
        innerHTML: generateNodeHTML(8)
      },
      ciso3 = {
        parent: cbo,
        innerHTML: generateNodeHTML(9)
      },
      ciso4 = {
        parent: cbo,
        innerHTML: generateNodeHTML(10)
      },

      chart_config = [
      config,
      ceo,cto,cbo,
      cdo,cio,ciso,
      cio2,ciso2,ciso3,ciso4
      ];
      return chart_config;
    }

    function generateNodeHTML(nodeId) {
      return '<div id="node-' + nodeId + '"></rule>';
    }

    function updateNodes() {
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