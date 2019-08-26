Function.prototype.myCall = function (context, ...args) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
Function.prototype.myBind = function (context, ...args) {
  const self = this
  const fn = function (...params) {
    return self.apply(this instanceof fn ? this : context, [...args, ...params])
  }
  fn.prototype = new Object.create(self.prototype)
  return fn
}

function myNew(construct, ...params) {
  const newObj = Object.create(construct.prototype)
  const result = construct.apply(newObj, params)
  return (typeof result === 'Object' && result) || newObj
}