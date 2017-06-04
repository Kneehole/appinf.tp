angular
  .module('app')
  .service('SymbolRule', SymbolRule);

function SymbolRule() {
  Rule.call(this);
  this.symbol = 'a';
}

// inheritance
SymbolRule.prototype = Object.create(Rule.prototype);
SymbolRule.prototype.constructor = SymbolRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolRule.prototype.describe = function () {
  return this.symbol;
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolRule.prototype.getName = function () {
  return 'Symbol';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolRule.prototype.getDescription = function () {
  return 'Selected symbol:' + this.symbol;
};