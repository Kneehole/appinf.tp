angular
  .module('app')
  .service('SelectiveGroupRule', SelectiveGroupRule);

function SelectiveGroupRule() {
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
      if (symbol.indexOf('[') == 0 || symbol.indexOf('(') == 0) {
        symbol = symbol.substring(1, symbol.length-1);
      }
      symbols += (symbols.length > 0 ? '|' : '') + symbol;
    };

    return '('+symbols+')';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Selective word';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'One of the words matches';
  };

  /**
   * @params
   *
   * @return: Boolean
   */
  this.isExtensible = function (childRule) {
    return childRule.constructor.name == 'SimpleSymbolRule' || childRule.constructor.name == 'WordRule';
  };
}