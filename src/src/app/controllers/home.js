angular
  .module('app')
  .component('home', {
    templateUrl: 'app/templates/home.html',
    controller: HomeController
  });

HomeController.$inject = ['RootRule', 'GroupRule'];

function HomeController() {
  this.hello = 'Hello World!';
}
