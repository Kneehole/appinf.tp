angular
  .module('app')
  .service('AnySymbolRule', AnySymbolRule);

function AnySymbolRule() {
  SymbolRule.call(this);
  this.symbol = '.';

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Any symbol';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Any alphanumeric character';
  };
}