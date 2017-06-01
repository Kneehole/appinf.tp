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
