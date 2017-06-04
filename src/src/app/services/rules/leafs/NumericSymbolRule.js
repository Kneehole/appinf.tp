angular
  .module('app')
  .service('NumericSymbolRule', NumericSymbolRule);

function NumericSymbolRule() {
  SymbolRule.call(this);
  this.symbol = '[0-9]';
}

// inheritance
NumericSymbolRule.prototype = Object.create(SymbolRule.prototype);
NumericSymbolRule.prototype.constructor = NumericSymbolRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
NumericSymbolRule.prototype.getName = function () {
  return 'Numeric Symbol';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
NumericSymbolRule.prototype.getDescription = function () {
  return 'Any number is possible';
};