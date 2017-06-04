angular
  .module('app')
  .service('AtLeastOneQuantityRule', AtLeastOneQuantityRule);

function AtLeastOneQuantityRule() {
  DecoratorRule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.rule ? this.rule.describe() + '?' : '';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'At least one time';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Zero or one times';
  };
}