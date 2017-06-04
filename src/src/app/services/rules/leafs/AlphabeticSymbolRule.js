angular
  .module('app')
  .service('AlphabeticSymbolRule', AlphabeticSymbolRule);

function AlphabeticSymbolRule() {
  SymbolRule.call(this);
  this.symbol = '[a-zA-Z]';
}

// inheritance
AlphabeticSymbolRule.prototype = Object.create(SymbolRule.prototype);
AlphabeticSymbolRule.prototype.constructor = AlphabeticSymbolRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
AlphabeticSymbolRule.prototype.getName = function () {
  return 'Alphabetic Symbol';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AlphabeticSymbolRule.prototype.getDescription = function () {
  return 'Any alphabet character';
};