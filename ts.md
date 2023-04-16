## 更新node和npm

[(111条消息) Nodejs安装教程_彭佼的博客-CSDN博客_nodejs安装](https://blog.csdn.net/qq_48485223/article/details/122709354)

# 类型断言

不太理解

# ts中的元组的作用

# 类型体操

[TypeScript 类型体操姿势合集&lt;通关总结&gt;--刷完 - 掘金](https://juejin.cn/post/6999280101556748295#heading-3)

## 004

[typescript - Difference between of &quot;K extends keyof T&quot; vs. directly using &quot;keyof T&quot;? - Stack Overflow](https://stackoverflow.com/questions/53099089/difference-between-of-k-extends-keyof-t-vs-directly-using-keyof-t)

//in: 取联合类型的值，主要用于数组和对象的构建,切记不要用于interface, 否则会报错

//keyof: 取interface的键后保存为联合类型

## 011

[TS挑战通关技巧总结，助你打通TS奇经八脉 - 掘金](https://juejin.cn/post/7000560464786620423#heading-17)

在any上运行keyof，ts就是给出了全部可能的对象键类型：
[11 - 元组转换为对象 · Issue #5896 · type-challenges/type-challenges · GitHub](https://github.com/type-challenges/type-challenges/issues/5896)

## 014

T extends [] ? never : T[0]

T[0]?T[0]:never

gpt:
问题出在当泛型类型 T 为空数组类型时，`T[0]` 表达式是无效的，因为空数组类型没有任何元素，所以不存在 `T[0]`。因此，这个表达式会导致 TypeScript 报错。

相比之下，`T extends [] ? never : T[0]` 这个条件类型可以避免这个问题，因为它会首先检查泛型类型 T 是否为空数组类型，只有在 T 不为空数组类型时才会返回 `T[0]`。如果 T 为空数组类型，则直接返回 `never` 类型，避免了 `T[0]` 表达式无效的问题。

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html

extends union判断规则

```typescript
type ages=[1,2,3]
type t1=ages[number]
//t1=1|2|3
```

## 018

tuple和数组

infer用法：
