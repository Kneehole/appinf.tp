angular
	.module('app')
	.service('DecoratorRule', DecoratorRule);

function DecoratorRule() {
  Rule.call(this);
}

// inheritance
DecoratorRule.prototype = Object.create(Rule.prototype);
DecoratorRule.prototype.constructor = DecoratorRule;

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
  return this.rule ? [this.rule] : [];
};

/**
 * @params
 *
 * @return: String
 */
DecoratorRule.prototype.toString = function () {
  return '[Object DecoratorRule]';
};

/**
 * @params
 *
 * @return: Boolean
 */
DecoratorRule.prototype.isExtensible = function () {
  return !this.rule;
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
DecoratorRule.prototype.getName = function () {
  return 'Modifier';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
DecoratorRule.prototype.getDescription = function () {
  return 'Abstract modification';
};

/**
 * @params
 *
 * @return: String
 */
DecoratorRule.prototype.getType = function () {
  return 'decorator';
};