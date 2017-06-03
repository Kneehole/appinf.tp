angular
	.module('app')
	.service('RootRule', RootRule);

function RootRule() {
  Rule.call(this);
}

// inheritance
RootRule.prototype = Object.create(Rule.prototype);

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

