angular
	.module('app')
	.service('RootRule', RootRule);

function RootRule() {
  Rule.call(this);
}

// inheritance
RootRule.prototype = Object.create(Rule.prototype);
RootRule.prototype.constructor = RootRule;

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
RootRule.prototype.setRule = function (rule) {
  this.rule = rule;
};

/**
 * @params
 *
 * @return: Rule
 */
RootRule.prototype.getRule = function () {
  return this.rule;
};

/**
 * @Override
 * @params
 *
 * @return: Array<Rule>
 */
RootRule.prototype.getChildren = function () {

  return this.rule ? [this.rule] : [];
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
RootRule.prototype.describe = function () {
  return this.rule ? this.rule.describe() : '';
};

/**
 * @params
 *
 * @return: String
 */
RootRule.prototype.toString = function () {
  return '[Object RootRule]';
};

/**
 * @params
 *
 * @return: Boolean
 */
RootRule.prototype.isExtensible = function () {
  return !this.rule;
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
RootRule.prototype.getName = function () {
  return 'Root';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
RootRule.prototype.getDescription = function () {
  return '';
};

/**
 * @params
 *
 * @return: String
 */
RootRule.prototype.getType = function () {
  return 'root';
};