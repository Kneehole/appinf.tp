angular
  .module('app')
  .service('SequenceGroupRule', SequenceGroupRule);

function SequenceGroupRule() {
  GroupRule.call(this);
}

// inheritance
SequenceGroupRule.prototype = Object.create(GroupRule.prototype);
SequenceGroupRule.prototype.constructor = SequenceGroupRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
SequenceGroupRule.prototype.describe = function () {
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
SequenceGroupRule.prototype.getName = function () {
  return 'Group of rules';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
SequenceGroupRule.prototype.getDescription = function () {
  return 'Rules are proccesed from left to right';
};