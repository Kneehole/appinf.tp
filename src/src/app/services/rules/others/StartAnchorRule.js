angular
  .module('app')
  .service('StartAnchorRule', StartAnchorRule);

function StartAnchorRule(value) {
  Rule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return '^';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Start anchor';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Represent de begining of the string';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return this.types.other;
  };
}