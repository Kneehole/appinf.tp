angular
  .module('app')
  .service('SymbolRule', SymbolRule);

function SymbolRule(value) {
  Rule.call(this);
  this.value = value || 'a';
  this.inputValueMaxLength = 1;

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.value;
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
    return 'Selected symbol is possible';
  };
}