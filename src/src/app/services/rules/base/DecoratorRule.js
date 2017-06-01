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
