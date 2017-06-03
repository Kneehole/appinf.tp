
var globalRuleId = 0;

angular
  .module('app')
  .factory('Rule', Rule);

function Rule() {
  this.id = globalRuleId++;
}

/**
 * @params
 * parentRule: Rule
 *
 * @return: Void
 */
Rule.prototype.setParent = function (parentRule) {
  this.parentRule = parentRule;
};

/**
 * @params
 *
 * @return: Rule
 */
Rule.prototype.getParent = function () {
  return this.parentRule;
};

/**
 * @params
 *
 * @return: Array<Rule>
 */
Rule.prototype.getChildren = function () {
  return [];
};

/**
 * @params
 *
 * @return: String
 */
Rule.prototype.describe = function () {
  throw new Error('method not implemented');
};

/**
 * @params
 * text: String
 *
 * @return: Array<Match>
 */
Rule.prototype.matches = function (text) {
  throw new Error('method not implemented');
};
