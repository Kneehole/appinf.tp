angular
  .module('app')
  .service('NumericSymbolRule', NumericSymbolRule);

function NumericSymbolRule() {
  SymbolRule.call(this);
  this.value = '[0-9]';
  this.inputValueMaxLength = 0;

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Numeric Symbol';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Any number is possible';
  };
}