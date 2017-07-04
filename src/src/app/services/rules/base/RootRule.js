angular
	.module('app')
	.service('RootRule', RootRule);

function RootRule() {
  SequenceGroupRule.call(this);

  /**
   * @params
   *
   * @return: String
   */
  this.toString = function () {
    return '[Object RootRule]';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getName = function () {
    return 'Root';
  };

  /**
   * @Override
   * @params
   *
   * @return: String
   */
  this.getDescription = function () {
    return 'First parent rule';
  };

  /**
   * @params
   *
   * @return: String
   */
  this.getType = function () {
    return this.types.root;
  };
}

