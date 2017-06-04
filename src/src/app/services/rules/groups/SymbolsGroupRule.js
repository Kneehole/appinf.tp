angular
  .module('app')
  .service('SymbolsGroupRule', SymbolsGroupRule);

function SymbolsGroupRule() {
  GroupRule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    var symbols = '';
    for (var i = 0; i < this.childrenRules.length; i++) {
      symbols += this.childrenRules[i].describe();
    };

    return '['+symbols+']';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Group of Symbols';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Any of them are available';
  };
}