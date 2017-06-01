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
 * @params
 *
 * @return: Array<Rule>
 */
GroupRule.prototype.getRules = function () {
  return this.childrenRules;
};

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
GroupRule.prototype.addRule = function (rule) {
  this.childrenRules.push(rule);
};

/**
 * @params
 * rule: Rule
 *
 * @return: Void
 */
GroupRule.prototype.removeRule = function (rule) {
  this.childrenRules = this.childrenRules.filter(function (aRule) {
    return aRule.id != rule.id
  });
};
