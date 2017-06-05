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
      var symbol = this.childrenRules[i].describe();
      if (symbol.indexOf('[') == 0) symbol = symbol.substring(1, symbol.length-1);
      symbols += symbol;
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

  /**
   * @params
   *
   * @return: Boolean
   */
  this.isExtensible = function (childRule) {
    return childRule.getType() == this.types.leaf;
  };
}