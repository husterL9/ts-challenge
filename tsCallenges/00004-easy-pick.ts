// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// ============= Your Code Here =============
//in: 取联合类型的值，主要用于数组和对象的构建,切记不要用于interface, 否则会报错
//keyof: 取interface的键后保存为联合类型
//https://github.com/type-challenges/type-challenges/issues/13427
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
function getValue<K extends Object, T extends keyof Object>(o: K, key: T): K[T] {
  return o[key]
}
const obj1 = { name: '张三', age: 18 }
const values = getValue(obj1, 'toString')
// function getValue<T extends Object, K extends keyof T>(o: T, key: K): T[K] {
//   return o[key]
// }
// const obj1 = { name: '张三', age: 18 }
// const values = getValue(obj1, 'name')
