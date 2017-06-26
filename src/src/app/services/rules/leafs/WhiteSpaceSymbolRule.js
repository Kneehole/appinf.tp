angular
  .module('app')
  .service('WhiteSpaceSymbolRule', WhiteSpaceSymbolRule);

function WhiteSpaceSymbolRule() {
  SymbolRule.call(this);
  this.value = '\\s';
  this.inputValueMaxLength = 0;

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Whitespace symbol';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'A Whitespace character';
  };
}