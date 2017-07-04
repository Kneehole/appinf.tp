angular
  .module('app')
  .service('RegexParser', RegexParser);

function RegexParser() {
  return {
    parseMatches: parseMatches
  }

  function parseMatches (rule, text) {
    var pattern = rule.describe();
    if (pattern.length == 0) return [];
    
    var regex = new RegExp(pattern, "g");
    var matches = [];
    var processData = {
      origin: text,
      text: text,
      offset: 0
    }
    while (true) {
      var nextRegexMatch = regex.exec(text);
      if (!nextRegexMatch || nextRegexMatch[0].length == 0) break;

      var match = parseMatchInfo(nextRegexMatch, processData);
      matches.push(match);
    }

    return matches;
  }

  function parseMatchInfo (regexMatch, processData) {
    var match = new Match(
      processData.origin, 
      processData.offset + regexMatch.index, 
      regexMatch[0].length, 
      regexMatch[0]);

    var shiftOffset = regexMatch.index + regexMatch[0].length;
    processData.offset += shiftOffset;
    processData.text = processData.text.substring(shiftOffset);

    return match;
  }
}