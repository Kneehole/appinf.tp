angular
  .module('app')
  .component('app', {
    templateUrl: 'app/templates/hello.html',
    controller: function () {
      this.hello = 'Hello World!';
    }
  });
