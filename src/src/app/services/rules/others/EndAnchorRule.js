angular
  .module('app')
  .service('EndAnchorRule', EndAnchorRule);

function EndAnchorRule(value) {
  Rule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    return '$';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'End anchor';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Represent de ending of the string';
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