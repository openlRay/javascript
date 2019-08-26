function deepClone(data) {
  if (Object.prototype.toString.call(data) !== '[object Object]' && !Array.isArray(data)) {
    return data
  }
  let obj = {}
  if (Object.prototype.toString.call(data) === '[object Object]') {
    for (let i in data) {
      obj[i] = deepClone(data[i])
    }
    return obj
  }
  if (Array.isArray(data)) {
    return data.map(i => {
      return deepClone(i)
    })
  }
}
const oldObj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: {
    h: {
      i: 2
    }
  }
}
const newObj = deepClone(oldObj)
console.log(newObj)
console.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }
console.log(oldObj.c.h === newObj.c.h); // true