
var globalRuleId = 0;

angular
  .module('app')
  .factory('Rule', Rule);

function Rule() {
  this.id = globalRuleId++;

  // Value
  this.value = 0;
  this.inputValueMaxLength = 0;

  this.types = {
    leaf: 'leaf',
    root: 'root',
    group: 'group',
    decorator: 'decorator'
  }

  /**
   * @params
   * parentRule: Rule
   *
   * @return: Void
   */
  this.setParent = function (parentRule) {
    this.parentRule = parentRule;
  };

  /**
   * @params
   *
   * @return: Rule
   */
  this.getParent = function () {
    return this.parentRule;
  };

  /**
   * @params
   *
   * @return: Array<Rule>
   */
  this.getChildren = function () {
    return [];
  };

  /**
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    throw new Error('method not implemented');
  };

  /**
   * @params
   * text: String
   *
   * @return: Array<Match>
   */
  this.matches = function (text) {
    throw new Error('method not implemented');
  };

  /**
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object Rule]';
  };

  /**
   * @params
   *
   * @return: Boolean
   */
  this.isExtensible = function () {
    return false;
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Abstract Rule';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Empty functionality';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return this.types.leaf;
  };
}

