angular
  .module('app')
  .service('SymbolRule', SymbolRule);

function SymbolRule() {
  Rule.call(this);
  this.symbol = 'a';

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.symbol;
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Symbol';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Selected symbol:' + this.symbol;
  };
}