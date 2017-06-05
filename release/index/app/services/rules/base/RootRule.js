angular
	.module('app')
	.service('RootRule', RootRule);

function RootRule() {
  Rule.call(this);

  /**
   * @params
   * rule: Rule
   *
   * @return: Void
   */
  this.setRule = function (rule) {
    if (this.rule) this.rule.setParent(null);
    this.rule = rule;
    if (rule) rule.setParent(this);
  };

  /**
   * @params
   *
   * @return: Rule
   */
  this.getRule = function () {
    return this.rule;
  };

  /**
   * @Override
   * @params
   *
   * @return: Array<Rule>
   */
  this.getChildren = function () {

    return this.rule ? [this.rule] : [];
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return this.rule ? this.rule.describe() : '';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object RootRule]';
  };

  /**
   * @params
   *
   * @return: Boolean
   */
  this.isExtensible = function () {
    return !this.rule;
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Root';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return '';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return this.types.root;
  };
}

