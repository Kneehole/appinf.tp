angular
  .module('app')
  .factory('RuleUtils', RuleUtils);

function RuleUtils() {
  
  /**
   * Format value to return exact value without wildcards
   * @params 
   * - value: String
   *
   * @return: String
   */
  this.escapeValue = function (value) {
    value = value.replace(/([\.\\\/\+\-])/g, "\\$1");
    return value;
  };
};