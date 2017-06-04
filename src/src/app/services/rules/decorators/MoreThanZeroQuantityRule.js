angular
  .module('app')
  .service('MoreThanZeroQuantityRule', MoreThanZeroQuantityRule);

function MoreThanZeroQuantityRule() {
  DecoratorRule.call(this);
}

// inheritance
MoreThanZeroQuantityRule.prototype = Object.create(DecoratorRule.prototype);
MoreThanZeroQuantityRule.prototype.constructor = MoreThanZeroQuantityRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
MoreThanZeroQuantityRule.prototype.describe = function () {
  return this.rule.describe() + '+';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
MoreThanZeroQuantityRule.prototype.getName = function () {
  return 'More than zero times';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
MoreThanZeroQuantityRule.prototype.getDescription = function () {
  return 'One or more times';
};