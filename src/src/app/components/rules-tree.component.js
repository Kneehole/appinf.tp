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

    vm.treantTree = null;

    vm.$onChanges = function (changesObj) {
      if (changesObj.rootRule) {
        $timeout(function () {
          vm.updateTree(changesObj.rootRule.currentValue);
        })
        
      }
    };

    vm.updateTree = function (rootRule) {
      var treantTreeData = vm.generateTreantTreeData(rootRule);
      vm.cleanContainer();        
      vm.treantTree = new Treant(treantTreeData);
    }

    vm.cleanContainer = function () {
      var containerId = "rules-tree-container";
      $("#"+containerId).empty();
      var container = document.getElementById(containerId);
      container.innerHTML +='<div id="rules-tree" style="width:100%; height: 100%"></div>';
    }

/**
 * Treant data management
 */
    vm.generateTreantTreeData = function (rootRule) {
      var config = vm.getTreantTreeConfig();
      var nodes = vm.generateTreantTreeNodes(rootRule);
      return [config].concat(nodes);
    }

    vm.getTreantTreeConfig = function () {
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
            vm.updateNodesWithComponents(vm.rootRule);
          }
        }
      }
      return config;
    }

    vm.generateTreantTreeNodes = function (rule, parentNode) {
      var nodes = [];

      if (!rule) return nodes;

      var nodeInfo = {innerHTML: vm.generateNodeHTML(rule.id)}
      if (parentNode) nodeInfo.parent = parentNode;

      nodes.push(nodeInfo)
      var children = rule.getChildren();
      for (var i = 0; i < children.length; i++) {
        var childRule = children[i];
        var childNodes = vm.generateTreantTreeNodes(childRule, nodeInfo);
        nodes = nodes.concat(childNodes);
      };

      return nodes;
    }

    vm.generateNodeHTML = function (nodeId) {
      return '<div id="node-' + nodeId + '"></div>';
    }

    vm.updateNodesWithComponents = function (rule) {

      $timeout(function() {

        // update node
        var nodeContainer = $("#node-" + rule.id);
        nodeContainer.append(
          $compile("<rule></rule>")($scope)
        );

        // update children
        var children = rule.getChildren();
        for (var i = 0; i < children.length; i++) {
          var childRule = children[i];
          vm.updateNodesWithComponents(childRule);
        };
      }, 50);
    }
  }