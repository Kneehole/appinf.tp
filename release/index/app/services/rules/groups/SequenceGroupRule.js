angular
  .module('app')
  .service('SequenceGroupRule', SequenceGroupRule);

function SequenceGroupRule() {
  GroupRule.call(this);

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.describe = function () {
    var rules = '';
    for (var i = 0; i < this.childrenRules.length; i++) {
      rules += this.childrenRules[i].describe();
    };

    return rules;
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Group of rules';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'Rules are proccesed from left to right';
  };
}