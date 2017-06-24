angular
  .module('app')
  .component('home', {
    templateUrl: 'app/templates/home.html',
    controller: HomeController
  });

HomeController.$inject = ['$scope', '$timeout', 'DemoRuleDao'];

function HomeController($scope, $timeout, DemoRuleDao) {
  var vm = this;

  DemoRuleDao.generateSimpleDemoRule().then(function (rootRule) {
    vm.rootRule = rootRule;
  });

  DemoRuleDao.generateSimpleDemoTesterText().then(function (testerText) {
    vm.testerText = testerText;
  });

  //vm.rootRule = new RootRule();

  vm.helper = {};
  vm.ruleChanged = function () {
    vm.helper.onUpdate();
  }
}
