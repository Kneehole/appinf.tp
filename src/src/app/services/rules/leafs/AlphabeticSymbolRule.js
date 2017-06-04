angular
  .module('app')
  .service('AlphabeticSymbolRule', AlphabeticSymbolRule);

function AlphabeticSymbolRule() {
  SymbolRule.call(this);
  this.symbol = '[a-zA-Z]';

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Alphabetic Symbol';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Any alphabet character';
  };
}