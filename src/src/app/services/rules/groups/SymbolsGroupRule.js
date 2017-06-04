angular
  .module('app')
  .service('SymbolsGroupRule', SymbolsGroupRule);

function SymbolsGroupRule() {
  GroupRule.call(this);
}

// inheritance
SymbolsGroupRule.prototype = Object.create(GroupRule.prototype);
SymbolsGroupRule.prototype.constructor = SymbolsGroupRule;

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolsGroupRule.prototype.describe = function () {
  var symbols = '';
  for (var i = 0; i < this.childrenRules.length; i++) {
    symbols += this.childrenRules[i].describe();
  };

  return '['+symbols+']';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolsGroupRule.prototype.getName = function () {
  return 'Group of Symbols';
};

/**
 * @Override
 * @params
 *
 * @return: String
 */
SymbolsGroupRule.prototype.getDescription = function () {
  return 'Any of them are available';
};