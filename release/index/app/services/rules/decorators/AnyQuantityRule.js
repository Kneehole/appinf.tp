angular
  .module('app')
  .service('AnyQuantityRule', AnyQuantityRule);

function AnyQuantityRule() {
  DecoratorRule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.rule ? this.rule.describe() + '*' : '';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Any Quantity';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Zero o more times';
  };
}