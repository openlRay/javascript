var obj = {}
var obj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return 'woshi'; // 获取值的时候 直接返回
  },
  set: function (target, key, newVal, receiver) { // 改变值的时候 触发set
    console.log(123)
  }
})
obj.name = '123'
console.log(obj.name)