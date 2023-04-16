// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
interface Todo {
  title: string
  description: string
  obj: {
    name: string
  }
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
  obj: {
    name: 'jj',
  },
}

todo.obj.name = 'j'
