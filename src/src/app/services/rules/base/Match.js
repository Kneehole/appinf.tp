angular
  .module('app')
  .factory('Match', Match);

function Match(source, startIndex, endIndex, stringMatch) {
  this.source = source;
  this.startIndex = startIndex;
  this.endIndex = endIndex;
  this.stringMatch = stringMatch;
};
