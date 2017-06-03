angular
	.module('app')
	.service('GroupRule', GroupRule);

function GroupRule() {
  Rule.call(this);
  this.childrenRules = [];
}

// inheritance
GroupRule.prototype = Object.create(Rule.prototype);

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