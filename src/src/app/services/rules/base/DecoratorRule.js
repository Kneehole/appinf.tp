angular
	.module('app')
	.service('DecoratorRule', DecoratorRule);

function DecoratorRule() {
  Rule.call(this);
}

// inheritance
DecoratorRule.prototype = Object.create(Rule.prototype);

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
DecoratorRule.prototype.setRule = function (rule) {
  this.rule = rule;
};

/**
 * @params
 *
 * @return: Rule
 */
DecoratorRule.prototype.getRule = function () {
  return this.rule;
};

/**
 * @Override
 * @params
 *
 * @return: Array<Rule>
 */
DecoratorRule.prototype.getChildren = function () {
  return [this.rule];
};
