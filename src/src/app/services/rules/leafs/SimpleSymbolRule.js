angular
  .module('app')
  .service('SimpleSymbolRule', SimpleSymbolRule);

function SimpleSymbolRule(value) {
  SymbolRule.call(this);
  this.value = value || 'a';
  this.inputValueMaxLength = 1;

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    var utils = new RuleUtils();
    return utils.escapeValue(this.value);
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