angular
  .module('app')
  .service('InvertedSymbolsGroupRule', InvertedSymbolsGroupRule);

function InvertedSymbolsGroupRule() {
  SymbolsGroupRule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    var symbols = '';
    for (var i = 0; i < this.childrenRules.length; i++) {
      var symbol = this.childrenRules[i].describe();
      if (symbol.indexOf('[') == 0) symbol = symbol.substring(1, symbol.length-1);
      symbols += symbol;
    };

    var describe = '['+symbols+']';

    describe = [describe.slice(0, 1), '^', describe.slice(1)].join('');
    return describe;
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'NOT Group of Symbols';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Any of them are explicity NOT available';
  };
}