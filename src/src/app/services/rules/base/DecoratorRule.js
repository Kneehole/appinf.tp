angular
	.module('app')
	.service('DecoratorRule', DecoratorRule);

function DecoratorRule() {
  Rule.call(this);

  /**
   * @params
   * rule: Rule
   *
   * @return: Void
   */
  this.setRule = function (rule) {
    this.rule = rule;
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
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object DecoratorRule]';
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
    return 'Modifier';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Abstract modification';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return 'decorator';
  };
}