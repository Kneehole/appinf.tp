angular
  .module('app')
  .component('rulesTree', {
    templateUrl: 'app/templates/rules-tree.html',
    controller: function () {
      var my_chart = new Treant(generateTree());


      function generateTree() {
        var simple_chart_config = {
          chart: {
            container: "#tree-simple"
          },
          nodeStructure: {
            text: { name: "Parent node" },
            children: [{
              text: { name: "First child" }
            },
            {
              text: { name: "Second child" }
            }]
          }
        };
        return simple_chart_config;
      }
    }
  });
