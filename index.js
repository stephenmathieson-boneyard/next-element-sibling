
/**
 * Get the next element sibling of the given element
 *
 * @api public
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */

module.exports = function (element) {
  if (element.nextElementSibling) {
    return element.nextElementSibling;
  }

  var node = element.nextSibling;
  // jshint boss:true
  while (node = node.nextSibling) {
    if (node.nodeType === 1) {
      return node;
    }
  }

  return null;
};
