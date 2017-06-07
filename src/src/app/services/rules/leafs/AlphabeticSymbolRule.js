angular
  .module('app')
  .service('AlphabeticSymbolRule', AlphabeticSymbolRule);

function AlphabeticSymbolRule() {
  SymbolRule.call(this);
  this.value = '[a-zA-Z]';
  this.inputValueMaxLength = 0;

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