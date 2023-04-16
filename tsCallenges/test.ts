function prop<T, K extends keyof T>(obj: T, key: K, value: any) {
  obj[key] = value
  return obj[key]
}
function prop2<T>(obj: T, key: keyof T, value: any) {
  obj[key] = value
  return obj[key]
}

let o = {
  p1: 0,
  p2: '',
}

let v = prop(o, 'p1', '') // is number, K is of type 'p1'
let v2 = prop2(o, 'p1', 'j') // is number | string, no extra info is captured
const MyArray = ['tesla', 'model 3', 'model X', 'model Y', 1, Symbol()]

type b = { [a in typeof MyArray[number]]: a }
