angular
  .module('app')
  .service('AnySymbolRule', AnySymbolRule);

function AnySymbolRule() {
  SymbolRule.call(this);
  this.symbol = '.';
}

// inheritance
AnySymbolRule.prototype = Object.create(SymbolRule.prototype);
AnySymbolRule.prototype.constructor = AnySymbolRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
AnySymbolRule.prototype.getName = function () {
  return 'Any symbol';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AnySymbolRule.prototype.getDescription = function () {
  return 'Any alphanumeric character';
};