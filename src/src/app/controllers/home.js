angular
  .module('app')
  .component('home', {
    templateUrl: 'app/templates/home.html',
    controller: HomeController
  });

HomeController.$inject = ['DemoRuleDao'];

function HomeController(DemoRuleDao) {
  var vm = this;

  DemoRuleDao.generateSimpleDemoRule().then(function (rootRule) {
    vm.rootRule = rootRule;
  });

  vm.rootRule = new RootRule();
}
