angular
  .module('app')
  .service('AtLeastOneQuantityRule', AtLeastOneQuantityRule);

function AtLeastOneQuantityRule() {
  DecoratorRule.call(this);
}

// inheritance
AtLeastOneQuantityRule.prototype = Object.create(DecoratorRule.prototype);
AtLeastOneQuantityRule.prototype.constructor = AtLeastOneQuantityRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
AtLeastOneQuantityRule.prototype.describe = function () {
  return this.rule ? this.rule.describe() + '?' : '';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AtLeastOneQuantityRule.prototype.getName = function () {
  return 'At least one time';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
AtLeastOneQuantityRule.prototype.getDescription = function () {
  return 'Zero or one times';
};