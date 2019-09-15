function element(tag, attr, children) {
  this.tag = tag
  this.attr = attr
  this.children = children
}
element.prototype.render = function () {
  let node = document.createElement(this.tag)
  for (let att in this.attr) {
    node.setAttribute(att, this.attr[att])
  }
  this.children.forEach(ele => {
    let childEl = ele instanceof element ? ele.render() : document.createTextNode(ele)
    node.appendChild(childEl)
  })
  return node
}

var ul = new element('ul', {
  id: 'list'
}, [
  new element('li', {
    class: 'item'
  }, ['Item 1']),
  new element('li', {
    class: 'item'
  }, ['Item 2']),
  new element('li', {
    class: 'item'
  }, ['Item 3'])
])
console.log(ul.render())