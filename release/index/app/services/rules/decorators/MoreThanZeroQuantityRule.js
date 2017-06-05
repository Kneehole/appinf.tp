angular
  .module('app')
  .service('MoreThanZeroQuantityRule', MoreThanZeroQuantityRule);

function MoreThanZeroQuantityRule() {
  DecoratorRule.call(this);

    /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.rule ? this.rule.describe() + '+' : '';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'More than zero times';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'One or more times';
  };
}