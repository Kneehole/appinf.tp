angular
	.module('app')
	.service('GroupRule', GroupRule);

function GroupRule() {
  Rule.call(this);
  this.childrenRules = [];

  /**
   * @Override
   * @params
   *
   * @return: Array<Rule>
   */
  this.getChildren = function () {
    return this.childrenRules;
  };

  /**
   * @params
   * rule: Rule
   *
   * @return: Void
   */
  this.addChild = function (rule) {
    rule.setParent(this);
    this.childrenRules.push(rule);
  };

  /**
   * @params
   * rule: Rule
   *
   * @return: Void
   */
  this.removeChild = function (rule) {
    rule.setParent(null);
    this.childrenRules = this.childrenRules.filter(function (aRule) {
      return aRule.id != rule.id
    });
  };

  /**
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object GroupRule]';
  };

  /**
   * @params
   *
   * @return: Boolean
   */
  this.isExtensible = function () {
    return true;
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Group';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Abstract join among rules';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return this.types.group;
  };
}
