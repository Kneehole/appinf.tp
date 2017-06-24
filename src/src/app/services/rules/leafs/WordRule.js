angular
  .module('app')
  .service('WordRule', WordRule);

function WordRule(value) {
  Rule.call(this);
  this.value = value || 'a';
  this.inputValueMaxLength = 50;

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return '(' + this.value + ')';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Word';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Exact word matches';
  };
}