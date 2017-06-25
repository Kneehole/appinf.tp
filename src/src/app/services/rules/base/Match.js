angular
  .module('app')
  .factory('Match', Match);

function Match(source, startIndex, length, stringMatch) {
  this.source = source;
  this.startIndex = startIndex;
  this.length = length;
  this.stringMatch = stringMatch;



  /**
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object Match]';
  };
};