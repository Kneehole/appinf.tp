angular
	.module('app')
	.service('GroupRule', GroupRule);

function GroupRule() {
  Rule.call(this);
  this.childrenRules = [];
}

// inheritance
GroupRule.prototype = Object.create(Rule.prototype);
GroupRule.prototype.constructor = GroupRule;

/**
 * @Override
 * @params
 *
 * @return: Array<Rule>
 */
GroupRule.prototype.getChildren = function () {
  return this.childrenRules;
};

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
GroupRule.prototype.addChild = function (rule) {
  this.childrenRules.push(rule);
};

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
GroupRule.prototype.removeChild = function (rule) {
  this.childrenRules = this.childrenRules.filter(function (aRule) {
    return aRule.id != rule.id
  });
};

/**
 * @params
 *
 * @return: String
 */
GroupRule.prototype.toString = function () {
  return '[Object GroupRule]';
};

/**
 * @params
 *
 * @return: Boolean
 */
GroupRule.prototype.isExtensible = function () {
  return true;
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
GroupRule.prototype.getName = function () {
  return 'Group';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
GroupRule.prototype.getDescription = function () {
  return 'Abstract join among rules';
};

/**
 * @params
 *
 * @return: String
 */
GroupRule.prototype.getType = function () {
  return 'group';
};