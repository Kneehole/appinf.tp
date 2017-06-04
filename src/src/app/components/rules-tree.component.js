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
      vm.cleanTree();        
      var treantTreeData = vm.generateTreantTreeData(rootRule);
      vm.treantTree = new Treant(treantTreeData);
    }

    vm.ruleChanged = function (rule) {
      vm.updateTree(vm.rootRule);
    }

/**
 * Treant data management
 */
     vm.cleanTree = function () {
      var containerId = "rules-tree-container";
      $("#"+containerId).empty();
      var container = document.getElementById(containerId);
      container.innerHTML +='<div id="rules-tree" style="width:100%; height: 100%"></div>';
    }

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
          HTMLclass: 'rule-node'
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
      vm.plainRules = vm.generatePlainRules(rule);
      $timeout(function() {
        for (var i = 0; i < vm.plainRules.length; i++) {
          var insertRule = vm.plainRules[i];
          var nodeContainer = $('#node-' + insertRule.id);
          nodeContainer.append(
            $compile('<rule data=$ctrl.plainRules[' + i + '] on-update=$ctrl.ruleChanged()></rule>')($scope)
          );
        };
      }, 50);
    }

    vm.generatePlainRules = function (rule) {
      var rules = [rule];
      var children = rule.getChildren();
      for (var i = 0; i < children.length; i++) {
        var childRule = children[i];
        rules = rules.concat(vm.generatePlainRules(childRule));
      };

      return rules;
    }
  }