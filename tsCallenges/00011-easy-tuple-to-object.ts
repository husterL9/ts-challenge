// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
const str = '322'
type e = typeof tuple
type e2 = typeof str
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// ============= Your Code Here =============
type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}

//https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish

// type A = number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish
