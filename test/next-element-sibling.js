
describe('next-element-sibling', function () {
  var next = require('next-element-sibling'),
      assert = require('assert');

  var div = document.getElementById('fixture');

  beforeEach(function () {
    div.innerHTML = [
      ' hello world',
      ' <span class=one>span1</span>',
      ' cool stuff',
      ' <span class=two>span2</span>'
    ].join('');
  });

  it('should return the next element sibling', function () {

    var one = div.querySelector('.one'),
        two = div.querySelector('.two');

    assert(next(one) == two);

  });
});
