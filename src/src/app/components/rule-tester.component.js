angular
  .module('app')
  .component('ruleTester', {
    templateUrl: 'app/templates/rule-tester.html',
    controller: RuleTesterController,
    bindings: {
      rootRule: '<',
      text: '<?',
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
    }

    vm.testChanged = function () {
      vm.reloadAreaConfig(vm.rootRule);
    }

    vm.reloadTests = function (rootRule) {
      vm.currentRegex = rootRule.describe();
      vm.currentRegex = vm.stylishRegex(vm.currentRegex);
      vm.reloadAreaConfig(rootRule);
    }

    vm.stylishRegex = function (regex) {
      regex = regex.replace(/\[/g, '<brackets>[</brackets>');
      regex = regex.replace(/\]/g, '<brackets>]</brackets>');

      regex = regex.replace(/\*/g, '<multiplier>*</multiplier>');
      regex = regex.replace(/\?/g, '<multiplier>?</multiplier>');
      regex = regex.replace(/([^\\])\+/g, '$1<multiplier>+</multiplier>');
      
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

    vm.reloadAreaConfig = function (rootRule) {
      var utils = new RuleUtils();
      var words = []
      if (rootRule) {
        var matches = rootRule.matches(vm.text);
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          words.push(utils.escapeValue(match.stringMatch));
        };

        words = [new RegExp(rootRule.describe(), "gm")];
      }
      
      var newAreaConfig = vm.areaConfig = {autocomplete: []}
      if (words.length > 0) {
        newAreaConfig.autocomplete.push({
          words: words,
          cssClass: 'tester-area-highlight',
          autocompleteOnSpace: false
        });
      }

      $timeout(function () {
        vm.areaConfig = newAreaConfig;
      });

      var textarea = $('#tester-text-area');
      textarea.focus();      
    };
    vm.reloadAreaConfig();
  }
