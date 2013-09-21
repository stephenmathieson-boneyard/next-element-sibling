
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

  while (element = element.nextSibling) {
    if (element.nodeType === 1) {
      return element;
    }
  }

  return null;
};
