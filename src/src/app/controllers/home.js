angular
  .module('app')
  .component('home', {
    templateUrl: 'app/templates/home.html',
    controller: HomeController
  });

HomeController.$inject = ['RootRule', 'GroupRule'];

function HomeController() {
  this.hello = 'Hello World!';

  //
  var rule = new RootRule();

  //
  var groupRule = new GroupRule();
  groupRule.addRule(new RootRule());
  groupRule.addRule(rule);
  groupRule.addRule(new RootRule());
  
  groupRule.removeRule(rule);
   
}
