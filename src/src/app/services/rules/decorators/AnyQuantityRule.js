angular
  .module('app')
  .service('AnyQuantityRule', AnyQuantityRule);

function AnyQuantityRule() {
  DecoratorRule.call(this);
}

// inheritance
AnyQuantityRule.prototype = Object.create(DecoratorRule.prototype);
AnyQuantityRule.prototype.constructor = AnyQuantityRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
AnyQuantityRule.prototype.describe = function () {
  return this.rule ? this.rule.describe() + '*' : '';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AnyQuantityRule.prototype.getName = function () {
  return 'Any Quantity';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AnyQuantityRule.prototype.getDescription = function () {
  return 'Zero o more times';
};